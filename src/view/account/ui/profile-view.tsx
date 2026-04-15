'use client'

import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

import { useAuthStore } from 'feature/auth'
import { formatDate } from 'shared/lib/format'
import { Button, Input, Label } from 'shared/ui'

export function ProfileView() {
  const user = useAuthStore(s => s.user)
  const update = useAuthStore(s => s.updateProfile)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    email: user?.email ?? '',
    name: user?.name ?? '',
    phone: user?.phone ?? ''
  })

  useEffect(() => {
    if (!user) return
    setForm({ email: user.email, name: user.name, phone: user.phone })
  }, [user])

  if (!user) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    update(form)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="bg-card hairline rounded-2xl p-6 md:p-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight">
            Профиль
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Аккаунт создан {formatDate(user.createdAt)}
          </p>
        </div>
        {saved ? (
          <span className="text-success inline-flex items-center gap-1.5 text-sm">
            <Check className="size-4" />
            Сохранено
          </span>
        ) : null}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid max-w-xl gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Имя и фамилия</Label>
          <Input
            id="name"
            required
            value={form.name}
            onChange={e =>
              setForm(s => ({ ...s, name: e.target.value }))
            }
            className="h-11"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={e =>
                setForm(s => ({ ...s, email: e.target.value }))
              }
              className="h-11"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={form.phone}
              onChange={e =>
                setForm(s => ({ ...s, phone: e.target.value }))
              }
              className="h-11"
            />
          </div>
        </div>

        <div className="mt-2">
          <Button
            type="submit"
            size="lg"
            className="h-11 rounded-full px-6"
          >
            Сохранить изменения
          </Button>
        </div>
      </form>
    </div>
  )
}
