'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Package } from 'lucide-react'

import type { OrderStatus } from 'entity/user'
import { productRoute } from 'shared/lib/constants/routes'
import { formatDateTime, formatPrice } from 'shared/lib/format'
import { MOCK_ORDERS } from 'shared/mocks'
import { cn } from 'shared/lib/utils'

const STATUS_CONFIG: Record<
  OrderStatus,
  { label: string; tone: string }
> = {
  cancelled: {
    label: 'Отменён',
    tone: 'bg-destructive/10 text-destructive'
  },
  delivered: {
    label: 'Доставлен',
    tone: 'bg-success/15 text-success'
  },
  pending: {
    label: 'Ожидает оплаты',
    tone: 'bg-warning/15 text-warning'
  },
  processing: {
    label: 'В обработке',
    tone: 'bg-chart-4/15 text-chart-4'
  },
  shipped: {
    label: 'В доставке',
    tone: 'bg-primary/10 text-primary'
  }
}

export function OrdersView() {
  if (MOCK_ORDERS.length === 0) {
    return (
      <div className="bg-card hairline flex flex-col items-center gap-3 rounded-2xl p-12 text-center">
        <Package className="text-muted-foreground size-10" />
        <h2 className="text-lg font-semibold">У вас ещё нет заказов</h2>
        <p className="text-muted-foreground text-sm">
          Когда вы оформите первый заказ, он появится здесь.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-display text-2xl font-semibold tracking-tight">
        История заказов
      </h1>

      {MOCK_ORDERS.map(order => {
        const status = STATUS_CONFIG[order.status]
        return (
          <article
            key={order.id}
            className="bg-card hairline flex flex-col gap-5 rounded-2xl p-5"
          >
            <header className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-foreground text-sm font-semibold">
                    Заказ {order.number}
                  </span>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
                      status.tone
                    )}
                  >
                    {status.label}
                  </span>
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  {formatDateTime(order.createdAt)} ·{' '}
                  {order.paymentMethod}
                </p>
              </div>
              <div className="text-right">
                <span className="text-foreground text-lg font-semibold tabular-nums">
                  {formatPrice(order.total)}
                </span>
                <p className="text-muted-foreground text-xs">
                  {order.items.length} товар
                  {order.items.length > 1 ? 'а' : ''}
                </p>
              </div>
            </header>

            <div className="border-border border-t pt-4">
              <div className="flex flex-wrap gap-3">
                {order.items.map(item => (
                  <Link
                    key={item.productId}
                    href={productRoute(item.productId)}
                    className="group flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <div className="bg-card-muted hairline relative size-14 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="60px"
                        className="object-contain p-1.5"
                      />
                    </div>
                    <div className="text-xs">
                      <div className="text-foreground group-hover:text-primary line-clamp-2 max-w-[200px] font-medium transition-colors">
                        {item.name}
                      </div>
                      <div className="text-muted-foreground mt-0.5">
                        {item.quantity} × {formatPrice(item.price)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-muted-foreground flex items-start gap-2 text-xs">
              <span className="font-medium text-foreground">
                Адрес:
              </span>
              <span>{order.deliveryAddress}</span>
            </div>
          </article>
        )
      })}
    </div>
  )
}
