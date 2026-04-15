'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Phone, X } from 'lucide-react'

import {
  categoryRoute,
  ROUTES
} from 'shared/lib/constants/routes'
import { CATEGORIES } from 'shared/mocks'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from 'shared/ui'

interface Link {
  href: string
  label: string
}

const NAV_LINKS: readonly Link[] = [
  { href: ROUTES.CATALOG, label: 'Каталог' },
  { href: ROUTES.SERVICES, label: 'Услуги' },
  { href: ROUTES.DELIVERY, label: 'Доставка' },
  { href: ROUTES.ABOUT, label: 'О компании' },
  { href: ROUTES.CONTACTS, label: 'Контакты' }
] as const

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="text-foreground hover:bg-accent flex size-10 items-center justify-center rounded-full transition-colors md:hidden"
          aria-label="Открыть меню"
        >
          <Menu className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        showClose={false}
        className="gap-0 p-0"
      >
        <div className="border-border flex h-16 items-center justify-between border-b px-5">
          <SheetTitle className="font-display text-base font-semibold">
            Меню
          </SheetTitle>
          <SheetClose
            aria-label="Закрыть"
            className="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
          >
            <X className="size-5" />
          </SheetClose>
        </div>

        <div className="scrollbar-none flex-1 overflow-y-auto px-5 py-5">
          <nav aria-label="Основная навигация" className="mb-6">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground hover:bg-accent flex items-center rounded-xl px-3 py-3 text-base font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mb-3 px-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Категории
          </div>
          <ul className="flex flex-col gap-1">
            {CATEGORIES.map(cat => (
              <li key={cat.id}>
                <Link
                  href={categoryRoute(cat.slug)}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:bg-accent hover:text-foreground flex items-center rounded-xl px-3 py-2.5 text-sm transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-border border-t px-5 py-4">
          <a
            href="tel:+74242123456"
            className="bg-primary/10 text-primary hover:bg-primary/15 flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-colors"
          >
            <Phone className="size-4" />
            +7 (4242) 12-34-56
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
