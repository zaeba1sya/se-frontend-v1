'use client'

import { useState } from 'react'
import { LogIn } from 'lucide-react'

import { useAuthStore } from 'feature/auth'
import { Button, Input, Label } from 'shared/ui'

export function LoginForm() {
  const login = useAuthStore(s => s.login)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    login(email)
  }

  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-16">
      <div className="bg-card hairline w-full max-w-md rounded-3xl p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-xl">
            <LogIn className="size-5" />
          </span>
          <div>
            <h1 className="text-xl font-semibold">Вход в кабинет</h1>
            <p className="text-muted-foreground text-xs">
              Демо-режим · любые данные подходят
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-11"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-11"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="h-12 w-full rounded-full text-sm"
          >
            Войти
          </Button>
        </form>

        <p className="text-muted-foreground mt-5 text-center text-xs">
          Нет аккаунта? Регистрация откроется скоро.
        </p>
      </div>
    </div>
  )
}
