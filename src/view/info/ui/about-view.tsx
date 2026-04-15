import { Building2 } from 'lucide-react'

import { InfoSection, InfoShell } from './info-shell'

const STATS = [
  { label: 'Лет на рынке', value: '16+' },
  { label: 'Выполненных проектов', value: '1 240' },
  { label: 'Партнёров-производителей', value: '45' },
  { label: 'Наименований на складе', value: '450+' }
] as const

export function AboutView() {
  return (
    <InfoShell
      icon={Building2}
      eyebrow="О компании"
      title="Сахэлектрик — надёжный электромаркет Сахалина"
      lead="С 2008 года мы поставляем качественное электрооборудование и оказываем услуги электромонтажа на всей территории Сахалинской области."
    >
      <div className="bg-card hairline grid grid-cols-2 gap-4 rounded-2xl p-6 md:grid-cols-4">
        {STATS.map(s => (
          <div key={s.label}>
            <div className="text-foreground text-3xl font-semibold tracking-tight">
              {s.value}
            </div>
            <div className="text-muted-foreground mt-1 text-xs">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <InfoSection title="Наша миссия">
        <p>
          Мы помогаем инженерам, прорабам, частным мастерам и
          владельцам домов подбирать качественное электрооборудование
          по справедливым ценам. Наша цель — чтобы электрика в
          каждом доме была безопасной, долговечной и современной.
        </p>
      </InfoSection>

      <InfoSection title="Что мы делаем">
        <ul className="ml-4 list-disc space-y-2">
          <li>
            Поставляем электротехнику от проверенных мировых и
            российских производителей.
          </li>
          <li>
            Оказываем услуги электромонтажа: от проекта до сдачи
            объекта.
          </li>
          <li>
            Проводим испытания и измерения аттестованной
            электролабораторией с выдачей протоколов.
          </li>
          <li>
            Работаем с частными клиентами и юридическими лицами,
            включая крупные подрядные организации.
          </li>
        </ul>
      </InfoSection>

      <InfoSection title="Почему выбирают нас">
        <p>
          Мы держим в наличии товары, которые нужны на объектах
          каждый день, а не только ходовые позиции. Наши клиенты
          ценят нас за стабильное качество, честные сроки и
          профессиональную консультацию — у нас работают инженеры,
          которые сами были на стройке и знают, что такое дедлайн.
        </p>
      </InfoSection>
    </InfoShell>
  )
}
