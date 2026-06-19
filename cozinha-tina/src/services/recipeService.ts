import { supabase } from './supabaseClient'
import type { DietaryRestriction, Recipe } from '../types'

/**
 * Leitura do catalogo de receitas. As receitas sao publicas (RLS permite SELECT
 * para todos), entao podemos consultar direto do cliente -- nenhuma dado
 * sensivel passa por aqui.
 */
export const recipeService = {
  async getAllRecipes(limit = 50, offset = 0): Promise<Recipe[]> {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .order('rating', { ascending: false, nullsFirst: false })
      .range(offset, offset + limit - 1)

    if (error) throw error
    return (data ?? []) as Recipe[]
  },

  async searchRecipes(query: string, limit = 20): Promise<Recipe[]> {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .ilike('title', `%${query}%`)
      .limit(limit)

    if (error) throw error
    return (data ?? []) as Recipe[]
  },

  async filterByDietary(restrictions: DietaryRestriction[], limit = 20): Promise<Recipe[]> {
    let query = supabase.from('recipes').select('*')

    if (restrictions.length > 0) {
      // text[] contains: receita precisa conter todas as tags pedidas.
      query = query.contains('dietary_tags', restrictions)
    }

    const { data, error } = await query.limit(limit)
    if (error) throw error
    return (data ?? []) as Recipe[]
  },

  async getRecipeById(id: string): Promise<Recipe | null> {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('id', id)
      .maybeSingle()

    if (error) throw error
    return (data as Recipe) ?? null
  },

  /**
   * Busca por ingredientes delegada a Edge Function `search-recipes`, que faz o
   * ranqueamento por sobreposicao no servidor (uma fonte de verdade so para a
   * logica de match, compartilhada com a analise da geladeira).
   */
  async filterByIngredients(
    ingredients: string[],
    restrictions: DietaryRestriction[] = [],
    limit = 20,
  ): Promise<Recipe[]> {
    const { data, error } = await supabase.functions.invoke<{ recipes: Recipe[] }>(
      'search-recipes',
      {
        body: { ingredients, dietary_restrictions: restrictions, limit },
      },
    )

    if (error) throw error
    return data?.recipes ?? []
  },

  async getPopularRecipes(limit = 10): Promise<Recipe[]> {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .gte('rating', 4)
      .order('rating', { ascending: false })
      .limit(limit)

    if (error) throw error
    return (data ?? []) as Recipe[]
  },
}
