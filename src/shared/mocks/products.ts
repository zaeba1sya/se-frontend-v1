import type { Product } from 'entity/product'

const IMG = {
  item1: '/item1.jpeg',
  item2: '/item2.jpeg',
  item3: '/item3.jpeg',
  item4: '/item4.jpeg',
  item5: '/item5.jpeg',
  item6: '/item6.jpeg',
  item7: '/item7.png'
} as const

export const PRODUCTS: Product[] = [
  {
    brand: 'IEK',
    categoryId: 'starters',
    currency: 'RUB',
    description:
      'Пускатель электромагнитный ПМ12 предназначен для дистанционного пуска и остановки трёхфазных асинхронных электродвигателей. Корпус из негорючего пластика, контакты из серебросодержащего сплава обеспечивают долговечность и стабильную работу под нагрузкой.',
    discountPercent: 18,
    gallery: [IMG.item1, IMG.item2, IMG.item3],
    id: 'p1',
    image: IMG.item1,
    inStock: true,
    isHit: true,
    name: 'Пускатель магнитный ПМ12-025',
    oldPrice: 3490,
    price: 2860,
    rating: 4.8,
    reviewsCount: 124,
    shortDescription: 'Ток 25А, катушка 220В, IP54',
    slug: 'puskatel-pm12-025',
    specs: [
      { key: 'Номинальный ток', value: '25 А' },
      { key: 'Напряжение катушки', value: '220 В' },
      { key: 'Степень защиты', value: 'IP54' },
      { key: 'Количество полюсов', value: '3' },
      { key: 'Гарантия', value: '24 месяца' }
    ],
    stockCount: 42,
    tags: ['пускатель', 'контактор', 'IEK']
  },
  {
    brand: 'Теплолюкс',
    categoryId: 'heating',
    currency: 'RUB',
    description:
      'Нагревательный мат Теплолюкс Tropix — идеальное решение для подогрева пола в ванной, кухне и прихожей. Укладывается под плитку в слой плиточного клея без стяжки. Равномерный нагрев, быстрый прогрев, надёжная изоляция.',
    gallery: [IMG.item2, IMG.item1, IMG.item4],
    id: 'p2',
    image: IMG.item2,
    inStock: true,
    isNew: true,
    name: 'Нагревательный мат Tropix 4 м²',
    price: 7990,
    rating: 4.9,
    reviewsCount: 87,
    shortDescription: 'Площадь 4 м², 640 Вт',
    slug: 'mat-tropix-4',
    specs: [
      { key: 'Площадь обогрева', value: '4 м²' },
      { key: 'Мощность', value: '640 Вт' },
      { key: 'Напряжение', value: '220 В' },
      { key: 'Толщина', value: '3 мм' },
      { key: 'Гарантия', value: '20 лет' }
    ],
    stockCount: 18,
    tags: ['тёплый пол', 'нагревательный мат']
  },
  {
    brand: 'Ballu',
    categoryId: 'convectors',
    currency: 'RUB',
    description:
      'Электрический конвектор Ballu Camino Eco обеспечивает быстрый и равномерный нагрев помещения. Монолитный нагревательный элемент, механический термостат, влагозащитное исполнение. Подходит для постоянного и эпизодического обогрева.',
    discountPercent: 12,
    gallery: [IMG.item3, IMG.item5, IMG.item6],
    id: 'p3',
    image: IMG.item3,
    inStock: true,
    name: 'Конвектор Ballu Camino Eco 1500',
    oldPrice: 5690,
    price: 5010,
    rating: 4.6,
    reviewsCount: 203,
    shortDescription: 'Мощность 1500 Вт, до 20 м²',
    slug: 'ballu-camino-eco-1500',
    specs: [
      { key: 'Мощность', value: '1500 Вт' },
      { key: 'Площадь', value: 'до 20 м²' },
      { key: 'Термостат', value: 'Механический' },
      { key: 'Защита', value: 'IP24' },
      { key: 'Гарантия', value: '3 года' }
    ],
    stockCount: 24,
    tags: ['конвектор', 'обогреватель']
  },
  {
    brand: 'Ресанта',
    categoryId: 'welding',
    currency: 'RUB',
    description:
      'Инверторный сварочный аппарат Ресанта САИ-220 обеспечивает стабильную дугу и качественный шов. Функции Hot Start, Anti-Stick и Arc Force делают сварку комфортной даже для начинающих. Работает от 140В.',
    gallery: [IMG.item4, IMG.item7, IMG.item2],
    id: 'p4',
    image: IMG.item4,
    inStock: true,
    isHit: true,
    name: 'Сварочный инвертор САИ-220',
    price: 11490,
    rating: 4.7,
    reviewsCount: 356,
    shortDescription: 'Ток 220А, ПВ 70%',
    slug: 'resanta-sai-220',
    specs: [
      { key: 'Макс. ток сварки', value: '220 А' },
      { key: 'Диаметр электрода', value: '1.6 – 5 мм' },
      { key: 'ПВ при макс. токе', value: '70 %' },
      { key: 'Напряжение сети', value: '140 – 260 В' },
      { key: 'Вес', value: '4.8 кг' }
    ],
    stockCount: 11,
    tags: ['сварка', 'инвертор', 'Ресанта']
  },
  {
    brand: 'ABB',
    categoryId: 'protection',
    currency: 'RUB',
    description:
      'Автоматический выключатель ABB S203 трёхполюсный, номинальный ток 16А, характеристика C. Надёжная защита цепи от перегрузок и короткого замыкания.',
    gallery: [IMG.item5, IMG.item1, IMG.item6],
    id: 'p5',
    image: IMG.item5,
    inStock: true,
    name: 'Автомат ABB S203 C16',
    price: 1890,
    rating: 4.9,
    reviewsCount: 421,
    shortDescription: '3P, 16A, характеристика C',
    slug: 'abb-s203-c16',
    specs: [
      { key: 'Полюсов', value: '3' },
      { key: 'Ток', value: '16 А' },
      { key: 'Характеристика', value: 'C' },
      { key: 'Отключающая способность', value: '6 кА' }
    ],
    stockCount: 96,
    tags: ['автомат', 'ABB', 'защита']
  },
  {
    brand: 'ТДМ',
    categoryId: 'cables',
    currency: 'RUB',
    description:
      'Кабель ВВГнг(А)-LS 3×2.5 предназначен для стационарной прокладки в жилых и общественных зданиях. Не распространяет горение, низкое дымовыделение.',
    gallery: [IMG.item6, IMG.item3, IMG.item2],
    id: 'p6',
    image: IMG.item6,
    inStock: true,
    name: 'Кабель ВВГнг(А)-LS 3×2.5',
    price: 145,
    rating: 4.8,
    reviewsCount: 612,
    shortDescription: 'Цена за 1 м, ГОСТ',
    slug: 'vvgng-3x2-5',
    specs: [
      { key: 'Сечение', value: '3×2.5 мм²' },
      { key: 'Исполнение', value: 'ВВГнг(А)-LS' },
      { key: 'ГОСТ', value: '31996-2012' },
      { key: 'Класс гибкости', value: '1' }
    ],
    stockCount: 2450,
    tags: ['кабель', 'ВВГнг']
  },
  {
    brand: 'Schneider Electric',
    categoryId: 'sockets',
    currency: 'RUB',
    description:
      'Розетка Schneider Electric Glossa двойная с заземлением. Скрытая установка, защитные шторки, современный дизайн.',
    gallery: [IMG.item7, IMG.item4, IMG.item5],
    id: 'p7',
    image: IMG.item7,
    inStock: true,
    isNew: true,
    name: 'Розетка Schneider Glossa 2П+З',
    price: 540,
    rating: 4.7,
    reviewsCount: 189,
    shortDescription: 'Двойная с заземлением, белая',
    slug: 'schneider-glossa-2',
    specs: [
      { key: 'Тип', value: '2П+З' },
      { key: 'Ток', value: '16 А' },
      { key: 'Монтаж', value: 'Скрытый' },
      { key: 'Защитные шторки', value: 'Да' }
    ],
    stockCount: 140,
    tags: ['розетка', 'Schneider']
  },
  {
    brand: 'Gauss',
    categoryId: 'lighting',
    currency: 'RUB',
    description:
      'Светодиодный светильник Gauss 36Вт 4000K — современное решение для офисов, магазинов и жилых помещений. Равномерное освещение без мерцания.',
    discountPercent: 22,
    gallery: [IMG.item1, IMG.item6, IMG.item7],
    id: 'p8',
    image: IMG.item1,
    inStock: true,
    name: 'Светильник Gauss LED 36W 595×595',
    oldPrice: 2490,
    price: 1940,
    rating: 4.6,
    reviewsCount: 95,
    shortDescription: '36 Вт, 4000K, 3600 лм',
    slug: 'gauss-led-36',
    specs: [
      { key: 'Мощность', value: '36 Вт' },
      { key: 'Цветовая температура', value: '4000 K' },
      { key: 'Световой поток', value: '3600 лм' },
      { key: 'Размер', value: '595×595 мм' }
    ],
    stockCount: 35,
    tags: ['светильник', 'LED', 'Gauss']
  },
  {
    brand: 'EKF',
    categoryId: 'boards',
    currency: 'RUB',
    description:
      'Щит распределительный EKF PROxima на 24 модуля для встраиваемого монтажа. Металлический корпус, прозрачная дверца, стальная DIN-рейка.',
    gallery: [IMG.item2, IMG.item5, IMG.item3],
    id: 'p9',
    image: IMG.item2,
    inStock: true,
    name: 'Щит EKF PROxima 24 модуля',
    price: 3250,
    rating: 4.8,
    reviewsCount: 64,
    shortDescription: 'Встраиваемый, IP31',
    slug: 'ekf-proxima-24',
    specs: [
      { key: 'Модулей', value: '24' },
      { key: 'Монтаж', value: 'Встраиваемый' },
      { key: 'Защита', value: 'IP31' },
      { key: 'Материал', value: 'Сталь' }
    ],
    stockCount: 22,
    tags: ['щит', 'EKF']
  },
  {
    brand: 'Knipex',
    categoryId: 'tools',
    currency: 'RUB',
    description:
      'Профессиональные электромонтажные клещи Knipex 13 96 200 позволяют зачищать, обрезать и обжимать провода одним инструментом. Немецкое качество, эргономичные рукоятки.',
    gallery: [IMG.item3, IMG.item4, IMG.item1],
    id: 'p10',
    image: IMG.item3,
    inStock: true,
    isHit: true,
    name: 'Клещи Knipex 13 96 200',
    price: 8990,
    rating: 4.9,
    reviewsCount: 141,
    shortDescription: 'Электромонтажные, 200 мм',
    slug: 'knipex-13-96-200',
    specs: [
      { key: 'Длина', value: '200 мм' },
      { key: 'Вес', value: '245 г' },
      { key: 'Производитель', value: 'Knipex, Германия' },
      { key: 'Гарантия', value: '5 лет' }
    ],
    stockCount: 14,
    tags: ['инструмент', 'Knipex']
  },
  {
    brand: 'IEK',
    categoryId: 'protection',
    currency: 'RUB',
    description:
      'УЗО IEK ВД1-63 2P 40A 30мА защищает человека от поражения током и электропроводку от утечек. Электромеханическое, работает без напряжения питания.',
    discountPercent: 15,
    gallery: [IMG.item4, IMG.item6, IMG.item2],
    id: 'p11',
    image: IMG.item4,
    inStock: true,
    name: 'УЗО IEK ВД1-63 2P 40A 30mA',
    oldPrice: 1650,
    price: 1399,
    rating: 4.7,
    reviewsCount: 232,
    shortDescription: '2P, 40A, 30 мА, тип AC',
    slug: 'iek-vd1-63-40',
    specs: [
      { key: 'Полюсов', value: '2' },
      { key: 'Ток', value: '40 А' },
      { key: 'Ток утечки', value: '30 мА' },
      { key: 'Тип', value: 'AC' }
    ],
    stockCount: 68,
    tags: ['УЗО', 'IEK']
  },
  {
    brand: 'Legrand',
    categoryId: 'sockets',
    currency: 'RUB',
    description:
      'Выключатель Legrand Valena Life одноклавишный, скрытая установка. Современный дизайн, белая рамка, надёжный механизм.',
    gallery: [IMG.item5, IMG.item7, IMG.item1],
    id: 'p12',
    image: IMG.item5,
    inStock: false,
    name: 'Выключатель Legrand Valena Life 1-кл',
    price: 820,
    rating: 4.8,
    reviewsCount: 78,
    shortDescription: '1 клавиша, белый',
    slug: 'legrand-valena-life-1',
    specs: [
      { key: 'Клавиш', value: '1' },
      { key: 'Ток', value: '10 А' },
      { key: 'Монтаж', value: 'Скрытый' },
      { key: 'Цвет', value: 'Белый' }
    ],
    stockCount: 0,
    tags: ['выключатель', 'Legrand']
  }
]

export function findProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug)
}

export function getProductsByCategory(
  categoryId: string
): Product[] {
  return PRODUCTS.filter(p => p.categoryId === categoryId)
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.isHit || p.isNew)
}

export function getDiscountedProducts(): Product[] {
  return PRODUCTS.filter(p => p.discountPercent)
}
