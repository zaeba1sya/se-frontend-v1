import Link from 'next/link'
import { ChevronRight, Star } from 'lucide-react'

import type { Product } from 'entity/product'
import { ProductCard } from 'entity/product'
import {
  categoryRoute,
  ROUTES
} from 'shared/lib/constants/routes'
import { findCategoryById, PRODUCTS } from 'shared/mocks'
import { Badge } from 'shared/ui'

import { Gallery } from './gallery'
import { PurchasePanel } from './purchase-panel'
import { Reviews } from './reviews'

interface Props {
  product: Product
}

export function ProductView({ product }: Props) {
  const cat = findCategoryById(product.categoryId)

  const related = PRODUCTS.filter(
    p => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 4)

  return (
    <div className="container-page py-8">
      <nav
        aria-label="Хлебные крошки"
        className="text-muted-foreground mb-6 flex flex-wrap items-center gap-1.5 text-xs"
      >
        <Link
          href={ROUTES.HOME}
          className="hover:text-foreground transition-colors"
        >
          Главная
        </Link>
        <ChevronRight className="size-3" />
        <Link
          href={ROUTES.CATALOG}
          className="hover:text-foreground transition-colors"
        >
          Каталог
        </Link>
        {cat ? (
          <>
            <ChevronRight className="size-3" />
            <Link
              href={categoryRoute(cat.slug)}
              className="hover:text-foreground transition-colors"
            >
              {cat.name}
            </Link>
          </>
        ) : null}
        <ChevronRight className="size-3" />
        <span className="text-foreground line-clamp-1">
          {product.name}
        </span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_360px]">
        <div>
          <Gallery
            name={product.name}
            images={
              product.gallery.length > 0
                ? product.gallery
                : [product.image]
            }
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{product.brand}</Badge>
            {product.isNew ? (
              <Badge className="bg-primary text-primary-foreground">
                NEW
              </Badge>
            ) : null}
            {product.isHit ? (
              <Badge className="bg-warning text-warning-foreground">
                ХИТ
              </Badge>
            ) : null}
          </div>

          <h1 className="font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            {product.name}
          </h1>

          <div className="text-muted-foreground flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1">
              <Star
                className="fill-warning text-warning size-4"
                strokeWidth={0}
              />
              <span className="text-foreground font-semibold tabular-nums">
                {product.rating.toFixed(1)}
              </span>
            </span>
            <span>·</span>
            <span>{product.reviewsCount} отзывов</span>
            <span>·</span>
            <span className="text-xs">Арт. {product.id.toUpperCase()}</span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            {product.description}
          </p>

          <div className="bg-card-muted hairline mt-2 rounded-xl p-5">
            <h3 className="text-foreground mb-3 text-sm font-semibold">
              Характеристики
            </h3>
            <dl className="grid gap-2 text-sm">
              {product.specs.map(spec => (
                <div
                  key={spec.key}
                  className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2 last:border-0 last:pb-0"
                >
                  <dt className="text-muted-foreground">
                    {spec.key}
                  </dt>
                  <dd className="text-foreground font-medium text-right">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <PurchasePanel product={product} />
      </div>

      <Reviews productId={product.id} />

      {related.length > 0 ? (
        <section className="mt-20">
          <h2 className="font-display mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
            Похожие товары
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
