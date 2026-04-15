'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { PackageSearch } from 'lucide-react'

import { ProductCard } from 'entity/product'
import { PRODUCTS } from 'shared/mocks'

import { applyFilters } from '../lib/filter'
import { CatalogFilters } from './catalog-filters'
import { CatalogToolbar } from './catalog-toolbar'

interface Props {
  initialCategoryId?: string
  title?: string
  subtitle?: string
}

export function CatalogView({
  initialCategoryId,
  title,
  subtitle
}: Props) {
  const params = useSearchParams()

  const categoryId =
    initialCategoryId ?? params.get('category') ?? undefined
  const brands = (params.get('brand') ?? '').split(',').filter(Boolean)
  const inStockOnly = params.get('stock') === '1'
  const query = params.get('q') ?? undefined
  const sort = params.get('sort') ?? undefined

  const filtered = useMemo(
    () =>
      applyFilters(PRODUCTS, {
        brands,
        category: categoryId,
        inStockOnly,
        query,
        sort
      }),
    [categoryId, brands, inStockOnly, query, sort]
  )

  const allBrands = useMemo(
    () =>
      [...new Set(PRODUCTS.map(p => p.brand))].sort((a, b) =>
        a.localeCompare(b, 'ru')
      ),
    []
  )

  const prices = PRODUCTS.map(p => p.price)
  const priceMin = Math.min(...prices)
  const priceMax = Math.max(...prices)

  return (
    <div className="container-page py-10">
      <div className="mb-8 flex flex-col gap-2">
        <span className="text-muted-foreground text-xs">
          {initialCategoryId ? 'Категория' : 'Каталог товаров'}
        </span>
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {title ?? 'Весь каталог'}
        </h1>
        {subtitle ? (
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <CatalogFilters
          brands={allBrands}
          priceMin={priceMin}
          priceMax={priceMax}
        />

        <div>
          <CatalogToolbar total={filtered.length} />
          {filtered.length === 0 ? (
            <div className="bg-card hairline flex flex-col items-center justify-center gap-3 rounded-2xl p-16 text-center">
              <PackageSearch className="text-muted-foreground size-10" />
              <h3 className="text-lg font-semibold">
                Ничего не найдено
              </h3>
              <p className="text-muted-foreground max-w-sm text-sm">
                Попробуйте изменить параметры фильтрации или
                сбросить все фильтры.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
