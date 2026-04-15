'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import {
  selectCartSavings,
  selectCartSubtotal,
  useCartStore
} from 'feature/cart'
import { formatPrice } from 'shared/lib/format'
import { ROUTES } from 'shared/lib/constants/routes'
import { Button, Input } from 'shared/ui'

interface Props {
  cta?: 'checkout' | 'pay'
}

export function OrderSummary({ cta = 'checkout' }: Props) {
  const subtotal = useCartStore(selectCartSubtotal)
  const savings = useCartStore(selectCartSavings)
  const itemsCount = useCartStore(s =>
    s.items.reduce((sum, i) => sum + i.quantity, 0)
  )

  const delivery = subtotal >= 5000 ? 0 : subtotal > 0 ? 490 : 0
  const total = subtotal + delivery

  return (
    <div className="bg-card hairline flex flex-col gap-5 rounded-2xl p-5 md:p-6 lg:sticky lg:top-[180px]">
      <h2 className="text-lg font-semibold">Ваш заказ</h2>

      <dl className="text-muted-foreground flex flex-col gap-2.5 text-sm">
        <div className="flex justify-between">
          <dt>Товары ({itemsCount} шт)</dt>
          <dd className="text-foreground tabular-nums">
            {formatPrice(subtotal)}
          </dd>
        </div>
        {savings > 0 ? (
          <div className="flex justify-between">
            <dt>Скидка</dt>
            <dd className="text-success tabular-nums">
              −{formatPrice(savings)}
            </dd>
          </div>
        ) : null}
        <div className="flex justify-between">
          <dt>Доставка</dt>
          <dd className="text-foreground tabular-nums">
            {delivery === 0 ? 'Бесплатно' : formatPrice(delivery)}
          </dd>
        </div>
      </dl>

      <div className="hairline flex h-11 items-center rounded-full bg-card-muted pl-4 pr-1.5">
        <Input
          type="text"
          placeholder="Промокод"
          className="h-full flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent"
        />
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground h-8 px-3 text-xs font-semibold transition-colors"
        >
          Применить
        </button>
      </div>

      <div className="border-border flex items-baseline justify-between border-t pt-5">
        <span className="text-foreground text-sm font-medium">
          Итого
        </span>
        <span className="text-foreground text-2xl font-semibold tracking-tight tabular-nums">
          {formatPrice(total)}
        </span>
      </div>

      <Button
        asChild
        size="lg"
        className="h-12 rounded-full text-sm"
        disabled={itemsCount === 0}
      >
        <Link
          href={cta === 'checkout' ? ROUTES.CHECKOUT : ROUTES.HOME}
        >
          {cta === 'checkout' ? 'Оформить заказ' : 'Оплатить'}
          <ArrowRight className="size-4" />
        </Link>
      </Button>

      <p className="text-muted-foreground text-center text-xs">
        Бесплатная доставка от {formatPrice(5000)}
      </p>
    </div>
  )
}
