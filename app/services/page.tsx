import type { Metadata } from 'next'

import { ServicesView } from 'view/info'

export const metadata: Metadata = {
  title: 'Услуги'
}

export default function ServicesPage() {
  return <ServicesView />
}
