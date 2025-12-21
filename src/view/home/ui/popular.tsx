import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    name: 'Магнитные пускатели',
    image:
      'https://sakhelectric.ru/upload/iblock/4b7/t7jw59g2cqyqccu2pgpeot2nfcmpwa41.jpeg'
  },
  {
    id: 2,
    name: 'Теплый пол',
    image:
      'https://sakhelectric.ru/upload/iblock/f58/6hqlaix5klod92lm2ud0tij7mps82utn.jpeg'
  },
  {
    id: 3,
    name: 'Кнопки управления',
    image:
      'https://sakhelectric.ru/upload/iblock/0de/e9omyomrakwgcrrqm16i0s3taj91iswe.jpeg'
  },
  {
    id: 4,
    name: 'Электроконвекторы',
    image:
      'https://sakhelectric.ru/upload/iblock/d98/e5dshcfby163yzhweoqgs7loxnmrf168.jpeg'
  },
  {
    id: 5,
    name: 'Таймер времени',
    image:
      'https://sakhelectric.ru/upload/iblock/ecf/qjaeksyq47afcab1lo1qvnrf301bl0tu.jpeg'
  },
  {
    id: 6,
    name: 'Сварочные аппараты',
    image:
      'https://sakhelectric.ru/upload/iblock/976/ya2e5znknl8dkfo014ew9a4fg9u0rr3h.jpeg'
  },
  {
    id: 7,
    name: 'Ограничители мощности',
    image:
      'https://sakhelectric.ru/upload/iblock/07b/xcs07jwaa4bx2pk988psrzzb9677ad4w.png'
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
