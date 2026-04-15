import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import {
  categoryRoute,
  ROUTES
} from 'shared/lib/constants/routes'
import { CATEGORIES } from 'shared/mocks'
import { formatNumber } from 'shared/lib/format'

export function CategoriesGrid() {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <span className="text-primary text-xs font-semibold uppercase tracking-wider">
            Каталог
          </span>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Категории товаров
          </h2>
        </div>
        <Link
          href={ROUTES.CATALOG}
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
        >
          Смотреть все
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {CATEGORIES.map(cat => {
          const Icon = cat.icon
          return (
            <Link
              key={cat.id}
              href={categoryRoute(cat.slug)}
              className="group bg-card hover:border-primary/40 relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-xl transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-foreground text-sm font-semibold leading-tight">
                  {cat.name}
                </span>
                <span className="text-muted-foreground text-xs">
                  {formatNumber(cat.productsCount)} товаров
                </span>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-primary absolute top-4 right-4 size-4 opacity-0 transition-all group-hover:opacity-100" />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
