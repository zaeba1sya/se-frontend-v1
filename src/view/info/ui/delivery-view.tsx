import { Truck } from 'lucide-react'

import { InfoSection, InfoShell } from './info-shell'

const METHODS = [
  {
    description:
      'Курьером до двери. 1–2 рабочих дня. Бесплатно от 5 000 ₽, иначе 490 ₽.',
    title: 'Южно-Сахалинск'
  },
  {
    description:
      'Через транспортную компанию СДЭК, ПЭК, Деловые Линии. 3–7 дней. Тариф по факту.',
    title: 'По Сахалинской области'
  },
  {
    description:
      'Доставка по России и странам СНГ транспортной компанией. Расчёт индивидуально.',
    title: 'Другие регионы'
  },
  {
    description:
      'Склад: ул. Ленина, 150. Выдача в день заказа, Пн–Сб с 9:00 до 20:00.',
    title: 'Самовывоз'
  }
] as const

const PAYMENTS = [
  'Банковские карты Visa, MasterCard, МИР',
  'Наличные курьеру или в точке самовывоза',
  'Безналичный расчёт с НДС для юридических лиц',
  'Рассрочка от партнёрских банков (до 12 месяцев)'
] as const

export function DeliveryView() {
  return (
    <InfoShell
      icon={Truck}
      eyebrow="Доставка и оплата"
      title="Привозим быстро и удобно"
      lead="Мы доставляем электрику по всей Сахалинской области и в другие регионы России. Выбирайте способ, который вам удобен."
    >
      <InfoSection title="Способы доставки">
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {METHODS.map(m => (
            <div
              key={m.title}
              className="bg-card hairline flex flex-col gap-2 rounded-2xl p-5"
            >
              <h3 className="text-foreground text-sm font-semibold">
                {m.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Способы оплаты">
        <ul className="ml-4 list-disc space-y-2">
          {PAYMENTS.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title="Гарантия и возврат">
        <p>
          На все товары действует официальная гарантия производителя
          от 12 до 60 месяцев. Возврат и обмен возможны в течение 14
          дней с сохранением упаковки и товарного вида. Мы всегда
          идём навстречу клиенту — если вы получили не то, что
          заказывали, сообщите нам и мы решим вопрос.
        </p>
      </InfoSection>
    </InfoShell>
  )
}
