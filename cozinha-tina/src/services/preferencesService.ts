import { supabase } from './supabaseClient'
import type { DietaryRestriction, UserDietaryPreferences } from '../types'

export const preferencesService = {
  async get(userId: string): Promise<UserDietaryPreferences | null> {
    const { data, error } = await supabase
      .from('user_preferences')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle()

    if (error) throw error
    return (data as UserDietaryPreferences) ?? null
  },

  async upsert(
    userId: string,
    prefs: {
      restrictions: DietaryRestriction[]
      allergies?: string[]
      cuisine_preferences?: string[]
    },
  ): Promise<UserDietaryPreferences> {
    const payload = {
      user_id: userId,
      restrictions: prefs.restrictions,
      allergies: prefs.allergies ?? [],
      cuisine_preferences: prefs.cuisine_preferences ?? [],
      updated_at: new Date().toISOString(),
    }

    const { data, error } = await supabase
      .from('user_preferences')
      .upsert(payload, { onConflict: 'user_id' })
      .select()
      .single()

    if (error) throw error
    return data as UserDietaryPreferences
  },
}
