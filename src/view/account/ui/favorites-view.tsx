'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'

import { ProductCard } from 'entity/product'
import { useFavoritesStore } from 'feature/favorites'
import { ROUTES } from 'shared/lib/constants/routes'
import { PRODUCTS } from 'shared/mocks'
import { Button } from 'shared/ui'

export function FavoritesView() {
  const ids = useFavoritesStore(s => s.ids)
  const items = PRODUCTS.filter(p => ids.includes(p.id))

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-display text-2xl font-semibold tracking-tight">
        Избранное
      </h1>

      {items.length === 0 ? (
        <div className="bg-card hairline flex flex-col items-center gap-3 rounded-2xl p-12 text-center">
          <div className="bg-primary/10 text-primary flex size-14 items-center justify-center rounded-full">
            <Heart className="size-6" />
          </div>
          <h2 className="text-lg font-semibold">
            В избранном пока пусто
          </h2>
          <p className="text-muted-foreground max-w-md text-sm">
            Добавляйте товары в избранное, чтобы быстро вернуться к
            ним позже.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-2 h-11 rounded-full px-6"
          >
            <Link href={ROUTES.CATALOG}>В каталог</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
