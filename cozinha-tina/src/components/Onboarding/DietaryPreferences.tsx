import DietaryFilter from '../Kitchen/DietaryFilter'
import type { DietaryRestriction } from '../../types'

interface DietaryPreferencesProps {
  selected: DietaryRestriction[]
  onChange: (next: DietaryRestriction[]) => void
  allergies: string
  onAllergiesChange: (value: string) => void
}

export default function DietaryPreferences({
  selected,
  onChange,
  allergies,
  onAllergiesChange,
}: DietaryPreferencesProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-1 font-semibold">Restricoes alimentares</h3>
        <p className="mb-3 text-sm text-gray-500">
          Vamos usar isto para filtrar as receitas sugeridas.
        </p>
        <DietaryFilter selected={selected} onChange={onChange} />
      </div>

      <div>
        <label className="mb-1 block font-semibold" htmlFor="allergies">
          Alergias (opcional)
        </label>
        <p className="mb-2 text-sm text-gray-500">Separe por virgulas. Ex: amendoim, camarao.</p>
        <input
          id="allergies"
          type="text"
          value={allergies}
          onChange={(e) => onAllergiesChange(e.target.value)}
          className="input-field"
          placeholder="amendoim, frutos do mar..."
        />
      </div>
    </div>
  )
}
