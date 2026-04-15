import Link from 'next/link'
import { ArrowRight, ShieldCheck, Sparkles, Truck } from 'lucide-react'

import { ROUTES } from 'shared/lib/constants/routes'
import { Button } from 'shared/ui'

const HERO_STATS = [
  { label: 'Товаров в каталоге', value: '450+' },
  { label: 'Лет на рынке', value: '16' },
  { label: 'Довольных клиентов', value: '8 400+' }
] as const

const HERO_BADGES = [
  { icon: Truck, label: 'Доставка по всему Сахалину' },
  { icon: ShieldCheck, label: 'Официальная гарантия' },
  { icon: Sparkles, label: 'Услуги электролаборатории' }
] as const

export function Hero() {
  return (
    <section className="container-page relative pt-8 pb-12 md:pt-16 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] overflow-hidden"
      >
        <div className="bg-primary/20 absolute -top-40 left-1/2 size-[620px] -translate-x-1/2 rounded-full blur-[120px]" />
        <div className="bg-chart-4/10 absolute top-20 right-0 size-[420px] rounded-full blur-[120px]" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="flex flex-col gap-7">
          <span className="bg-primary/10 text-primary ring-primary/20 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold ring-1">
            <Sparkles className="size-3.5" />
            Электромаркет Сахалина · с 2008 года
          </span>

          <h1 className="font-display text-balance text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-foreground">Электрика для</span>{' '}
            <span className="text-gradient">дома, стройки</span>
            <br className="hidden md:inline" />
            <span className="text-foreground"> и производства</span>
          </h1>

          <p className="text-muted-foreground max-w-xl text-base leading-relaxed md:text-lg">
            Магнитные пускатели, кабель, автоматика, тёплые полы,
            сварочное оборудование и инструмент. Всё для
            электромонтажа в одном месте — с доставкой и аттестованной
            электролабораторией.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-sm">
              <Link href={ROUTES.CATALOG}>
                Перейти в каталог
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-6 text-sm"
            >
              <Link href={ROUTES.SERVICES}>Услуги компании</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-5 pt-2">
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="text-muted-foreground inline-flex items-center gap-2 text-sm"
              >
                <span className="bg-card hairline flex size-8 items-center justify-center rounded-full">
                  <Icon className="text-primary size-4" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-card hairline relative overflow-hidden rounded-[28px] p-6 shadow-lg sm:p-8">
            <div className="bg-primary/5 absolute inset-0 opacity-80" />
            <div className="relative">
              <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                Сегодня в наличии
              </span>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {HERO_STATS.map(s => (
                  <div key={s.label}>
                    <div className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl">
                      {s.value}
                    </div>
                    <div className="text-muted-foreground mt-1 text-xs leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-border mt-8 space-y-3 border-t pt-6">
                {[
                  'Пускатели и контакторы ABB, IEK, КЭАЗ',
                  'Кабель ВВГнг, ПВС, КГ — со склада',
                  'Сварочные инверторы Ресанта, Сварог',
                  'Тёплые полы Devi, Теплолюкс, Caleo'
                ].map(row => (
                  <div
                    key={row}
                    className="text-foreground flex items-center gap-2.5 text-sm"
                  >
                    <span className="bg-primary size-1.5 rounded-full" />
                    {row}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="bg-primary/10 hairline absolute -bottom-4 -right-4 -z-10 size-full rounded-[28px]"
          />
        </div>
      </div>
    </section>
  )
}
