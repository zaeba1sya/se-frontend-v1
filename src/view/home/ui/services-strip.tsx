import Link from 'next/link'
import {
  ArrowRight,
  ClipboardCheck,
  Hammer,
  ShieldCheck,
  Zap
} from 'lucide-react'

import { ROUTES } from 'shared/lib/constants/routes'

const SERVICES = [
  {
    description:
      'Измерение сопротивления изоляции, заземления, петли фаза-ноль. Выдаём протоколы для Ростехнадзора.',
    icon: ClipboardCheck,
    title: 'Электролаборатория'
  },
  {
    description:
      'Монтаж электрики под ключ — от проекта до сдачи. Квартиры, офисы, объекты.',
    icon: Hammer,
    title: 'Электромонтаж'
  },
  {
    description:
      'Поставка оборудования на объекты. Гибкие условия для подрядчиков и оптовиков.',
    icon: Zap,
    title: 'Опт и проекты'
  },
  {
    description:
      'Гарантия 24 месяца на все товары, официальные сертификаты и документы.',
    icon: ShieldCheck,
    title: 'Гарантия качества'
  }
] as const

export function ServicesStrip() {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="bg-card hairline relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-12">
        <div
          aria-hidden="true"
          className="bg-primary/10 absolute -top-32 -right-20 size-[400px] rounded-full blur-[100px]"
        />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              Услуги
            </span>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Не только товары —<br />
              но и полный цикл работ
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
              Наша команда спроектирует, смонтирует и проведёт
              пуско-наладку электрооборудования на объектах любого
              масштаба.
            </p>
            <Link
              href={ROUTES.SERVICES}
              className="text-primary hover:text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Узнать больше
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {SERVICES.map(service => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-card-muted hairline flex flex-col gap-3 rounded-2xl p-5"
                >
                  <span className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-xl">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-foreground text-sm font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
