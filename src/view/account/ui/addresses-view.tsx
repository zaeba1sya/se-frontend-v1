'use client'

import { Check, MapPin, Plus } from 'lucide-react'

import { useAuthStore } from 'feature/auth'
import { Button } from 'shared/ui'

export function AddressesView() {
  const user = useAuthStore(s => s.user)
  if (!user) return null

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold tracking-tight">
          Адреса доставки
        </h1>
        <Button
          variant="outline"
          className="h-10 rounded-full px-5"
          size="sm"
        >
          <Plus className="size-4" />
          Добавить
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {user.addresses.map(addr => (
          <div
            key={addr.id}
            className="bg-card hairline flex flex-col gap-3 rounded-2xl p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="text-primary size-4" />
                <span className="text-foreground text-sm font-semibold">
                  {addr.title}
                </span>
              </div>
              {addr.isDefault ? (
                <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold">
                  <Check className="size-3" />
                  По умолчанию
                </span>
              ) : null}
            </div>
            <div className="text-muted-foreground text-sm">
              <div>
                {addr.city}, {addr.postalCode}
              </div>
              <div>{addr.street}</div>
              {addr.apartment ? <div>{addr.apartment}</div> : null}
            </div>
            <div className="mt-2 flex gap-2 text-xs">
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Редактировать
              </button>
              {!addr.isDefault ? (
                <>
                  <span className="text-border">·</span>
                  <button
                    type="button"
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    Удалить
                  </button>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
