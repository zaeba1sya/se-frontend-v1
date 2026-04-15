'use client'

import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

import { ROUTES } from 'shared/lib/constants/routes'
import { Input } from 'shared/ui'

export function SearchBar() {
  const router = useRouter()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.elements.namedItem('q')
    if (!(input instanceof HTMLInputElement)) return
    const query = input.value.trim()
    const target = query
      ? `${ROUTES.CATALOG}?q=${encodeURIComponent(query)}`
      : ROUTES.CATALOG
    router.push(target)
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="group hairline bg-card-muted focus-within:hairline-strong relative flex h-11 w-full items-center rounded-full pl-4 pr-1.5 transition-all"
    >
      <Search
        className="text-muted-foreground mr-3 size-4 shrink-0"
        aria-hidden="true"
      />
      <Input
        type="search"
        name="q"
        placeholder="Искать пускатели, кабель, автоматы..."
        className="h-full flex-1 border-0 bg-transparent p-0 shadow-none focus-visible:ring-0 dark:bg-transparent"
        autoComplete="off"
      />
      <button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/90 flex h-8 items-center rounded-full px-4 text-xs font-semibold transition-colors"
      >
        Найти
      </button>
    </form>
  )
}
