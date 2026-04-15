'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from 'shared/ui'

const SORT_OPTIONS = [
  { label: 'По популярности', value: 'popular' },
  { label: 'Сначала дешевле', value: 'price-asc' },
  { label: 'Сначала дороже', value: 'price-desc' },
  { label: 'По рейтингу', value: 'rating' },
  { label: 'Сначала новинки', value: 'new' }
] as const

interface Props {
  total: number
}

export function CatalogToolbar({ total }: Props) {
  const router = useRouter()
  const params = useSearchParams()
  const sort = params.get('sort') ?? 'popular'

  function handleChange(value: string) {
    const next = new URLSearchParams(params.toString())
    if (value === 'popular') next.delete('sort')
    else next.set('sort', value)
    router.replace(`?${next.toString()}`, { scroll: false })
  }

  return (
    <div className="bg-card hairline mb-4 flex items-center justify-between rounded-2xl px-5 py-3">
      <span className="text-muted-foreground text-sm">
        Найдено{' '}
        <span className="text-foreground font-semibold tabular-nums">
          {total}
        </span>{' '}
        товаров
      </span>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground hidden text-xs sm:inline">
          Сортировать:
        </span>
        <Select value={sort} onValueChange={handleChange}>
          <SelectTrigger className="h-9 w-[200px] border-border bg-transparent">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map(o => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
