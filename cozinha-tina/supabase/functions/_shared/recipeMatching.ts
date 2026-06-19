// Logica de ranqueamento de receitas por ingredientes detectados.
// Mantida em um unico lugar e reusada por analyze-pantry e search-recipes.

interface RecipeIngredient {
  name: string
  amount?: number
  unit?: string
}

export interface RankableRecipe {
  ingredients: RecipeIngredient[] | null
  [key: string]: unknown
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove acentos (marcas diacriticas combinantes)
    .trim()
}

/** Quantos ingredientes da receita aparecem (por inclusao parcial) entre os detectados. */
function overlapScore(recipe: RankableRecipe, detected: string[]): number {
  const detectedNorm = detected.map(normalize).filter(Boolean)
  const recipeNames = (recipe.ingredients ?? []).map((i) => normalize(i.name)).filter(Boolean)

  return recipeNames.filter((ri) =>
    detectedNorm.some((d) => d.includes(ri) || ri.includes(d)),
  ).length
}

/**
 * Retorna apenas receitas com ao menos um ingrediente em comum, ordenadas pela
 * maior sobreposicao. Empata pela nota (rating) quando disponivel.
 */
export function rankRecipesByIngredients<T extends RankableRecipe>(
  recipes: T[],
  detected: string[],
): T[] {
  if (detected.length === 0) return []

  return recipes
    .map((recipe) => ({ recipe, score: overlapScore(recipe, detected) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      const ra = Number((a.recipe as { rating?: number }).rating ?? 0)
      const rb = Number((b.recipe as { rating?: number }).rating ?? 0)
      return rb - ra
    })
    .map(({ recipe }) => recipe)
}
