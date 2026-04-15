import type { Metadata } from 'next'

import { CartView } from 'view/cart'

export const metadata: Metadata = {
  title: 'Корзина'
}

export default function CartPage() {
  return <CartView />
}
