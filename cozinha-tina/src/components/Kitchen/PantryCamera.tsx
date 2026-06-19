import { useEffect, useRef, useState } from 'react'
import { usePantryAnalysis } from '../../hooks/usePantryAnalysis'
import type { DietaryRestriction, PantryAnalysisResult } from '../../types'
import LoadingSpinner from '../Shared/LoadingSpinner'

interface PantryCameraProps {
  restrictions: DietaryRestriction[]
  onResult: (result: PantryAnalysisResult) => void
}

const MAX_FILE_MB = 8

export default function PantryCamera({ restrictions, onResult }: PantryCameraProps) {
  const { analyzeImage, loading, error } = usePantryAnalysis()
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [localError, setLocalError] = useState<string | null>(null)

  // Libera a URL do preview para nao vazar memoria entre trocas de imagem.
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  function handleSelect(selected: File | undefined) {
    setLocalError(null)
    if (!selected) return
    if (!selected.type.startsWith('image/')) {
      setLocalError('Selecione um arquivo de imagem.')
      return
    }
    if (selected.size > MAX_FILE_MB * 1024 * 1024) {
      setLocalError(`A imagem precisa ter menos de ${MAX_FILE_MB}MB.`)
      return
    }
    if (preview) URL.revokeObjectURL(preview)
    setFile(selected)
    setPreview(URL.createObjectURL(selected))
  }

  async function handleAnalyze() {
    if (!file) return
    try {
      const result = await analyzeImage(file, restrictions)
      onResult(result)
    } catch {
      // erro ja exposto via `error` do hook
    }
  }

  return (
    <div className="card">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => handleSelect(e.target.files?.[0])}
      />

      {preview ? (
        <div className="space-y-4">
          <img
            src={preview}
            alt="Pre-visualizacao da geladeira"
            className="max-h-80 w-full rounded-lg object-contain bg-gray-50"
          />
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => void handleAnalyze()}
              disabled={loading}
              className="btn-primary flex items-center gap-2"
            >
              {loading ? <LoadingSpinner size="sm" /> : '🔍 Analisar geladeira'}
            </button>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={loading}
              className="btn-outline"
            >
              Trocar foto
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-300 py-14 text-center transition-colors hover:border-primary"
        >
          <span className="text-4xl" aria-hidden>
            📸
          </span>
          <span className="font-semibold text-gray-700">
            Toque para fotografar ou enviar uma foto
          </span>
          <span className="text-sm text-gray-400">
            Abra a geladeira ou a despensa e capture os ingredientes
          </span>
        </button>
      )}

      {(localError || error) && (
        <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
          {localError || error}
        </p>
      )}

      {loading && (
        <p className="mt-4 text-center text-sm text-gray-500">
          A Tina esta olhando a sua geladeira com atencao...
        </p>
      )}
    </div>
  )
}
