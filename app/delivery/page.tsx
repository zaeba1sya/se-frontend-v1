import type { Metadata } from 'next'

import { DeliveryView } from 'view/info'

export const metadata: Metadata = {
  title: 'Доставка и оплата'
}

export default function DeliveryPage() {
  return <DeliveryView />
}
