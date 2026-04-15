import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ProductView } from 'view/product'
import { findProductBySlug, PRODUCTS } from 'shared/mocks'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { slug } = await params
  const product = findProductBySlug(slug)
  if (!product) return { title: 'Товар не найден' }
  return {
    title: product.name,
    description: product.shortDescription
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = findProductBySlug(slug)
  if (!product) notFound()
  return <ProductView product={product} />
}
