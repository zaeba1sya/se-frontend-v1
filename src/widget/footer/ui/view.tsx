import Link from 'next/link'
import { MapPin, Phone, Send, Zap } from 'lucide-react'

import {
  categoryRoute,
  ROUTES
} from 'shared/lib/constants/routes'
import { CATEGORIES } from 'shared/mocks'

const COMPANY_LINKS = [
  { href: ROUTES.ABOUT, label: 'О компании' },
  { href: ROUTES.SERVICES, label: 'Услуги' },
  { href: ROUTES.DELIVERY, label: 'Доставка и оплата' },
  { href: ROUTES.CONTACTS, label: 'Контакты' }
] as const

const CUSTOMER_LINKS = [
  { href: ROUTES.ACCOUNT, label: 'Личный кабинет' },
  { href: ROUTES.ACCOUNT_ORDERS, label: 'Мои заказы' },
  { href: ROUTES.ACCOUNT_FAVORITES, label: 'Избранное' },
  { href: ROUTES.CART, label: 'Корзина' }
] as const

export function Footer() {
  return (
    <footer className="border-border bg-card-muted/40 border-t">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              href={ROUTES.HOME}
              className="mb-5 inline-flex items-center gap-2.5"
            >
              <span
                className="bg-primary/10 text-primary ring-primary/20 flex size-9 items-center justify-center rounded-xl ring-1"
                aria-hidden="true"
              >
                <Zap className="size-5" strokeWidth={2.4} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-foreground text-[15px] font-semibold tracking-tight">
                  Сахэлектрик
                </span>
                <span className="text-muted-foreground text-[11px] font-medium">
                  электромаркет Сахалина
                </span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Поставка электротехники и услуги аттестованной
              электролаборатории. Работаем с 2008 года. Гарантия,
              сертификаты, доставка по всей Сахалинской области.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href="tel:+74242123456"
                className="text-foreground inline-flex items-center gap-2"
              >
                <Phone className="text-primary size-4" />
                +7 (4242) 12-34-56
              </a>
              <span className="text-muted-foreground inline-flex items-center gap-2">
                <MapPin className="text-primary size-4" />
                Южно-Сахалинск, ул. Ленина, 150
              </span>
            </div>
          </div>

          <nav aria-label="Каталог">
            <h3 className="text-foreground mb-4 text-xs font-semibold tracking-wider uppercase">
              Каталог
            </h3>
            <ul className="flex flex-col gap-2.5">
              {CATEGORIES.slice(0, 6).map(cat => (
                <li key={cat.id}>
                  <Link
                    href={categoryRoute(cat.slug)}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Компания">
            <h3 className="text-foreground mb-4 text-xs font-semibold tracking-wider uppercase">
              Компания
            </h3>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {CUSTOMER_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-foreground mb-4 text-xs font-semibold tracking-wider uppercase">
              Рассылка
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Новинки, скидки и полезные материалы по электрике — раз
              в неделю.
            </p>
            <form className="hairline bg-card flex h-11 items-center rounded-full pl-4 pr-1.5">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex size-8 items-center justify-center rounded-full transition-colors"
                aria-label="Подписаться"
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-border mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs md:flex-row">
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} ООО «Сахэлектрик». Все права
            защищены.
          </span>
          <div className="text-muted-foreground flex items-center gap-5">
            <span>ИНН 6501234567</span>
            <span>ОГРН 1086501007654</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
