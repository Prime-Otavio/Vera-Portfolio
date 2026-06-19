import { supabase } from './supabaseClient'
import type { PantryAnalysisResult } from '../types'

/**
 * IMPORTANTE (seguranca): a analise de imagem chama a Anthropic, que usa uma
 * chave SECRETA. Essa chamada NUNCA acontece no navegador -- ela e feita pela
 * Edge Function `analyze-pantry`, onde a chave fica como secret do Supabase.
 * Aqui no cliente so convertemos a imagem e invocamos a function autenticada.
 */
export const pantryAnalysisService = {
  convertImageToBase64(file: File): Promise<{ base64: string; mimeType: string }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        const [header, base64] = result.split(',')
        const mimeType = header.match(/data:([^;]+)/)?.[1] || 'image/jpeg'
        resolve({ base64, mimeType })
      }
      reader.onerror = () => reject(reader.error ?? new Error('Falha ao ler a imagem'))
      // Bug do spec original: faltava iniciar a leitura. Sem isto o onload
      // nunca dispara e a Promise fica pendente para sempre.
      reader.readAsDataURL(file)
    })
  },

  async analyzeImageAndFindRecipes(
    imageFile: File,
    dietaryRestrictions: string[] = [],
  ): Promise<PantryAnalysisResult> {
    const { base64, mimeType } = await this.convertImageToBase64(imageFile)

    const { data, error } = await supabase.functions.invoke<PantryAnalysisResult>(
      'analyze-pantry',
      {
        body: {
          image_base64: base64,
          mime_type: mimeType,
          dietary_restrictions: dietaryRestrictions,
        },
      },
    )

    if (error) {
      throw new Error(`Falha na analise da geladeira: ${error.message}`)
    }
    if (!data) {
      throw new Error('A analise nao retornou resultado.')
    }

    return data
  },
}
