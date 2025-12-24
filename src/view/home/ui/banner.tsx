import Image from 'next/image'
import { Button } from 'shared/ui/button'

function HomeBanner() {
  return (
    <div className="mx-auto max-w-10/12 px-6 py-12">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl">
          <Image
            src="/banner1.jpg"
            alt="Laptop promo"
            fill
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center bg-linear-to-r from-black/60 to-transparent p-8">
            <div>
              <h3 className="mb-2 text-2xl text-white">
                Услуги аккредитованной выездной электролаборатории
              </h3>
              <p className="mb-4 text-white/90">
                Lorem ipsum dolor sit amet.
              </p>
              <Button
                className="rounded-full px-6 text-white hover:opacity-90"
                style={{ backgroundColor: '#7a429d' }}
              >
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>

        <div className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl">
          <Image
            src="/banner2.jpg"
            alt="Fashion promo"
            fill
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center bg-linear-to-r from-black/60 to-transparent p-8">
            <div>
              <h3 className="mb-2 text-2xl text-white">
                Сборка Электрощитов
              </h3>
              <p className="mb-4 text-white/90">
                Lorem ipsum dolor sit amet.
              </p>
              <Button
                className="rounded-full px-6 text-white hover:opacity-90"
                style={{ backgroundColor: '#7a429d' }}
              >
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HomeBanner }
