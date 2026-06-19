import { createClient, type Session } from '@supabase/supabase-js'
import type { AuthSession, User } from '../types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Variaveis do Supabase ausentes. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no .env',
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})

/**
 * Monta o objeto User da aplicacao a partir da sessao de auth + a linha de
 * perfil. O perfil e criado por trigger no signup, mas pode haver um pequeno
 * atraso de replicacao logo apos o cadastro; por isso fazemos um fallback para
 * os metadados da propria sessao em vez de lancar erro.
 */
async function buildUserFromSession(session: Session): Promise<User> {
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .maybeSingle()

  if (profile) {
    return profile as User
  }

  return {
    id: session.user.id,
    email: session.user.email ?? '',
    name: (session.user.user_metadata?.name as string | undefined) ?? undefined,
    created_at: session.user.created_at,
    updated_at: session.user.updated_at ?? session.user.created_at,
  }
}

function toAuthSession(session: Session, user: User): AuthSession {
  return {
    user,
    session: {
      access_token: session.access_token,
      refresh_token: session.refresh_token ?? '',
      expires_at: session.expires_at ?? Math.floor(Date.now() / 1000),
    },
  }
}

export const authService = {
  async signUpWithEmail(email: string, password: string, name: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    })
    if (error) throw error
    return data
  },

  async signInWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async getSession(): Promise<AuthSession | null> {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) return null

    const user = await buildUserFromSession(session)
    return toAuthSession(session, user)
  },

  async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) throw error
  },

  onAuthStateChange(callback: (session: AuthSession | null) => void) {
    return supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        const user = await buildUserFromSession(session)
        callback(toAuthSession(session, user))
      } else {
        callback(null)
      }
    })
  },
}
