'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from 'entity/user'
import { MOCK_USER } from 'shared/mocks'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string) => void
  logout: () => void
  updateProfile: (patch: Partial<User>) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      login: email => {
        set({
          isAuthenticated: true,
          user: { ...MOCK_USER, email }
        })
      },
      logout: () => {
        set({ isAuthenticated: false, user: null })
      },
      updateProfile: patch => {
        const current = get().user
        if (!current) return
        set({ user: { ...current, ...patch } })
      },
      user: null
    }),
    { name: 'sakhelectro-auth' }
  )
)
