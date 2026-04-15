import { formatPrice } from 'shared/lib/format'
import { cn } from 'shared/lib/utils'

interface Props {
  price: number
  oldPrice?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const SIZE: Record<NonNullable<Props['size']>, string> = {
  lg: 'text-2xl',
  md: 'text-lg',
  sm: 'text-base',
  xl: 'text-3xl'
}

export function PriceTag({
  price,
  oldPrice,
  size = 'md',
  className
}: Props) {
  const hasDiscount = typeof oldPrice === 'number' && oldPrice > price

  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <span
        className={cn(
          'text-foreground font-semibold tracking-tight tabular-nums',
          SIZE[size]
        )}
      >
        {formatPrice(price)}
      </span>
      {hasDiscount ? (
        <span className="text-muted-foreground text-xs line-through tabular-nums">
          {formatPrice(oldPrice)}
        </span>
      ) : null}
    </div>
  )
}
