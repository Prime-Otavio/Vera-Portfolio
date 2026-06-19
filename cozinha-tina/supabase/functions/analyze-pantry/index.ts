// Edge Function: analyze-pantry
// Recebe uma imagem (base64) + restricoes alimentares, identifica os
// ingredientes com Claude Vision e devolve receitas sugeridas do banco.
//
// SEGURANCA: a ANTHROPIC_API_KEY vive aqui como secret do Supabase e NUNCA e
// exposta ao navegador. Configure com:
//   supabase secrets set ANTHROPIC_API_KEY=sk-ant-...

import Anthropic from 'npm:@anthropic-ai/sdk@0.65.0'
import { corsHeaders, jsonResponse } from '../_shared/cors.ts'
import { adminClient, getUserId } from '../_shared/supabase.ts'
import { rankRecipesByIngredients } from '../_shared/recipeMatching.ts'

interface RequestBody {
  image_base64?: string
  mime_type?: string
  dietary_restrictions?: string[]
}

interface DetectedIngredient {
  name: string
  quantity: string
  confidence: 'high' | 'medium' | 'low'
}

const SUPPORTED_MIME = new Set([
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
])

// Ferramenta com schema -> garante saida estruturada e valida, sem precisar
// extrair JSON de texto livre (mais robusto que regex).
const PANTRY_TOOL = {
  name: 'record_pantry',
  description:
    'Registra os ingredientes de comida claramente visiveis na imagem de uma geladeira ou despensa.',
  input_schema: {
    type: 'object' as const,
    properties: {
      ingredients: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Nome do ingrediente em portugues' },
            quantity: {
              type: 'string',
              description: "Quantidade estimada, ou 'disponivel' se incerto",
            },
            confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
          },
          required: ['name', 'quantity', 'confidence'],
        },
      },
      summary: { type: 'string', description: 'Resumo breve do que aparece na imagem' },
    },
    required: ['ingredients', 'summary'],
  },
}

const PROMPT = `Voce e a Tina, uma assistente culinaria. Analise esta imagem de uma geladeira ou cozinha.
Identifique apenas itens de comida e ingredientes que voce consegue ver com clareza.
Seja conservadora: nao invente itens. Para cada um, estime a quantidade quando possivel e
avalie a sua confianca. Registre o resultado usando a ferramenta record_pantry.`

function confidenceScore(items: DetectedIngredient[]): number {
  if (items.length === 0) return 0
  const weight = { high: 1, medium: 0.5, low: 0.25 }
  const total = items.reduce((sum, i) => sum + (weight[i.confidence] ?? 0.25), 0)
  return Number((total / items.length).toFixed(2))
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Metodo nao permitido' }, 405)
  }

  const apiKey = Deno.env.get('ANTHROPIC_API_KEY')
  if (!apiKey) {
    return jsonResponse({ error: 'ANTHROPIC_API_KEY nao configurada no servidor.' }, 500)
  }

  let body: RequestBody
  try {
    body = await req.json()
  } catch {
    return jsonResponse({ error: 'Corpo da requisicao invalido.' }, 400)
  }

  const { image_base64, mime_type, dietary_restrictions = [] } = body
  if (!image_base64) {
    return jsonResponse({ error: 'image_base64 e obrigatorio.' }, 400)
  }
  const mediaType = SUPPORTED_MIME.has(mime_type ?? '') ? mime_type! : 'image/jpeg'

  // 1) Visao: identificar ingredientes.
  let detected: DetectedIngredient[] = []
  let summary = ''
  try {
    const anthropic = new Anthropic({ apiKey })
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      // Classificacao rapida: sem extended thinking. tool_choice forcado exige
      // thinking desligado, o que tambem reduz custo e latencia.
      thinking: { type: 'disabled' },
      tools: [PANTRY_TOOL],
      tool_choice: { type: 'tool', name: 'record_pantry' },
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: mediaType as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp',
                data: image_base64,
              },
            },
            { type: 'text', text: PROMPT },
          ],
        },
      ],
    })

    const toolUse = message.content.find((b) => b.type === 'tool_use')
    if (toolUse && toolUse.type === 'tool_use') {
      const input = toolUse.input as { ingredients?: DetectedIngredient[]; summary?: string }
      detected = (input.ingredients ?? []).filter((i) => i?.name)
      summary = input.summary ?? ''
    }
  } catch (err) {
    const detail = err instanceof Error ? err.message : 'erro desconhecido'
    return jsonResponse({ error: `Falha ao analisar a imagem: ${detail}` }, 502)
  }

  const detectedNames = detected.map((i) => i.name)

  // 2) Buscar receitas (filtrando por restricoes) e ranquear por sobreposicao.
  const supabase = adminClient()
  let query = supabase.from('recipes').select('*')
  if (dietary_restrictions.length > 0) {
    query = query.contains('dietary_tags', dietary_restrictions)
  }
  const { data: recipes, error: recipesError } = await query.limit(200)
  if (recipesError) {
    return jsonResponse({ error: `Falha ao buscar receitas: ${recipesError.message}` }, 500)
  }

  const suggested = rankRecipesByIngredients(recipes ?? [], detectedNames).slice(0, 12)

  const result = {
    detected_ingredients: detectedNames,
    detected_details: detected,
    suggested_recipes: suggested,
    summary,
    confidence_score: confidenceScore(detected),
    analysis_timestamp: new Date().toISOString(),
  }

  // 3) Gravar historico (best-effort) se houver usuario autenticado.
  const userId = await getUserId(req.headers.get('Authorization'))
  if (userId) {
    await supabase.from('pantry_history').insert({
      user_id: userId,
      image_url: null,
      detected_ingredients: detectedNames,
      analysis_result: result,
    })
  }

  return jsonResponse(result)
})
