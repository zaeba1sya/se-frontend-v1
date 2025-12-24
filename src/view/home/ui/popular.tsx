import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    name: 'Магнитные пускатели',
    image: './item1.jpeg'
  },
  {
    id: 2,
    name: 'Теплый пол',
    image: './item2.jpeg'
  },
  {
    id: 3,
    name: 'Кнопки управления',
    image: './item3.jpeg'
  },
  {
    id: 4,
    name: 'Электроконвекторы',
    image: './item4.jpeg'
  },
  {
    id: 5,
    name: 'Таймер времени',
    image: './item5.jpeg'
  },
  {
    id: 6,
    name: 'Сварочные аппараты',
    image: './item6.jpeg'
  },
  {
    id: 7,
    name: 'Ограничители мощности',
    image: './item7.png'
  },
  {
    id: 8,
    name: 'Смотреть все',
    image: ''
  }
]

function PopularItems() {
  return (
    <div className="mx-auto max-w-10/12 px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl text-gray-900">
          Популярные категории
        </h2>
        <Link
          href={'#'}
          className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
        >
          Все категории
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            {category.image ? (
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={category.image}
                  fill
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ) : (
              <div
                className="mb-4 flex aspect-square items-center justify-center rounded-xl"
                style={{ backgroundColor: '#7a429d' }}
              >
                <ArrowRight className="h-12 w-12 text-white" />
              </div>
            )}
            <h3 className="text-center text-gray-900">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export { PopularItems }
