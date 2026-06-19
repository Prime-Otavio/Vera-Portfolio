import { useCallback, useState } from 'react'
import { recipeService } from '../services/recipeService'
import type { DietaryRestriction, Recipe } from '../types'

const PAGE_SIZE = 20

interface UseRecipesReturn {
  recipes: Recipe[]
  loading: boolean
  error: string | null
  hasMore: boolean
  searchRecipes: (query: string) => Promise<void>
  filterByDietary: (restrictions: DietaryRestriction[]) => Promise<void>
  filterByIngredients: (
    ingredients: string[],
    restrictions?: DietaryRestriction[],
  ) => Promise<void>
  getPopularRecipes: () => Promise<void>
  getAllRecipes: () => Promise<void>
  loadMore: () => Promise<void>
  reset: () => void
}

export function useRecipes(): UseRecipesReturn {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const run = useCallback(async (fn: () => Promise<Recipe[]>, paginated = false) => {
    setLoading(true)
    setError(null)
    try {
      const data = await fn()
      setRecipes(data)
      setOffset(paginated ? data.length : 0)
      setHasMore(paginated ? data.length === PAGE_SIZE : false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao carregar receitas')
    } finally {
      setLoading(false)
    }
  }, [])

  const getAllRecipes = useCallback(
    () => run(() => recipeService.getAllRecipes(PAGE_SIZE, 0), true),
    [run],
  )

  const getPopularRecipes = useCallback(
    () => run(() => recipeService.getPopularRecipes(10)),
    [run],
  )

  const searchRecipes = useCallback(
    (query: string) => run(() => recipeService.searchRecipes(query)),
    [run],
  )

  const filterByDietary = useCallback(
    (restrictions: DietaryRestriction[]) =>
      run(() => recipeService.filterByDietary(restrictions)),
    [run],
  )

  const filterByIngredients = useCallback(
    (ingredients: string[], restrictions: DietaryRestriction[] = []) =>
      run(() => recipeService.filterByIngredients(ingredients, restrictions)),
    [run],
  )

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return
    setLoading(true)
    setError(null)
    try {
      const next = await recipeService.getAllRecipes(PAGE_SIZE, offset)
      setRecipes((prev) => [...prev, ...next])
      setOffset((prev) => prev + next.length)
      setHasMore(next.length === PAGE_SIZE)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao carregar mais')
    } finally {
      setLoading(false)
    }
  }, [hasMore, loading, offset])

  const reset = useCallback(() => {
    setRecipes([])
    setOffset(0)
    setHasMore(true)
    setError(null)
  }, [])

  return {
    recipes,
    loading,
    error,
    hasMore,
    searchRecipes,
    filterByDietary,
    filterByIngredients,
    getPopularRecipes,
    getAllRecipes,
    loadMore,
    reset,
  }
}
