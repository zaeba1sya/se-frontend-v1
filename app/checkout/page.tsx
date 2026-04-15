import type { Metadata } from 'next'

import { CheckoutView } from 'view/checkout'

export const metadata: Metadata = {
  title: 'Оформление заказа'
}

export default function CheckoutPage() {
  return <CheckoutView />
}
