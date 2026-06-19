-- 004_pantry_history.sql
-- Historico de analises de geladeira por usuario.

create table if not exists public.pantry_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  image_url text,
  detected_ingredients text[] not null default '{}',
  analysis_result jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists pantry_history_user_idx
  on public.pantry_history (user_id, created_at desc);

alter table public.pantry_history enable row level security;

create policy "history_select_own"
  on public.pantry_history for select
  using (auth.uid() = user_id);

create policy "history_insert_own"
  on public.pantry_history for insert
  with check (auth.uid() = user_id);

create policy "history_delete_own"
  on public.pantry_history for delete
  using (auth.uid() = user_id);
