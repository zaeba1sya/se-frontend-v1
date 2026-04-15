'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Trash2 } from 'lucide-react'

import type { CartItem } from 'feature/cart'
import { useCartStore } from 'feature/cart'
import { formatPrice } from 'shared/lib/format'
import { productRoute } from 'shared/lib/constants/routes'

interface Props {
  item: CartItem
}

export function CartLine({ item }: Props) {
  const increment = useCartStore(s => s.increment)
  const decrement = useCartStore(s => s.decrement)
  const remove = useCartStore(s => s.remove)

  return (
    <div className="bg-card hairline flex gap-4 rounded-2xl p-4 sm:p-5">
      <Link
        href={productRoute(item.slug)}
        className="bg-card-muted relative size-24 shrink-0 overflow-hidden rounded-xl sm:size-28"
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="120px"
          className="object-contain p-3"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-muted-foreground text-xs">
              {item.brand}
            </span>
            <Link
              href={productRoute(item.slug)}
              className="hover:text-primary line-clamp-2 block text-sm font-medium transition-colors sm:text-base"
            >
              {item.name}
            </Link>
          </div>
          <button
            type="button"
            onClick={() => remove(item.productId)}
            className="text-muted-foreground hover:text-destructive flex size-8 shrink-0 items-center justify-center rounded-full transition-colors"
            aria-label="Удалить из корзины"
          >
            <Trash2 className="size-4" />
          </button>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="hairline inline-flex h-9 items-center gap-1 rounded-full bg-card-muted px-1">
            <button
              type="button"
              onClick={() => decrement(item.productId)}
              className="text-muted-foreground hover:text-foreground flex size-7 items-center justify-center rounded-full transition-colors"
              aria-label="Уменьшить"
            >
              −
            </button>
            <span className="min-w-[24px] text-center text-sm font-semibold tabular-nums">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => increment(item.productId)}
              className="text-muted-foreground hover:text-foreground flex size-7 items-center justify-center rounded-full transition-colors"
              aria-label="Увеличить"
            >
              +
            </button>
          </div>

          <div className="flex items-baseline gap-2">
            {item.oldPrice && item.oldPrice > item.price ? (
              <span className="text-muted-foreground text-xs line-through">
                {formatPrice(item.oldPrice * item.quantity)}
              </span>
            ) : null}
            <span className="text-foreground text-base font-semibold tabular-nums sm:text-lg">
              {formatPrice(item.price * item.quantity)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
