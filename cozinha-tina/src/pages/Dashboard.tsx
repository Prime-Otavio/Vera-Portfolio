import { useEffect, useState } from 'react'
import { useAuthContext } from '../lib/AuthProvider'
import { preferencesService } from '../services/preferencesService'
import { useRecipes } from '../hooks/useRecipes'
import DietaryFilter from '../components/Kitchen/DietaryFilter'
import PantryCamera from '../components/Kitchen/PantryCamera'
import RecipeList from '../components/Kitchen/RecipeList'
import type { DietaryRestriction, PantryAnalysisResult } from '../types'

export default function Dashboard() {
  const { user } = useAuthContext()
  const { recipes: popular, loading: loadingPopular, getPopularRecipes } = useRecipes()

  const [restrictions, setRestrictions] = useState<DietaryRestriction[]>([])
  const [analysis, setAnalysis] = useState<PantryAnalysisResult | null>(null)

  // Carrega preferencias salvas + receitas populares uma vez.
  useEffect(() => {
    void getPopularRecipes()
    if (!user) return
    preferencesService
      .get(user.id)
      .then((prefs) => {
        if (prefs?.restrictions?.length) setRestrictions(prefs.restrictions)
      })
      .catch(() => {
        /* preferencias sao opcionais; ignorar falha de leitura */
      })
  }, [user, getPopularRecipes])

  return (
    <div className="container-app py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">
          Olá, {user?.name || 'chef'}! 👋
        </h1>
        <p className="text-gray-500">Fotografe a sua geladeira e veja o que da pra cozinhar.</p>
      </header>

      <section className="mb-6">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Restricoes para esta busca
        </h2>
        <DietaryFilter selected={restrictions} onChange={setRestrictions} />
      </section>

      <section className="mb-10">
        <PantryCamera restrictions={restrictions} onResult={setAnalysis} />
      </section>

      {analysis && (
        <section className="mb-12 animate-fade-in">
          <div className="card mb-6 bg-primary-50">
            <h2 className="mb-2 text-lg font-bold">Ingredientes detectados</h2>
            {analysis.summary && (
              <p className="mb-3 text-sm text-gray-600">{analysis.summary}</p>
            )}
            {analysis.detected_ingredients.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {analysis.detected_ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="rounded-full bg-white px-3 py-1 text-sm font-medium text-primary-600 shadow-sm"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Nao consegui identificar ingredientes com clareza. Tente uma foto mais nitida.
              </p>
            )}
            <p className="mt-3 text-xs text-gray-400">
              Confianca da analise: {Math.round(analysis.confidence_score * 100)}%
            </p>
          </div>

          <h2 className="mb-4 text-xl font-bold">Receitas sugeridas</h2>
          <RecipeList
            recipes={analysis.suggested_recipes}
            emptyMessage="Nenhuma receita combinou com estes ingredientes e restricoes. Tente remover algum filtro."
          />
        </section>
      )}

      <section>
        <h2 className="mb-4 text-xl font-bold">Populares na Cozinha Tina</h2>
        <RecipeList recipes={popular} loading={loadingPopular} />
      </section>
    </div>
  )
}
