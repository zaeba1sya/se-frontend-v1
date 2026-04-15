import { Clock, Mail, MapPin, Phone } from 'lucide-react'

import { Input, Label } from 'shared/ui'
import { Button } from 'shared/ui'

import { InfoShell } from './info-shell'

const CONTACTS = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (4242) 12-34-56',
    href: 'tel:+74242123456'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@sakhelectro.ru',
    href: 'mailto:hello@sakhelectro.ru'
  },
  {
    icon: MapPin,
    label: 'Адрес',
    value: 'Южно-Сахалинск, ул. Ленина, 150',
    href: null
  },
  {
    icon: Clock,
    label: 'Режим работы',
    value: 'Пн–Сб: 9:00 – 20:00 · Вс: выходной',
    href: null
  }
] as const

export function ContactsView() {
  return (
    <InfoShell
      icon={Phone}
      eyebrow="Контакты"
      title="Свяжитесь с нами"
      lead="Мы на связи шесть дней в неделю. Позвоните, напишите или приезжайте в офис — ответим на любой вопрос."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          {CONTACTS.map(contact => {
            const Icon = contact.icon
            const content = (
              <div className="flex items-start gap-4">
                <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-muted-foreground text-xs">
                    {contact.label}
                  </span>
                  <span className="text-foreground text-sm font-medium">
                    {contact.value}
                  </span>
                </div>
              </div>
            )
            return contact.href ? (
              <a
                key={contact.label}
                href={contact.href}
                className="bg-card hairline hover:border-primary/40 rounded-2xl p-5 transition-colors"
              >
                {content}
              </a>
            ) : (
              <div
                key={contact.label}
                className="bg-card hairline rounded-2xl p-5"
              >
                {content}
              </div>
            )
          })}
        </div>

        <form className="bg-card hairline flex flex-col gap-4 rounded-2xl p-6">
          <div className="mb-1">
            <h3 className="text-foreground text-base font-semibold">
              Напишите нам
            </h3>
            <p className="text-muted-foreground mt-1 text-xs">
              Ответим в течение рабочего дня
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="c-name">Имя</Label>
            <Input id="c-name" required placeholder="Иван" className="h-11" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="c-email">Email</Label>
            <Input
              id="c-email"
              type="email"
              required
              placeholder="you@example.com"
              className="h-11"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="c-msg">Сообщение</Label>
            <textarea
              id="c-msg"
              required
              rows={4}
              placeholder="Расскажите, с чем мы можем помочь..."
              className="border-input bg-input-background focus-visible:border-ring focus-visible:ring-ring/50 min-h-[110px] w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-[3px]"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="h-11 rounded-full"
          >
            Отправить
          </Button>
        </form>
      </div>
    </InfoShell>
  )
}
