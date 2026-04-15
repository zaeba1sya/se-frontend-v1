import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

import { AddToCartButton } from 'feature/cart'
import { FavoriteButton } from 'feature/favorites'
import { productRoute } from 'shared/lib/constants/routes'
import { cn } from 'shared/lib/utils'
import { Badge } from 'shared/ui'

import type { Product } from '../model/types'
import { PriceTag } from './price-tag'

interface Props {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: Props) {
  const href = productRoute(product.slug)

  return (
    <article
      className={cn(
        'group bg-card relative flex flex-col overflow-hidden rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-lg',
        className
      )}
    >
      <div className="bg-card-muted relative aspect-square overflow-hidden">
        <Link href={href} className="block size-full" tabIndex={-1}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew ? (
            <Badge
              variant="default"
              className="bg-primary text-primary-foreground"
            >
              NEW
            </Badge>
          ) : null}
          {product.isHit ? (
            <Badge
              variant="secondary"
              className="bg-warning text-warning-foreground"
            >
              ХИТ
            </Badge>
          ) : null}
          {product.discountPercent ? (
            <Badge
              variant="destructive"
              className="bg-destructive text-destructive-foreground"
            >
              −{product.discountPercent}%
            </Badge>
          ) : null}
        </div>

        <div className="absolute top-3 right-3">
          <FavoriteButton productId={product.id} />
        </div>

        {!product.inStock ? (
          <div className="bg-background/70 absolute inset-0 flex items-center justify-center backdrop-blur-sm">
            <span className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              Нет в наличии
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {product.brand}
          </span>
          <span className="text-muted-foreground inline-flex items-center gap-1">
            <Star
              className="fill-warning text-warning size-3"
              strokeWidth={0}
            />
            <span className="tabular-nums">
              {product.rating.toFixed(1)}
            </span>
            <span className="opacity-60">
              ({product.reviewsCount})
            </span>
          </span>
        </div>

        <Link
          href={href}
          className="hover:text-primary line-clamp-2 text-sm leading-snug font-medium transition-colors"
        >
          {product.name}
        </Link>

        <p className="text-muted-foreground line-clamp-1 text-xs">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex flex-col gap-2.5 pt-2">
          <PriceTag
            price={product.price}
            oldPrice={product.oldPrice}
            size="md"
          />
          <AddToCartButton
            product={product}
            fullWidth
            size="sm"
            label="В корзину"
          />
        </div>
      </div>
    </article>
  )
}
