export const ROUTES = {
  ABOUT: '/about',
  ACCOUNT: '/account',
  ACCOUNT_ADDRESSES: '/account/addresses',
  ACCOUNT_FAVORITES: '/account/favorites',
  ACCOUNT_ORDERS: '/account/orders',
  ACCOUNT_PROFILE: '/account/profile',
  CART: '/cart',
  CATALOG: '/catalog',
  CHECKOUT: '/checkout',
  CONTACTS: '/contacts',
  DELIVERY: '/delivery',
  HOME: '/',
  SERVICES: '/services'
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]

export function categoryRoute(slug: string): string {
  return `/catalog/${slug}`
}

export function productRoute(slug: string): string {
  return `/product/${slug}`
}
