-- 002_recipes_table.sql
-- Catalogo de receitas. Leitura publica (qualquer visitante pode navegar);
-- escrita apenas por roles privilegiadas (service_role nas Edge Functions /
-- seeds). Sem politica de INSERT/UPDATE/DELETE => anon e usuarios logados nao
-- conseguem escrever.

create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  ingredients jsonb not null default '[]'::jsonb,
  instructions jsonb not null default '[]'::jsonb,
  prep_time_minutes integer not null default 0,
  cook_time_minutes integer not null default 0,
  servings integer not null default 1,
  difficulty text not null default 'easy'
    check (difficulty in ('easy', 'medium', 'hard')),
  dietary_tags text[] not null default '{}',
  image_url text,
  rating numeric(2, 1) check (rating >= 0 and rating <= 5),
  created_at timestamptz not null default now()
);

-- Filtro por restricoes usa array contains -> indice GIN acelera.
create index if not exists recipes_dietary_tags_idx
  on public.recipes using gin (dietary_tags);

-- Busca por titulo (ilike) e ordenacao por nota.
create index if not exists recipes_rating_idx
  on public.recipes (rating desc nulls last);

alter table public.recipes enable row level security;

create policy "recipes_public_read"
  on public.recipes for select
  using (true);
