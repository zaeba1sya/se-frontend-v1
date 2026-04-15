import { ProductCard } from 'entity/product'
import { getDiscountedProducts } from 'shared/mocks'

export function Deals() {
  const discounted = getDiscountedProducts()

  if (discounted.length === 0) return null

  return (
    <section className="container-page py-12 md:py-16">
      <div className="mb-10">
        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
          Скидки
        </span>
        <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Специальные предложения
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {discounted.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
