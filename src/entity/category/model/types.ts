import type { LucideIcon } from 'lucide-react'

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  icon: LucideIcon
  productsCount: number
  featured?: boolean
}
