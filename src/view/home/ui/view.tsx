import { Button } from 'shared/ui/button'
import { HomeBanner } from './banner'
import { HomeFeatures } from './features'
import { HeroSection } from './hero'
import { PopularItems } from './popular'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <PopularItems />
      <HomeBanner />
      <HomeFeatures />
      <div className="mx-auto max-w-10/12 px-6 py-12">
        <div
          className="rounded-2xl p-12 text-center text-white"
          style={{ backgroundColor: '#7a429d' }}
        >
          <h2 className="mb-4 text-4xl">Готовы начать покупки?</h2>
          <p className="mb-8 text-lg text-white/90">
            Откройте для себя тысячи товаров с доставкой по всему миру
          </p>
          <Button className="rounded-full bg-white px-8 py-6 text-gray-900 hover:bg-gray-100">
            Перейти в каталог
          </Button>
        </div>
      </div>
    </div>
  )
}

export { HomePage }
