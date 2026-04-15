'use client'

import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

import type { ProductId } from 'entity/product'
import { cn } from 'shared/lib/utils'

import { useFavoritesStore } from '../model/store'

interface Props {
  productId: ProductId
  className?: string
}

export function FavoriteButton({ productId, className }: Props) {
  const toggle = useFavoritesStore(s => s.toggle)
  const isFav = useFavoritesStore(s => s.ids.includes(productId))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const active = mounted && isFav

  return (
    <button
      type="button"
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
        toggle(productId)
      }}
      className={cn(
        'text-muted-foreground hover:text-foreground inline-flex size-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-all hairline',
        active && 'text-primary hover:text-primary',
        className
      )}
      aria-label={
        active ? 'Убрать из избранного' : 'Добавить в избранное'
      }
      aria-pressed={active}
    >
      <Heart
        className="size-4"
        fill={active ? 'currentColor' : 'none'}
      />
    </button>
  )
}
