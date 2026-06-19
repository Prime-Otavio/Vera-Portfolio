import type { Recipe } from '../../types'
import LoadingSpinner from '../Shared/LoadingSpinner'
import RecipeCard from './RecipeCard'

interface RecipeListProps {
  recipes: Recipe[]
  loading?: boolean
  emptyMessage?: string
}

export default function RecipeList({
  recipes,
  loading = false,
  emptyMessage = 'Nenhuma receita encontrada ainda.',
}: RecipeListProps) {
  if (loading && recipes.length === 0) {
    return (
      <div className="flex min-h-[30vh] items-center justify-center">
        <LoadingSpinner size="lg" label="Buscando receitas..." />
      </div>
    )
  }

  if (recipes.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-gray-500">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
