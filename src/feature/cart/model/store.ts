'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product, ProductId } from 'entity/product'

export interface CartItem {
  productId: ProductId
  name: string
  slug: string
  image: string
  price: number
  oldPrice?: number
  quantity: number
  brand: string
}

interface CartState {
  items: CartItem[]
  add: (product: Product, quantity?: number) => void
  remove: (productId: ProductId) => void
  setQuantity: (productId: ProductId, quantity: number) => void
  increment: (productId: ProductId) => void
  decrement: (productId: ProductId) => void
  clear: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      add: (product, quantity = 1) => {
        const existing = get().items.find(
          i => i.productId === product.id
        )
        if (existing) {
          set({
            items: get().items.map(i =>
              i.productId === product.id
                ? { ...i, quantity: i.quantity + quantity }
                : i
            )
          })
          return
        }
        set({
          items: [
            ...get().items,
            {
              brand: product.brand,
              image: product.image,
              name: product.name,
              oldPrice: product.oldPrice,
              price: product.price,
              productId: product.id,
              quantity,
              slug: product.slug
            }
          ]
        })
      },
      clear: () => {
        set({ items: [] })
      },
      decrement: productId => {
        const item = get().items.find(i => i.productId === productId)
        if (!item) return
        if (item.quantity <= 1) {
          get().remove(productId)
          return
        }
        set({
          items: get().items.map(i =>
            i.productId === productId
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
        })
      },
      increment: productId => {
        set({
          items: get().items.map(i =>
            i.productId === productId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        })
      },
      items: [],
      remove: productId => {
        set({
          items: get().items.filter(i => i.productId !== productId)
        })
      },
      setQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().remove(productId)
          return
        }
        set({
          items: get().items.map(i =>
            i.productId === productId ? { ...i, quantity } : i
          )
        })
      }
    }),
    { name: 'sakhelectro-cart' }
  )
)

export function selectCartCount(state: CartState): number {
  return state.items.reduce((sum, i) => sum + i.quantity, 0)
}

export function selectCartSubtotal(state: CartState): number {
  return state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  )
}

export function selectCartSavings(state: CartState): number {
  return state.items.reduce((sum, i) => {
    if (!i.oldPrice) return sum
    return sum + (i.oldPrice - i.price) * i.quantity
  }, 0)
}
