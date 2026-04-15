'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

import { selectCartCount, useCartStore } from 'feature/cart'
import { ROUTES } from 'shared/lib/constants/routes'

export function CartButton() {
  const count = useCartStore(selectCartCount)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Link
      href={ROUTES.CART}
      className="group text-muted-foreground hover:text-foreground relative inline-flex size-9 items-center justify-center rounded-md transition-colors"
      aria-label={`Корзина${mounted && count > 0 ? `: ${count} товаров` : ''}`}
    >
      <ShoppingBag className="size-[18px]" />
      {mounted && count > 0 ? (
        <span className="bg-primary text-primary-foreground ring-background absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-semibold ring-2">
          {count > 99 ? '99+' : count}
        </span>
      ) : null}
    </Link>
  )
}
