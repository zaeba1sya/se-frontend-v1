'use client'

import { useEffect, useState } from 'react'
import { Minus, Plus, ShoppingBag } from 'lucide-react'

import type { Product } from 'entity/product'
import { cn } from 'shared/lib/utils'
import { Button } from 'shared/ui'

import { useCartStore } from '../model/store'

interface Props {
  product: Product
  className?: string
  fullWidth?: boolean
}

export function CartControl({
  product,
  className,
  fullWidth = false
}: Props) {
  const add = useCartStore((s) => s.add)
  const increment = useCartStore((s) => s.increment)
  const decrement = useCartStore((s) => s.decrement)
  const item = useCartStore((s) =>
    s.items.find((i) => i.productId === product.id)
  )
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const inCart = mounted && !!item

  if (!inCart) {
    return (
      <Button
        type="button"
        size="lg"
        disabled={!product.inStock}
        onClick={() => add(product, 1)}
        className={cn(
          'h-12 rounded-full px-6',
          fullWidth && 'w-full',
          className
        )}
      >
        <ShoppingBag className="size-4" />
        {product.inStock ? 'В корзину' : 'Нет в наличии'}
      </Button>
    )
  }

  return (
    <div
      className={cn(
        'hairline bg-card-muted inline-flex h-12 items-center justify-between gap-2 rounded-full p-1',
        fullWidth && 'w-full',
        className
      )}
    >
      <button
        type="button"
        onClick={() => decrement(product.id)}
        className="text-muted-foreground hover:bg-background hover:text-foreground flex size-10 items-center justify-center rounded-full transition-colors"
        aria-label="Уменьшить количество"
      >
        <Minus className="size-4" />
      </button>
      <span className="flex min-w-[2ch] flex-1 items-center justify-center text-sm font-semibold tabular-nums">
        {item?.quantity ?? 0} шт
      </span>
      <button
        type="button"
        onClick={() => increment(product.id)}
        className="bg-primary text-primary-foreground hover:bg-primary/90 flex size-10 items-center justify-center rounded-full transition-colors"
        aria-label="Увеличить количество"
      >
        <Plus className="size-4" />
      </button>
    </div>
  )
}
