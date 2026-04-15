'use client'

import { Check, ShieldCheck, Truck } from 'lucide-react'

import type { Product } from 'entity/product'
import { PriceTag } from 'entity/product'
import { CartControl } from 'feature/cart'
import { FavoriteButton } from 'feature/favorites'

interface Props {
  product: Product
}

export function PurchasePanel({ product }: Props) {
  return (
    <div className="bg-card hairline flex flex-col gap-6 rounded-2xl p-5 md:p-6 lg:sticky lg:top-[180px]">
      <PriceTag
        price={product.price}
        oldPrice={product.oldPrice}
        size="xl"
      />

      <div className="flex items-center gap-2 text-sm">
        {product.inStock ? (
          <>
            <span className="bg-success size-2 rounded-full" />
            <span className="text-success font-medium">
              В наличии
            </span>
            <span className="text-muted-foreground">
              — {product.stockCount} шт
            </span>
          </>
        ) : (
          <>
            <span className="bg-destructive size-2 rounded-full" />
            <span className="text-destructive font-medium">
              Нет в наличии
            </span>
          </>
        )}
      </div>

      <div className="flex items-stretch gap-2">
        <div className="min-w-0 flex-1">
          <CartControl product={product} fullWidth />
        </div>
        <FavoriteButton
          productId={product.id}
          className="bg-card-muted h-12 w-12 shrink-0 backdrop-blur-0"
        />
      </div>

      <div className="border-border flex flex-col gap-3 border-t pt-6 text-sm">
        <div className="flex items-start gap-3">
          <Truck className="text-primary mt-0.5 size-4 shrink-0" />
          <div>
            <div className="text-foreground font-medium">
              Доставка по Южно-Сахалинску
            </div>
            <div className="text-muted-foreground text-xs">
              Бесплатно от 5 000 ₽, обычно 1–2 дня
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ShieldCheck className="text-primary mt-0.5 size-4 shrink-0" />
          <div>
            <div className="text-foreground font-medium">
              Официальная гарантия
            </div>
            <div className="text-muted-foreground text-xs">
              24 месяца, возврат и обмен 14 дней
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Check className="text-primary mt-0.5 size-4 shrink-0" />
          <div>
            <div className="text-foreground font-medium">
              Все документы
            </div>
            <div className="text-muted-foreground text-xs">
              Чек, счёт, накладная для юрлиц
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
