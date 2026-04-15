'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

import { useCartStore } from 'feature/cart'
import { ROUTES } from 'shared/lib/constants/routes'
import { Button } from 'shared/ui'
import { OrderSummary } from 'widget/order-summary'

import { CartLine } from './cart-line'

export function CartView() {
  const items = useCartStore(s => s.items)
  const clear = useCartStore(s => s.clear)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="container-page py-20" />
  }

  return (
    <div className="container-page py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Корзина
        </h1>
        {items.length > 0 ? (
          <button
            type="button"
            onClick={clear}
            className="text-muted-foreground hover:text-destructive text-sm transition-colors"
          >
            Очистить корзину
          </button>
        ) : null}
      </div>

      {items.length === 0 ? (
        <div className="bg-card hairline flex flex-col items-center gap-4 rounded-2xl p-16 text-center">
          <div className="bg-primary/10 text-primary flex size-16 items-center justify-center rounded-full">
            <ShoppingBag className="size-7" />
          </div>
          <h2 className="text-xl font-semibold">Корзина пуста</h2>
          <p className="text-muted-foreground max-w-md text-sm">
            Добавьте товары из каталога — мы соберём заказ и доставим
            в удобное время.
          </p>
          <Button asChild size="lg" className="mt-2 h-11 rounded-full px-6">
            <Link href={ROUTES.CATALOG}>Перейти в каталог</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
          <div className="flex flex-col gap-3">
            {items.map(item => (
              <CartLine key={item.productId} item={item} />
            ))}
          </div>
          <OrderSummary cta="checkout" />
        </div>
      )}
    </div>
  )
}
