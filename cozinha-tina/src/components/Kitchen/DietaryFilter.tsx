import { DIETARY_RESTRICTIONS, type DietaryRestriction } from '../../types'

interface DietaryFilterProps {
  selected: DietaryRestriction[]
  onChange: (next: DietaryRestriction[]) => void
}

export default function DietaryFilter({ selected, onChange }: DietaryFilterProps) {
  function toggle(value: DietaryRestriction) {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value))
    } else {
      onChange([...selected, value])
    }
  }

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Restricoes alimentares">
      {DIETARY_RESTRICTIONS.map(({ value, label }) => {
        const active = selected.includes(value)
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            onClick={() => toggle(value)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              active
                ? 'border-primary bg-primary text-white'
                : 'border-gray-300 bg-white text-gray-600 hover:border-primary'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
