import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../lib/AuthProvider'
import LoadingSpinner from '../Shared/LoadingSpinner'

export default function SignupForm() {
  const { signUp } = useAuthContext()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [confirmation, setConfirmation] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (password.length < 6) {
      setFormError('A senha precisa ter ao menos 6 caracteres.')
      return
    }
    setSubmitting(true)
    setFormError(null)
    try {
      await signUp(email, password, name)
      // Se a confirmacao de e-mail estiver ativa no Supabase, nao ha sessao
      // imediata. Avisamos o usuario em vez de mandar para uma area logada vazia.
      setConfirmation(true)
      setTimeout(() => navigate('/onboarding'), 1200)
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Nao foi possivel criar a conta')
    } finally {
      setSubmitting(false)
    }
  }

  if (confirmation) {
    return (
      <div className="card w-full max-w-md text-center animate-fade-in">
        <h1 className="mb-2 text-2xl font-bold">Conta criada! 🎉</h1>
        <p className="text-sm text-gray-500">
          Se a confirmacao por e-mail estiver ativa, verifique a sua caixa de entrada. Vamos
          te levar para configurar as preferencias...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card w-full max-w-md animate-slide-up">
      <h1 className="mb-1 text-2xl font-bold">Criar conta</h1>
      <p className="mb-6 text-sm text-gray-500">Comece a cozinhar com o que voce ja tem.</p>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-gray-700">Nome</span>
        <input
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
          placeholder="Como podemos te chamar?"
        />
      </label>

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
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          placeholder="Minimo de 6 caracteres"
        />
      </label>

      {formError && (
        <p className="mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{formError}</p>
      )}

      <button type="submit" disabled={submitting} className="btn-primary mt-2 w-full">
        {submitting ? <LoadingSpinner size="sm" /> : 'Criar conta'}
      </button>

      <p className="mt-4 text-center text-sm text-gray-500">
        Ja tem conta?{' '}
        <Link to="/login" className="font-semibold text-primary">
          Entrar
        </Link>
      </p>
    </form>
  )
}
