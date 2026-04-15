const RUB_FORMATTER = new Intl.NumberFormat('ru-RU', {
  currency: 'RUB',
  maximumFractionDigits: 0,
  style: 'currency'
})

const NUMBER_FORMATTER = new Intl.NumberFormat('ru-RU')

const DATE_FORMATTER = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

const DATE_TIME_FORMATTER = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  month: 'long',
  year: 'numeric'
})

export function formatPrice(value: number): string {
  return RUB_FORMATTER.format(value)
}

export function formatNumber(value: number): string {
  return NUMBER_FORMATTER.format(value)
}

export function formatDate(value: string | Date): string {
  return DATE_FORMATTER.format(new Date(value))
}

export function formatDateTime(value: string | Date): string {
  return DATE_TIME_FORMATTER.format(new Date(value))
}
