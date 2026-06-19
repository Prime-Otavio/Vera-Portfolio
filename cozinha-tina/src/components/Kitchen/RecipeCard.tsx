import { useState } from 'react'
import { DIETARY_RESTRICTIONS, type Recipe } from '../../types'

const DIFFICULTY_LABEL: Record<Recipe['difficulty'], string> = {
  easy: 'Facil',
  medium: 'Medio',
  hard: 'Dificil',
}

function tagLabel(tag: string): string {
  return DIETARY_RESTRICTIONS.find((d) => d.value === tag)?.label ?? tag
}

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [expanded, setExpanded] = useState(false)
  const totalTime = recipe.prep_time_minutes + recipe.cook_time_minutes

  return (
    <article className="card animate-fade-in flex flex-col">
      {recipe.image_url && (
        <img
          src={recipe.image_url}
          alt={recipe.title}
          loading="lazy"
          className="mb-4 h-40 w-full rounded-lg object-cover"
        />
      )}

      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold leading-tight">{recipe.title}</h3>
        {typeof recipe.rating === 'number' && (
          <span className="shrink-0 text-sm font-semibold text-secondary">
            ★ {recipe.rating.toFixed(1)}
          </span>
        )}
      </div>

      <p className="mb-3 text-sm text-gray-500">{recipe.description}</p>

      <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
        <span>⏱️ {totalTime} min</span>
        <span>🍽️ {recipe.servings} porcoes</span>
        <span>📊 {DIFFICULTY_LABEL[recipe.difficulty]}</span>
      </div>

      {recipe.dietary_tags.filter((t) => t !== 'none').length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {recipe.dietary_tags
            .filter((t) => t !== 'none')
            .map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-600"
              >
                {tagLabel(tag)}
              </span>
            ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-auto text-left text-sm font-semibold text-primary"
      >
        {expanded ? 'Ocultar receita' : 'Ver ingredientes e modo de preparo'}
      </button>

      {expanded && (
        <div className="mt-3 border-t border-gray-100 pt-3 text-sm">
          <h4 className="mb-1 font-semibold">Ingredientes</h4>
          <ul className="mb-3 list-disc space-y-0.5 pl-5 text-gray-600">
            {recipe.ingredients.map((ing, i) => (
              <li key={`${ing.name}-${i}`}>
                {ing.amount ? `${ing.amount} ${ing.unit} de ` : ''}
                {ing.name}
              </li>
            ))}
          </ul>
          <h4 className="mb-1 font-semibold">Modo de preparo</h4>
          <ol className="list-decimal space-y-1 pl-5 text-gray-600">
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </article>
  )
}
