import { useCallback, useState } from 'react'
import { pantryAnalysisService } from '../services/pantryAnalysis'
import type { PantryAnalysisResult } from '../types'

interface UsePantryAnalysisReturn {
  result: PantryAnalysisResult | null
  loading: boolean
  error: string | null
  analyzeImage: (
    imageFile: File,
    dietaryRestrictions?: string[],
  ) => Promise<PantryAnalysisResult>
  reset: () => void
}

export function usePantryAnalysis(): UsePantryAnalysisReturn {
  const [result, setResult] = useState<PantryAnalysisResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const analyzeImage = useCallback(
    async (imageFile: File, dietaryRestrictions: string[] = []) => {
      setLoading(true)
      setError(null)
      try {
        const analysisResult = await pantryAnalysisService.analyzeImageAndFindRecipes(
          imageFile,
          dietaryRestrictions,
        )
        setResult(analysisResult)
        return analysisResult
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Falha na analise'
        setError(message)
        throw err
      } finally {
        setLoading(false)
      }
    },
    [],
  )

  const reset = useCallback(() => {
    setResult(null)
    setError(null)
  }, [])

  return { result, loading, error, analyzeImage, reset }
}
