export interface Review {
  id: string
  productId: string
  author: string
  rating: number
  createdAt: string
  title: string
  body: string
}

export const REVIEWS: Review[] = [
  {
    id: 'r-1',
    productId: 'puskatel-pm12-025',
    author: 'Алексей В.',
    rating: 5,
    createdAt: '2026-02-14',
    title: 'Работает как часы',
    body: 'Поставили на компрессорную установку, полгода без нареканий. Корпус крепкий, контакты чистые, щёлкает уверенно.'
  },
  {
    id: 'r-2',
    productId: 'puskatel-pm12-025',
    author: 'Дмитрий М.',
    rating: 4,
    createdAt: '2026-01-30',
    title: 'Хороший пускатель за свои деньги',
    body: 'Всё ок, только упаковка могла быть плотнее — приехал слегка помятый, но внутри всё целое.'
  },
  {
    id: 'r-3',
    productId: 'mat-tropix-4',
    author: 'Ирина С.',
    rating: 5,
    createdAt: '2026-03-02',
    title: 'Тёплый пол в ванной',
    body: 'Установили под плитку, греет равномерно, терморегулятор держит температуру точно. Очень довольны.'
  },
  {
    id: 'r-4',
    productId: 'ballu-camino-eco-1500',
    author: 'Павел К.',
    rating: 5,
    createdAt: '2026-03-18',
    title: 'Тихий и быстрый',
    body: 'Гараж 18 м², выходит на рабочую температуру за десять минут. Шума почти нет, управление понятное.'
  }
]

export function getReviewsByProduct(productId: string): Review[] {
  return REVIEWS.filter(r => r.productId === productId)
}
