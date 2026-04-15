'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Heart,
  LogOut,
  MapPin,
  Package,
  User
} from 'lucide-react'

import { useAuthStore } from 'feature/auth'
import { ROUTES } from 'shared/lib/constants/routes'
import { cn } from 'shared/lib/utils'

import { LoginForm } from './login-form'

const NAV = [
  { href: ROUTES.ACCOUNT_PROFILE, icon: User, label: 'Профиль' },
  { href: ROUTES.ACCOUNT_ORDERS, icon: Package, label: 'Заказы' },
  {
    href: ROUTES.ACCOUNT_ADDRESSES,
    icon: MapPin,
    label: 'Адреса'
  },
  {
    href: ROUTES.ACCOUNT_FAVORITES,
    icon: Heart,
    label: 'Избранное'
  }
] as const

interface Props {
  children: React.ReactNode
}

export function AccountLayout({ children }: Props) {
  const pathname = usePathname()
  const user = useAuthStore(s => s.user)
  const isAuthenticated = useAuthStore(s => s.isAuthenticated)
  const logout = useAuthStore(s => s.logout)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="container-page py-20" />

  if (!isAuthenticated || !user) return <LoginForm />

  const initials = user.name
    .split(' ')
    .map(p => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="container-page py-10">
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="bg-card hairline flex h-fit flex-col gap-4 rounded-2xl p-5 lg:sticky lg:top-[180px]">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="bg-primary/10 text-primary ring-primary/20 flex size-11 items-center justify-center rounded-full ring-1 text-sm font-semibold">
              {initials}
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="text-foreground truncate text-sm font-semibold">
                {user.name}
              </span>
              <span className="text-muted-foreground truncate text-xs">
                {user.email}
              </span>
            </div>
            <button
              type="button"
              onClick={logout}
              className="text-muted-foreground hover:text-destructive ml-auto flex size-9 shrink-0 items-center justify-center rounded-full transition-colors lg:hidden"
              aria-label="Выйти"
            >
              <LogOut className="size-4" />
            </button>
          </div>

          <nav
            aria-label="Личный кабинет"
            className="scrollbar-none -mx-1 flex gap-1 overflow-x-auto px-1 lg:flex-col"
          >
            {NAV.map(item => {
              const Icon = item.icon
              const active = pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex shrink-0 items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors lg:gap-3',
                    active
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <button
            type="button"
            onClick={logout}
            className="text-muted-foreground hover:text-destructive mt-2 hidden items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors lg:flex"
          >
            <LogOut className="size-4" />
            Выйти
          </button>
        </aside>

        <div>{children}</div>
      </div>
    </div>
  )
}
