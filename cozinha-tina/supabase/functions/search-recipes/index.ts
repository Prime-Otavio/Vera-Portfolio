// Edge Function: search-recipes
// Ranqueia receitas por uma lista de ingredientes (sem IA). Reusa a mesma
// logica de match da analyze-pantry, garantindo resultados consistentes.

import { corsHeaders, jsonResponse } from '../_shared/cors.ts'
import { adminClient } from '../_shared/supabase.ts'
import { rankRecipesByIngredients } from '../_shared/recipeMatching.ts'

interface RequestBody {
  ingredients?: string[]
  dietary_restrictions?: string[]
  limit?: number
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Metodo nao permitido' }, 405)
  }

  let body: RequestBody
  try {
    body = await req.json()
  } catch {
    return jsonResponse({ error: 'Corpo da requisicao invalido.' }, 400)
  }

  const { ingredients = [], dietary_restrictions = [], limit = 20 } = body

  const supabase = adminClient()
  let query = supabase.from('recipes').select('*')
  if (dietary_restrictions.length > 0) {
    query = query.contains('dietary_tags', dietary_restrictions)
  }
  const { data: recipes, error } = await query.limit(200)
  if (error) {
    return jsonResponse({ error: error.message }, 500)
  }

  // Sem ingredientes informados: devolve as melhores avaliadas (fallback util).
  const ranked =
    ingredients.length > 0
      ? rankRecipesByIngredients(recipes ?? [], ingredients)
      : [...(recipes ?? [])].sort(
          (a, b) => Number(b.rating ?? 0) - Number(a.rating ?? 0),
        )

  return jsonResponse({ recipes: ranked.slice(0, Math.max(1, Math.min(limit, 50))) })
})
