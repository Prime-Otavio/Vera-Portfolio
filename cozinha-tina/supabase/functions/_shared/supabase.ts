import { createClient, type SupabaseClient } from 'jsr:@supabase/supabase-js@2'

// Variaveis injetadas automaticamente pelo runtime de Edge Functions do Supabase.
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? ''
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY') ?? ''

/** Cliente com service_role: ignora RLS. Use apenas no servidor. */
export function adminClient(): SupabaseClient {
  return createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  })
}

/**
 * Resolve o usuario autenticado a partir do header Authorization que o
 * supabase-js envia junto com functions.invoke(). Retorna null se nao houver
 * sessao valida (a function ainda funciona, so nao grava historico).
 */
export async function getUserId(authHeader: string | null): Promise<string | null> {
  if (!authHeader) return null
  const client = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false },
  })
  const {
    data: { user },
  } = await client.auth.getUser()
  return user?.id ?? null
}
