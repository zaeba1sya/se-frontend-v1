import { CategoriesGrid } from './categories-grid'
import { Cta } from './cta'
import { Deals } from './deals'
import { FeaturedProducts } from './featured-products'
import { Hero } from './hero'
import { ServicesStrip } from './services-strip'

export function HomeView() {
  return (
    <>
      <Hero />
      <CategoriesGrid />
      <FeaturedProducts />
      <ServicesStrip />
      <Deals />
      <Cta />
    </>
  )
}
