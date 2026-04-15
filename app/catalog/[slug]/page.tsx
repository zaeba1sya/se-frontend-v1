import type { Metadata } from 'next'
import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { CatalogView } from 'view/catalog'
import { CATEGORIES, findCategory } from 'shared/mocks'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return CATEGORIES.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { slug } = await params
  const category = findCategory(slug)
  if (!category) return { title: 'Категория не найдена' }
  return {
    title: category.name,
    description: category.description
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = findCategory(slug)
  if (!category) notFound()

  return (
    <Suspense fallback={null}>
      <CatalogView
        initialCategoryId={category.id}
        title={category.name}
        subtitle={category.description}
      />
    </Suspense>
  )
}
