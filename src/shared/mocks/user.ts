import type { Order, User } from 'entity/user'

export const MOCK_USER: User = {
  addresses: [
    {
      apartment: 'кв. 12',
      city: 'Южно-Сахалинск',
      id: 'addr1',
      isDefault: true,
      postalCode: '693000',
      street: 'ул. Ленина, 150',
      title: 'Дом'
    },
    {
      apartment: 'офис 304',
      city: 'Южно-Сахалинск',
      id: 'addr2',
      isDefault: false,
      postalCode: '693001',
      street: 'пр. Мира, 32',
      title: 'Офис'
    }
  ],
  createdAt: '2024-03-12T10:00:00.000Z',
  email: 'ivan.petrov@example.com',
  id: 'user1',
  name: 'Иван Петров',
  phone: '+7 (914) 123-45-67'
}

export const MOCK_ORDERS: Order[] = [
  {
    createdAt: '2026-04-02T14:32:00.000Z',
    delivery: 0,
    deliveryAddress: 'Южно-Сахалинск, ул. Ленина, 150, кв. 12',
    id: 'o1',
    items: [
      {
        image: '/item1.jpeg',
        name: 'Пускатель магнитный ПМ12-025',
        price: 2860,
        productId: 'p1',
        quantity: 2
      },
      {
        image: '/item5.jpeg',
        name: 'Автомат ABB S203 C16',
        price: 1890,
        productId: 'p5',
        quantity: 3
      }
    ],
    itemsTotal: 11390,
    number: 'СЭ-202604-0042',
    paymentMethod: 'Банковская карта',
    status: 'delivered',
    total: 11390
  },
  {
    createdAt: '2026-03-18T09:15:00.000Z',
    delivery: 490,
    deliveryAddress: 'Южно-Сахалинск, пр. Мира, 32, офис 304',
    id: 'o2',
    items: [
      {
        image: '/item4.jpeg',
        name: 'Сварочный инвертор САИ-220',
        price: 11490,
        productId: 'p4',
        quantity: 1
      }
    ],
    itemsTotal: 11490,
    number: 'СЭ-202603-0018',
    paymentMethod: 'Банковская карта',
    status: 'delivered',
    total: 11980
  },
  {
    createdAt: '2026-04-11T17:48:00.000Z',
    delivery: 0,
    deliveryAddress: 'Южно-Сахалинск, ул. Ленина, 150, кв. 12',
    id: 'o3',
    items: [
      {
        image: '/item2.jpeg',
        name: 'Нагревательный мат Tropix 4 м²',
        price: 7990,
        productId: 'p2',
        quantity: 1
      },
      {
        image: '/item3.jpeg',
        name: 'Конвектор Ballu Camino Eco 1500',
        price: 5010,
        productId: 'p3',
        quantity: 2
      }
    ],
    itemsTotal: 18010,
    number: 'СЭ-202604-0107',
    paymentMethod: 'Наличные при получении',
    status: 'shipped',
    total: 18010
  },
  {
    createdAt: '2026-04-14T11:22:00.000Z',
    delivery: 490,
    deliveryAddress: 'Южно-Сахалинск, ул. Ленина, 150, кв. 12',
    id: 'o4',
    items: [
      {
        image: '/item7.png',
        name: 'Розетка Schneider Glossa 2П+З',
        price: 540,
        productId: 'p7',
        quantity: 8
      }
    ],
    itemsTotal: 4320,
    number: 'СЭ-202604-0119',
    paymentMethod: 'Банковская карта',
    status: 'processing',
    total: 4810
  }
]
