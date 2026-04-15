import Link from 'next/link'
import { Headphones, MapPin, Phone } from 'lucide-react'

import { ROUTES } from 'shared/lib/constants/routes'

import { AccountButton } from './account-button'
import { CartButton } from './cart-button'
import { CatalogMenu } from './catalog-menu'
import { FavoritesButton } from './favorites-button'
import { Logo } from './logo'
import { MobileNav } from './mobile-nav'
import { SearchBar } from './search-bar'
import { ThemeToggle } from './theme-toggle'

const NAV_LINKS = [
  { href: ROUTES.CATALOG, label: 'Каталог' },
  { href: ROUTES.SERVICES, label: 'Услуги' },
  { href: ROUTES.DELIVERY, label: 'Доставка' },
  { href: ROUTES.ABOUT, label: 'О компании' },
  { href: ROUTES.CONTACTS, label: 'Контакты' }
] as const

export function Header() {
  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="container-page border-border/60 hidden h-9 items-center justify-between border-b text-xs md:flex">
        <div className="text-muted-foreground flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            Южно-Сахалинск
          </span>
          <Link
            href={ROUTES.DELIVERY}
            className="hover:text-foreground transition-colors"
          >
            Доставка по всему Сахалину
          </Link>
        </div>
        <div className="text-muted-foreground flex items-center gap-5">
          <a
            href="tel:+74242123456"
            className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            <Phone className="size-3.5" />
            +7 (4242) 12-34-56
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Headphones className="size-3.5" />
            Пн–Сб 9:00–20:00
          </span>
        </div>
      </div>

      <div className="container-page flex h-[64px] items-center gap-3 md:h-[72px] md:gap-5">
        <MobileNav />
        <Logo />
        <div className="hidden flex-shrink-0 md:block">
          <CatalogMenu />
        </div>
        <div className="hidden flex-1 md:block">
          <SearchBar />
        </div>
        <div className="ml-auto flex items-center gap-0.5 md:gap-1">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <div className="hidden sm:block">
            <FavoritesButton />
          </div>
          <CartButton />
          <AccountButton />
        </div>
      </div>

      <div className="container-page pb-3 md:hidden">
        <SearchBar />
      </div>

      <nav
        aria-label="Основная навигация"
        className="container-page border-border/60 hidden h-11 items-center gap-7 border-t text-sm md:flex"
      >
        {NAV_LINKS.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
