interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  label?: string
}

const SIZES: Record<NonNullable<LoadingSpinnerProps['size']>, string> = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-[3px]',
  lg: 'h-12 w-12 border-4',
}

export default function LoadingSpinner({ size = 'md', label }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3" role="status">
      <div
        className={`${SIZES[size]} animate-spin rounded-full border-primary border-t-transparent`}
      />
      {label && <p className="text-sm text-gray-500">{label}</p>}
      <span className="sr-only">Carregando</span>
    </div>
  )
}
