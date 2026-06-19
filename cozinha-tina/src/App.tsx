import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './lib/AuthProvider'
import Navigation from './components/Shared/Navigation'
import AuthGuard from './components/Auth/AuthGuard'
import LoginForm from './components/Auth/LoginForm'
import SignupForm from './components/Auth/SignupForm'
import OnboardingFlow from './components/Onboarding/OnboardingFlow'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function CenteredAuth({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-10">
      {children}
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <CenteredAuth>
                  <LoginForm />
                </CenteredAuth>
              }
            />
            <Route
              path="/signup"
              element={
                <CenteredAuth>
                  <SignupForm />
                </CenteredAuth>
              }
            />
            <Route
              path="/onboarding"
              element={
                <AuthGuard>
                  <CenteredAuth>
                    <OnboardingFlow />
                  </CenteredAuth>
                </AuthGuard>
              }
            />
            <Route
              path="/dashboard"
              element={
                <AuthGuard>
                  <Dashboard />
                </AuthGuard>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  )
}
