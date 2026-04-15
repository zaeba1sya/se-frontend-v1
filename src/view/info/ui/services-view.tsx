import {
  ClipboardCheck,
  Hammer,
  LineChart,
  ShieldCheck,
  Wrench,
  Zap
} from 'lucide-react'

import { InfoSection, InfoShell } from './info-shell'

const SERVICES = [
  {
    description:
      'Проведение измерений и испытаний электроустановок. Выдаём протоколы для Ростехнадзора и органов контроля.',
    icon: ClipboardCheck,
    items: [
      'Измерение сопротивления изоляции',
      'Проверка контура заземления',
      'Измерение петли «фаза-ноль»',
      'Проверка УЗО',
      'Тепловизионное обследование'
    ],
    title: 'Электролаборатория'
  },
  {
    description:
      'Электромонтаж под ключ — от проекта до приёмки. Квартиры, офисы, торговые помещения, промышленные объекты.',
    icon: Hammer,
    items: [
      'Прокладка кабельных трасс',
      'Монтаж щитового оборудования',
      'Установка автоматики и УЗО',
      'Освещение любой сложности',
      'Сдача объекта с документами'
    ],
    title: 'Электромонтаж'
  },
  {
    description:
      'Поставка электротехники на объекты и склады подрядчиков. Гибкие условия для оптовых и проектных заказов.',
    icon: Zap,
    items: [
      'Комплектация по спецификации',
      'Поставка под проекты',
      'Отсрочка платежа для постоянных клиентов',
      'Приоритетное резервирование со склада'
    ],
    title: 'Опт и проектные поставки'
  }
] as const

const BENEFITS = [
  {
    description:
      'Все работы выполняются аттестованными специалистами с допусками СРО.',
    icon: ShieldCheck,
    title: 'Допуски и сертификаты'
  },
  {
    description:
      'Прозрачная смета заранее. Без скрытых платежей в процессе.',
    icon: LineChart,
    title: 'Фиксированная цена'
  },
  {
    description:
      'Гарантия на электромонтажные работы — 24 месяца.',
    icon: Wrench,
    title: 'Гарантия 2 года'
  }
] as const

export function ServicesView() {
  return (
    <InfoShell
      icon={Wrench}
      eyebrow="Услуги"
      title="Не только товары — полный цикл работ"
      lead="Наши инженеры помогут на всех этапах: от проекта и поставки оборудования до монтажа и сдачи объекта."
    >
      <InfoSection title="Что мы делаем">
        <div className="mt-2 flex flex-col gap-4">
          {SERVICES.map(s => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="bg-card hairline flex flex-col gap-4 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-foreground text-base font-semibold">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {s.description}
                    </p>
                  </div>
                </div>
                <ul className="text-muted-foreground ml-15 grid gap-1.5 text-sm md:grid-cols-2">
                  {s.items.map(item => (
                    <li
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <span className="bg-primary size-1.5 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </InfoSection>

      <InfoSection title="Почему нам доверяют">
        <div className="mt-2 grid gap-3 md:grid-cols-3">
          {BENEFITS.map(b => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="bg-card hairline flex flex-col gap-3 rounded-2xl p-5"
              >
                <Icon className="text-primary size-5" />
                <h3 className="text-foreground text-sm font-semibold">
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {b.description}
                </p>
              </div>
            )
          })}
        </div>
      </InfoSection>
    </InfoShell>
  )
}
