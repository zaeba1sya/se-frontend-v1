export interface UserAddress {
  id: string
  title: string
  city: string
  street: string
  apartment?: string
  postalCode: string
  isDefault: boolean
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
  createdAt: string
  addresses: UserAddress[]
}

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'

export interface OrderItem {
  productId: string
  name: string
  image: string
  price: number
  quantity: number
}

export interface Order {
  id: string
  number: string
  status: OrderStatus
  items: OrderItem[]
  total: number
  itemsTotal: number
  delivery: number
  createdAt: string
  deliveryAddress: string
  paymentMethod: string
}
