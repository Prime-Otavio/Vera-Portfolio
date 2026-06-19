import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../lib/AuthProvider'
import LoadingSpinner from '../Shared/LoadingSpinner'

export default function LoginForm() {
  const { signIn } = useAuthContext()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setSubmitting(true)
    setFormError(null)
    try {
      await signIn(email, password)
      navigate('/dashboard')
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Nao foi possivel entrar')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card w-full max-w-md animate-slide-up">
      <h1 className="mb-1 text-2xl font-bold">Bem-vindo de volta</h1>
      <p className="mb-6 text-sm text-gray-500">Entre para analisar a sua geladeira.</p>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-gray-700">E-mail</span>
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          placeholder="voce@email.com"
        />
      </label>

      <label className="mb-2 block">
        <span className="mb-1 block text-sm font-medium text-gray-700">Senha</span>
        <input
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          placeholder="••••••••"
        />
      </label>

      {formError && (
        <p className="mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{formError}</p>
      )}

      <button type="submit" disabled={submitting} className="btn-primary mt-2 w-full">
        {submitting ? <LoadingSpinner size="sm" /> : 'Entrar'}
      </button>

      <p className="mt-4 text-center text-sm text-gray-500">
        Ainda nao tem conta?{' '}
        <Link to="/signup" className="font-semibold text-primary">
          Criar conta
        </Link>
      </p>
    </form>
  )
}
