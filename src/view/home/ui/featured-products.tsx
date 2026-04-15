import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { ProductCard } from 'entity/product'
import { ROUTES } from 'shared/lib/constants/routes'
import { PRODUCTS } from 'shared/mocks'

export function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 8)

  return (
    <section className="container-page py-12 md:py-16">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <span className="text-primary text-xs font-semibold uppercase tracking-wider">
            Популярное
          </span>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Топ продаж
          </h2>
        </div>
        <Link
          href={ROUTES.CATALOG}
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
        >
          Весь каталог
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {featured.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
