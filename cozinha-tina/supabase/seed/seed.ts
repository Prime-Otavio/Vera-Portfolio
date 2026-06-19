// Carrega as receitas de recipes_seed.json no banco usando a service_role key.
//
// Uso (Deno):
//   export SUPABASE_URL=https://SEU-PROJETO.supabase.co
//   export SUPABASE_SERVICE_ROLE_KEY=service-role-key
//   deno run --allow-env --allow-net --allow-read supabase/seed/seed.ts
//
// A service_role key ignora RLS e NUNCA deve ir para o frontend nem para o git.
// Rode este script localmente ou em CI com a chave vinda de um secret.

import { createClient } from 'jsr:@supabase/supabase-js@2'

const url = Deno.env.get('SUPABASE_URL')
const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

if (!url || !serviceKey) {
  console.error('Defina SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY no ambiente.')
  Deno.exit(1)
}

const recipes = JSON.parse(
  await Deno.readTextFile(new URL('./recipes_seed.json', import.meta.url)),
) as unknown[]

const supabase = createClient(url, serviceKey, { auth: { persistSession: false } })

// Insere em lotes para escalar ate 1000+ receitas sem estourar limites.
const BATCH = 100
let inserted = 0
for (let i = 0; i < recipes.length; i += BATCH) {
  const slice = recipes.slice(i, i + BATCH)
  const { error } = await supabase.from('recipes').insert(slice)
  if (error) {
    console.error(`Falha no lote ${i / BATCH + 1}:`, error.message)
    Deno.exit(1)
  }
  inserted += slice.length
  console.log(`Inseridas ${inserted}/${recipes.length} receitas...`)
}

console.log(`Pronto! ${inserted} receitas inseridas.`)
