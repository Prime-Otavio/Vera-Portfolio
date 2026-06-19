import { Link, useLocation } from 'react-router-dom'
import { useAuthContext } from '../../lib/AuthProvider'

export default function Navigation() {
  const { user, signOut } = useAuthContext()
  const location = useLocation()

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      location.pathname === path ? 'text-primary' : 'text-gray-600 hover:text-primary'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="container-app flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span aria-hidden>🍳</span>
          <span className="text-gradient">Cozinha Tina</span>
        </Link>

        <div className="flex items-center gap-6">
          {user ? (
            <>
              <Link to="/dashboard" className={linkClass('/dashboard')}>
                Minha cozinha
              </Link>
              <span className="hidden text-sm text-gray-400 sm:inline">
                {user.name || user.email}
              </span>
              <button
                onClick={() => void signOut()}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={linkClass('/login')}>
                Entrar
              </Link>
              <Link to="/signup" className="btn-primary !px-4 !py-2 text-sm">
                Criar conta
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
