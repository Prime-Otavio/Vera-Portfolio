# 🍳 Cozinha Tina

Fotografe a sua geladeira e receba sugestões de receitas com **Claude Vision**,
filtradas pelas suas restrições alimentares. Autenticação e dados no **Supabase**,
deploy do frontend no **Railway**.

- **Frontend:** React 18 + Vite + TypeScript + Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth + Edge Functions)
- **IA:** Claude (`claude-sonnet-4-6`) Vision, via Edge Function
- **Hospedagem:** Railway

---

## ⚠️ Segurança — leia primeiro

A chave da Anthropic é **secreta**. Diferente da spec original, ela **não** fica
no frontend:

- Qualquer variável com prefixo `VITE_` é **embutida em texto puro** no
  JavaScript que vai para o navegador. Colocar `VITE_ANTHROPIC_API_KEY` ali
  exporia a chave para qualquer visitante (e geraria custos no seu nome).
- Aqui, **toda** chamada à Anthropic acontece na Edge Function `analyze-pantry`,
  onde a chave vive como **secret do Supabase**:

  ```bash
  supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
  ```

- A `anon key` do Supabase **pode** ir para o frontend — ela é projetada para
  isso, porque o acesso é controlado por **Row Level Security (RLS)**, que estas
  migrations já habilitam em todas as tabelas.

> Se você já compartilhou uma `ANTHROPIC_API_KEY` em texto (chat, commit, print),
> **revogue e gere outra** no console da Anthropic. Considere a antiga comprometida.

---

## Arquitetura

```
Navegador (React)
   │  1. foto -> base64
   │  2. supabase.functions.invoke('analyze-pantry')   (com JWT do usuário)
   ▼
Edge Function analyze-pantry  (Deno, server-side)
   │  - ANTHROPIC_API_KEY (secret)
   │  - Claude Vision identifica ingredientes (tool use estruturado)
   │  - consulta receitas no Postgres e ranqueia por sobreposição
   ▼
PostgreSQL (Supabase) + RLS
```

A lógica de match de ingredientes mora em `_shared/recipeMatching.ts` e é reusada
pela `analyze-pantry` e pela `search-recipes`.

---

## Passo a passo

### 1. Instalar dependências

```bash
cd cozinha-tina
npm install
```

### 2. Variáveis de ambiente do frontend

```bash
cp .env.example .env
# edite com a URL e a anon key do seu projeto Supabase
```

### 3. Banco de dados (migrations)

Aplique na ordem (via Supabase CLI ou pelo SQL Editor do dashboard):

```bash
supabase link --project-ref totoqtabdjwoqxaferph
supabase db push        # aplica supabase/migrations/*.sql
```

Tabelas criadas: `profiles`, `recipes`, `user_preferences`, `pantry_history`
(todas com RLS). Um trigger cria o perfil automaticamente no cadastro.

### 4. Popular receitas

```bash
export SUPABASE_URL=https://SEU-PROJETO.supabase.co
export SUPABASE_SERVICE_ROLE_KEY=service-role-key
deno run --allow-env --allow-net --allow-read supabase/seed/seed.ts
```

O `recipes_seed.json` traz um conjunto inicial; o loader insere em lotes e
escala para 1000+ receitas sem alterações.

### 5. Edge Functions

```bash
# secret usado SOMENTE no servidor
supabase secrets set ANTHROPIC_API_KEY=sk-ant-...

supabase functions deploy analyze-pantry
supabase functions deploy search-recipes
```

(`SUPABASE_URL`, `SUPABASE_ANON_KEY` e `SUPABASE_SERVICE_ROLE_KEY` são injetadas
automaticamente nas functions pelo Supabase.)

### 6. Rodar local

```bash
npm run dev
```

### 7. Deploy no Railway

1. Crie um serviço apontando para este diretório (`cozinha-tina/`).
2. Defina as variáveis **de build** no Railway:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. O `railway.toml` cuida de `build` (`npm run build`) e `start`
   (`npm run preview`, que escuta em `$PORT`).

---

## Estrutura

```
src/
  components/      Auth, Kitchen, Onboarding, Shared
  hooks/           useAuth, usePantryAnalysis, useRecipes
  services/        supabaseClient, pantryAnalysis, recipeService, preferencesService
  pages/           Home, Dashboard
  lib/             AuthProvider (contexto único de sessão)
supabase/
  migrations/      001..004 (schema + RLS + trigger)
  functions/       analyze-pantry, search-recipes, _shared
  seed/            recipes_seed.json + seed.ts
```

## Principais melhorias sobre a especificação original

- **Chave da Anthropic movida para o servidor** (Edge Function) em vez do bundle
  do navegador — corrige a falha de segurança mais grave.
- **Modelo atualizado:** `claude-3-5-sonnet-20241022` (descontinuado) →
  `claude-sonnet-4-6`.
- **Saída estruturada por tool use** em vez de extrair JSON de texto com regex.
- **Bug corrigido:** `convertImageToBase64` não chamava `readAsDataURL` (a Promise
  nunca resolvia).
- **Match de ingredientes no servidor**, em um módulo único compartilhado.
- **Cores `primary`/`secondary` definidas** no Tailwind (a CSS original as usava
  sem declará-las).
- **RLS + trigger de perfil** para um fluxo de auth consistente.
