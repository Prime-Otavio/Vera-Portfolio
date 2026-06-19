export interface User {
  id: string
  email: string
  name?: string
  dietary_restrictions?: DietaryRestriction[]
  created_at: string
  updated_at: string
}

export type DietaryRestriction =
  | 'gluten-free'
  | 'dairy-free'
  | 'vegan'
  | 'vegetarian'
  | 'low-carb'
  | 'keto'
  | 'nut-free'
  | 'none'

export const DIETARY_RESTRICTIONS: { value: DietaryRestriction; label: string }[] = [
  { value: 'vegetarian', label: 'Vegetariano' },
  { value: 'vegan', label: 'Vegano' },
  { value: 'gluten-free', label: 'Sem gluten' },
  { value: 'dairy-free', label: 'Sem lactose' },
  { value: 'low-carb', label: 'Low carb' },
  { value: 'keto', label: 'Keto' },
  { value: 'nut-free', label: 'Sem oleaginosas' },
]

export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Ingredient {
  name: string
  amount: number
  unit: string
}

export interface Recipe {
  id: string
  title: string
  description: string
  ingredients: Ingredient[]
  instructions: string[]
  prep_time_minutes: number
  cook_time_minutes: number
  servings: number
  difficulty: Difficulty
  dietary_tags: DietaryRestriction[]
  image_url?: string
  rating?: number
  created_at: string
}

export type DetectionConfidence = 'high' | 'medium' | 'low'

export interface DetectedIngredient {
  name: string
  quantity: string
  confidence: DetectionConfidence
}

export interface PantryAnalysisResult {
  detected_ingredients: string[]
  detected_details: DetectedIngredient[]
  suggested_recipes: Recipe[]
  summary: string
  confidence_score: number
  analysis_timestamp: string
}

export interface UserDietaryPreferences {
  user_id: string
  restrictions: DietaryRestriction[]
  allergies: string[]
  cuisine_preferences: string[]
  updated_at: string
}

export interface PantryHistory {
  id: string
  user_id: string
  image_url: string
  detected_ingredients: string[]
  analysis_result: PantryAnalysisResult
  created_at: string
}

export interface AuthSession {
  user: User
  session: {
    access_token: string
    refresh_token: string
    expires_at: number
  }
}
