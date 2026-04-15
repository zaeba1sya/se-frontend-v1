import type { Product } from 'entity/product'

export interface CatalogFilters {
  category?: string
  brands?: string[]
  inStockOnly?: boolean
  query?: string
  sort?: string
}

export function applyFilters(
  products: Product[],
  filters: CatalogFilters
): Product[] {
  let result = [...products]

  if (filters.category) {
    result = result.filter(p => p.categoryId === filters.category)
  }

  if (filters.brands && filters.brands.length > 0) {
    const set = new Set(filters.brands)
    result = result.filter(p => set.has(p.brand))
  }

  if (filters.inStockOnly) {
    result = result.filter(p => p.inStock)
  }

  if (filters.query) {
    const q = filters.query.toLowerCase()
    result = result.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
    )
  }

  switch (filters.sort) {
    case 'price-asc': {
      result.sort((a, b) => a.price - b.price)
      break
    }
    case 'price-desc': {
      result.sort((a, b) => b.price - a.price)
      break
    }
    case 'rating': {
      result.sort((a, b) => b.rating - a.rating)
      break
    }
    case 'new': {
      result.sort(
        (a, b) => Number(b.isNew ?? 0) - Number(a.isNew ?? 0)
      )
      break
    }
    default: {
      result.sort(
        (a, b) =>
          Number(b.isHit ?? 0) * 2 +
          b.reviewsCount / 100 -
          (Number(a.isHit ?? 0) * 2 + a.reviewsCount / 100)
      )
    }
  }

  return result
}
