-- 003_user_preferences.sql
-- Preferencias alimentares por usuario.

create table if not exists public.user_preferences (
  user_id uuid primary key references auth.users (id) on delete cascade,
  restrictions text[] not null default '{}',
  allergies text[] not null default '{}',
  cuisine_preferences text[] not null default '{}',
  updated_at timestamptz not null default now()
);

alter table public.user_preferences enable row level security;

create policy "preferences_select_own"
  on public.user_preferences for select
  using (auth.uid() = user_id);

create policy "preferences_insert_own"
  on public.user_preferences for insert
  with check (auth.uid() = user_id);

create policy "preferences_update_own"
  on public.user_preferences for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
