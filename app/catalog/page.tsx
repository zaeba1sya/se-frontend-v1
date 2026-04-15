import type { Metadata } from 'next'
import { Suspense } from 'react'

import { CatalogView } from 'view/catalog'

export const metadata: Metadata = {
  title: 'Каталог товаров',
  description:
    'Весь ассортимент электромаркета Сахэлектрик — более 450 товаров.'
}

export default function CatalogPage() {
  return (
    <Suspense fallback={null}>
      <CatalogView />
    </Suspense>
  )
}
