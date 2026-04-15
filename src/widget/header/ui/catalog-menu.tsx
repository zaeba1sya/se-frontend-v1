'use client'

import Link from 'next/link'
import { ChevronDown, LayoutGrid } from 'lucide-react'

import { CATEGORIES } from 'shared/mocks'
import {
  categoryRoute,
  ROUTES
} from 'shared/lib/constants/routes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from 'shared/ui'

export function CatalogMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors"
        >
          <LayoutGrid className="size-4" />
          <span>Каталог</span>
          <ChevronDown className="size-4 opacity-80" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={12}
        className="w-[720px] p-3"
      >
        <div className="grid grid-cols-2 gap-1">
          {CATEGORIES.map(cat => {
            const Icon = cat.icon
            return (
              <DropdownMenuItem key={cat.id} asChild>
                <Link
                  href={categoryRoute(cat.slug)}
                  className="hover:bg-accent flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors"
                >
                  <span className="bg-primary/10 text-primary mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-foreground text-sm font-medium">
                      {cat.name}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {cat.description}
                    </span>
                  </span>
                </Link>
              </DropdownMenuItem>
            )
          })}
        </div>
        <div className="border-border mt-3 flex items-center justify-between border-t pt-3">
          <span className="text-muted-foreground text-xs">
            Более 450 товаров в каталоге
          </span>
          <Link
            href={ROUTES.CATALOG}
            className="text-primary text-xs font-semibold hover:underline"
          >
            Весь каталог →
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
