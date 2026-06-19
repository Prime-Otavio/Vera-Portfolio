import { useCallback, useEffect, useState } from 'react'
import { authService } from '../services/supabaseClient'
import type { AuthSession, User } from '../types'

interface UseAuthReturn {
  user: User | null
  session: AuthSession | null
  loading: boolean
  error: string | null
  signUp: (email: string, password: string, name: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<AuthSession | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    authService
      .getSession()
      .then((authSession) => {
        if (!active) return
        setSession(authSession)
        setUser(authSession?.user ?? null)
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : 'Erro de autenticacao')
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    const {
      data: { subscription },
    } = authService.onAuthStateChange((authSession) => {
      setSession(authSession)
      setUser(authSession?.user ?? null)
    })

    return () => {
      active = false
      subscription?.unsubscribe()
    }
  }, [])

  const signUp = useCallback(async (email: string, password: string, name: string) => {
    setError(null)
    try {
      await authService.signUpWithEmail(email, password, name)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Falha no cadastro'
      setError(message)
      throw err
    }
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    setError(null)
    try {
      await authService.signInWithEmail(email, password)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Falha no login'
      setError(message)
      throw err
    }
  }, [])

  const signOut = useCallback(async () => {
    setError(null)
    try {
      await authService.signOut()
      setSession(null)
      setUser(null)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Falha ao sair'
      setError(message)
      throw err
    }
  }, [])

  const resetPassword = useCallback(async (email: string) => {
    setError(null)
    try {
      await authService.resetPassword(email)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Falha ao redefinir senha'
      setError(message)
      throw err
    }
  }, [])

  return { user, session, loading, error, signUp, signIn, signOut, resetPassword }
}
