'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'

import { useFavoritesStore } from 'feature/favorites'
import { ROUTES } from 'shared/lib/constants/routes'

export function FavoritesButton() {
  const count = useFavoritesStore(s => s.ids.length)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Link
      href={ROUTES.ACCOUNT_FAVORITES}
      className="group text-muted-foreground hover:text-foreground relative inline-flex size-9 items-center justify-center rounded-md transition-colors"
      aria-label={`Избранное${mounted && count > 0 ? `: ${count} товаров` : ''}`}
    >
      <Heart className="size-[18px]" />
      {mounted && count > 0 ? (
        <span className="bg-primary text-primary-foreground ring-background absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-semibold ring-2">
          {count}
        </span>
      ) : null}
    </Link>
  )
}
