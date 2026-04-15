export type ProductId = string

export interface ProductSpec {
  key: string
  value: string
}

export interface Product {
  id: ProductId
  slug: string
  name: string
  brand: string
  categoryId: string
  price: number
  oldPrice?: number
  currency: 'RUB'
  rating: number
  reviewsCount: number
  inStock: boolean
  stockCount: number
  image: string
  gallery: string[]
  shortDescription: string
  description: string
  specs: ProductSpec[]
  tags: string[]
  isNew?: boolean
  isHit?: boolean
  discountPercent?: number
}
