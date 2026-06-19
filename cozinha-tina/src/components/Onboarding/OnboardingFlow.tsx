import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../lib/AuthProvider'
import { preferencesService } from '../../services/preferencesService'
import type { DietaryRestriction } from '../../types'
import DietaryPreferences from './DietaryPreferences'
import LoadingSpinner from '../Shared/LoadingSpinner'

export default function OnboardingFlow() {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const [restrictions, setRestrictions] = useState<DietaryRestriction[]>([])
  const [allergies, setAllergies] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleFinish() {
    if (!user) return
    setSaving(true)
    setError(null)
    try {
      await preferencesService.upsert(user.id, {
        restrictions,
        allergies: allergies
          .split(',')
          .map((a) => a.trim())
          .filter(Boolean),
      })
      navigate('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nao foi possivel salvar')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="card mx-auto w-full max-w-xl animate-slide-up">
      <div className="mb-6">
        <span className="text-sm font-semibold text-primary">Bem-vindo(a)!</span>
        <h1 className="text-2xl font-bold">Vamos personalizar a sua cozinha</h1>
        <p className="text-sm text-gray-500">
          Conte as suas preferencias para receber receitas que fazem sentido pra voce.
        </p>
      </div>

      <DietaryPreferences
        selected={restrictions}
        onChange={setRestrictions}
        allergies={allergies}
        onAllergiesChange={setAllergies}
      />

      {error && (
        <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          Pular por agora
        </button>
        <button
          type="button"
          onClick={() => void handleFinish()}
          disabled={saving}
          className="btn-primary flex items-center gap-2"
        >
          {saving ? <LoadingSpinner size="sm" /> : 'Concluir'}
        </button>
      </div>
    </div>
  )
}
