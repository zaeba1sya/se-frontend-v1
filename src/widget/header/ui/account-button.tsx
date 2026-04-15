'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { User } from 'lucide-react'

import { useAuthStore } from 'feature/auth'
import { ROUTES } from 'shared/lib/constants/routes'

export function AccountButton() {
  const isAuthenticated = useAuthStore(s => s.isAuthenticated)
  const user = useAuthStore(s => s.user)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const initials =
    mounted && user
      ? user.name
          .split(' ')
          .map(p => p[0])
          .slice(0, 2)
          .join('')
          .toUpperCase()
      : null

  return (
    <Link
      href={ROUTES.ACCOUNT}
      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors"
      aria-label="Личный кабинет"
    >
      {mounted && isAuthenticated && initials ? (
        <span className="bg-primary/10 text-primary ring-primary/20 flex size-7 items-center justify-center rounded-full text-[11px] font-semibold ring-1">
          {initials}
        </span>
      ) : (
        <User className="size-[18px]" />
      )}
      <span className="hidden text-xs font-medium lg:inline">
        {mounted && isAuthenticated && user
          ? user.name.split(' ')[0]
          : 'Войти'}
      </span>
    </Link>
  )
}
