'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Building2,
  Check,
  CreditCard,
  MapPin,
  Package,
  User,
  Wallet
} from 'lucide-react'

import { useAuthStore } from 'feature/auth'
import { useCartStore } from 'feature/cart'
import { ROUTES } from 'shared/lib/constants/routes'
import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem
} from 'shared/ui'
import { OrderSummary } from 'widget/order-summary'

type DeliveryMethod = 'courier' | 'pickup'
type PaymentMethod = 'card' | 'cash' | 'invoice'

export function CheckoutView() {
  const router = useRouter()
  const items = useCartStore(s => s.items)
  const clear = useCartStore(s => s.clear)
  const user = useAuthStore(s => s.user)
  const isAuthenticated = useAuthStore(s => s.isAuthenticated)

  const [delivery, setDelivery] = useState<DeliveryMethod>('courier')
  const [payment, setPayment] = useState<PaymentMethod>('card')
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="container-page py-20" />

  if (items.length === 0 && !submitted) {
    router.replace(ROUTES.CART)
    return null
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    clear()
  }

  if (submitted) {
    return (
      <div className="container-page py-20">
        <div className="bg-card hairline mx-auto flex max-w-xl flex-col items-center gap-5 rounded-3xl p-12 text-center">
          <div className="bg-success/15 text-success flex size-16 items-center justify-center rounded-full">
            <Check className="size-8" strokeWidth={3} />
          </div>
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            Заказ оформлен
          </h1>
          <p className="text-muted-foreground max-w-md">
            Спасибо за покупку! Мы отправили детали заказа на вашу
            почту и свяжемся для подтверждения.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full px-6"
              onClick={() => router.push(ROUTES.ACCOUNT_ORDERS)}
            >
              Мои заказы
            </Button>
            <Button
              size="lg"
              className="h-11 rounded-full px-6"
              onClick={() => router.push(ROUTES.CATALOG)}
            >
              В каталог
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const defaultAddress = user?.addresses.find(a => a.isDefault)

  return (
    <div className="container-page py-10">
      <h1 className="font-display mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
        Оформление заказа
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 lg:grid-cols-[1fr_400px]"
      >
        <div className="flex flex-col gap-5">
          <Section
            icon={<User className="size-4" />}
            title="Контактные данные"
            step="1"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Имя и фамилия">
                <Input
                  required
                  defaultValue={
                    isAuthenticated ? user?.name : undefined
                  }
                  placeholder="Иван Иванов"
                />
              </Field>
              <Field label="Телефон">
                <Input
                  required
                  type="tel"
                  defaultValue={
                    isAuthenticated ? user?.phone : undefined
                  }
                  placeholder="+7 (914) 123-45-67"
                />
              </Field>
              <Field label="Email" className="sm:col-span-2">
                <Input
                  required
                  type="email"
                  defaultValue={
                    isAuthenticated ? user?.email : undefined
                  }
                  placeholder="you@example.com"
                />
              </Field>
            </div>
          </Section>

          <Section
            icon={<Package className="size-4" />}
            title="Способ доставки"
            step="2"
          >
            <RadioGroup
              value={delivery}
              onValueChange={v => setDelivery(v as DeliveryMethod)}
              className="gap-3"
            >
              <OptionCard
                value="courier"
                current={delivery}
                title="Курьером"
                subtitle="1–2 дня по Южно-Сахалинску"
                price="от 490 ₽"
              />
              <OptionCard
                value="pickup"
                current={delivery}
                title="Самовывоз со склада"
                subtitle="ул. Ленина 150 · сегодня"
                price="Бесплатно"
              />
            </RadioGroup>
          </Section>

          {delivery === 'courier' ? (
            <Section
              icon={<MapPin className="size-4" />}
              title="Адрес доставки"
              step="3"
            >
              <div className="grid gap-3 sm:grid-cols-[1fr_160px]">
                <Field label="Город">
                  <Input
                    required
                    defaultValue={defaultAddress?.city ?? 'Южно-Сахалинск'}
                  />
                </Field>
                <Field label="Индекс">
                  <Input
                    required
                    defaultValue={defaultAddress?.postalCode ?? ''}
                    placeholder="693000"
                  />
                </Field>
                <Field label="Улица, дом" className="sm:col-span-2">
                  <Input
                    required
                    defaultValue={defaultAddress?.street ?? ''}
                    placeholder="ул. Ленина, 150"
                  />
                </Field>
                <Field label="Квартира / офис" className="sm:col-span-2">
                  <Input defaultValue={defaultAddress?.apartment ?? ''} />
                </Field>
              </div>
            </Section>
          ) : null}

          <Section
            icon={<Wallet className="size-4" />}
            title="Оплата"
            step={delivery === 'courier' ? '4' : '3'}
          >
            <RadioGroup
              value={payment}
              onValueChange={v => setPayment(v as PaymentMethod)}
              className="gap-3"
            >
              <OptionCard
                value="card"
                current={payment}
                title="Банковская карта"
                subtitle="Visa, MasterCard, МИР"
                icon={<CreditCard className="size-4" />}
              />
              <OptionCard
                value="cash"
                current={payment}
                title="Наличные при получении"
                subtitle="Курьеру или в точке самовывоза"
              />
              <OptionCard
                value="invoice"
                current={payment}
                title="Счёт для юрлица"
                subtitle="С НДС, безналичный расчёт"
                icon={<Building2 className="size-4" />}
              />
            </RadioGroup>
          </Section>
        </div>

        <div className="flex flex-col gap-4">
          <OrderSummary cta="pay" />
          <Button
            type="submit"
            size="lg"
            className="h-12 rounded-full text-sm"
          >
            Подтвердить заказ
          </Button>
          <p className="text-muted-foreground text-center text-xs">
            Нажимая кнопку, вы соглашаетесь с условиями обработки
            персональных данных
          </p>
        </div>
      </form>
    </div>
  )
}

function Section({
  icon,
  title,
  step,
  children
}: {
  icon: React.ReactNode
  title: string
  step: string
  children: React.ReactNode
}) {
  return (
    <section className="bg-card hairline flex flex-col gap-5 rounded-2xl p-5 md:p-6">
      <h2 className="flex items-center gap-3 text-base font-semibold">
        <span className="bg-primary/10 text-primary flex size-8 items-center justify-center rounded-full text-xs font-semibold">
          {step}
        </span>
        <span className="text-primary">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Field({
  label,
  children,
  className
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ''}`}>
      <span className="text-muted-foreground text-xs font-medium">
        {label}
      </span>
      {children}
    </label>
  )
}

function OptionCard({
  value,
  current,
  title,
  subtitle,
  price,
  icon
}: {
  value: string
  current: string
  title: string
  subtitle: string
  price?: string
  icon?: React.ReactNode
}) {
  const active = current === value
  return (
    <Label
      className={`hairline relative flex cursor-pointer items-center gap-4 rounded-xl p-4 font-normal transition-colors ${
        active
          ? 'bg-primary/5 ring-primary/30 ring-1'
          : 'bg-card-muted hover:bg-accent'
      }`}
    >
      <RadioGroupItem value={value} />
      {icon ? (
        <span className="text-muted-foreground">{icon}</span>
      ) : null}
      <div className="flex-1">
        <div className="text-foreground text-sm font-medium">
          {title}
        </div>
        <div className="text-muted-foreground text-xs">
          {subtitle}
        </div>
      </div>
      {price ? (
        <span className="text-foreground text-sm font-semibold">
          {price}
        </span>
      ) : null}
    </Label>
  )
}
