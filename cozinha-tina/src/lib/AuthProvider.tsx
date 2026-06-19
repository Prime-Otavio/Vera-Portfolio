import { createContext, useContext, type ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'

type AuthContextValue = ReturnType<typeof useAuth>

const AuthContext = createContext<AuthContextValue | null>(null)

/**
 * Centraliza um unico estado de auth para o app inteiro. Sem isto, cada
 * componente que chamasse useAuth() criaria a sua propria sessao e um listener
 * de onAuthStateChange duplicado.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuthContext(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuthContext precisa estar dentro de <AuthProvider>')
  }
  return ctx
}
