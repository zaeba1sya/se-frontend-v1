'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from 'shared/ui'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={
        isDark
          ? 'Переключить на светлую тему'
          : 'Переключить на тёмную тему'
      }
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark')
      }}
      className="text-muted-foreground hover:text-foreground"
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-[18px]" />
        ) : (
          <Moon className="size-[18px]" />
        )
      ) : (
        <Moon className="size-[18px]" />
      )}
    </Button>
  )
}
