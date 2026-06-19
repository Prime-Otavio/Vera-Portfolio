import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../../lib/AuthProvider'
import LoadingSpinner from '../Shared/LoadingSpinner'

/**
 * Protege rotas autenticadas. Enquanto a sessao carrega, mostra o spinner para
 * evitar um "flash" de redirecionamento para o login em quem ja esta logado.
 */
export default function AuthGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuthContext()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <LoadingSpinner size="lg" label="Verificando sessao..." />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <>{children}</>
}
