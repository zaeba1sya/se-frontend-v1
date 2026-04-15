'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ProductId } from 'entity/product'

interface FavoritesState {
  ids: ProductId[]
  toggle: (id: ProductId) => void
  has: (id: ProductId) => boolean
  clear: () => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      clear: () => {
        set({ ids: [] })
      },
      has: id => get().ids.includes(id),
      ids: [],
      toggle: id => {
        const exists = get().ids.includes(id)
        set({
          ids: exists
            ? get().ids.filter(x => x !== id)
            : [...get().ids, id]
        })
      }
    }),
    { name: 'sakhelectro-favorites' }
  )
)
