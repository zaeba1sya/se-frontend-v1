'use client'

import { useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SlidersHorizontal } from 'lucide-react'

import { CATEGORIES } from 'shared/mocks'
import { cn } from 'shared/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Checkbox,
  Label,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from 'shared/ui'

interface Props {
  brands: string[]
  priceMin: number
  priceMax: number
}

export function CatalogFilters(props: Props) {
  return (
    <>
      <aside className="bg-card hairline sticky top-[180px] hidden max-h-[calc(100vh-200px)] flex-col overflow-hidden rounded-2xl lg:flex">
        <FiltersBody {...props} />
      </aside>
      <MobileFilters {...props} />
    </>
  )
}

function MobileFilters(props: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="h-10 w-full justify-center rounded-full gap-2"
          >
            <SlidersHorizontal className="size-4" />
            Фильтры
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          showClose={false}
          className="p-0"
        >
          <SheetTitle className="sr-only">Фильтры</SheetTitle>
          <FiltersBody {...props} onApply={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  )
}

interface BodyProps extends Props {
  onApply?: () => void
}

function FiltersBody({
  brands,
  priceMin,
  priceMax,
  onApply
}: BodyProps) {
  const router = useRouter()
  const params = useSearchParams()

  const selectedCategory = params.get('category') ?? ''
  const selectedBrands = useMemo(
    () =>
      new Set((params.get('brand') ?? '').split(',').filter(Boolean)),
    [params]
  )
  const inStockOnly = params.get('stock') === '1'

  function update(patch: Record<string, string | null>) {
    const next = new URLSearchParams(params.toString())
    for (const [key, value] of Object.entries(patch)) {
      if (value === null || value === '') next.delete(key)
      else next.set(key, value)
    }
    router.replace(`?${next.toString()}`, { scroll: false })
  }

  function toggleBrand(brand: string) {
    const next = new Set(selectedBrands)
    if (next.has(brand)) next.delete(brand)
    else next.add(brand)
    update({ brand: [...next].join(',') || null })
  }

  function reset() {
    router.replace('?', { scroll: false })
  }

  const hasFilters =
    selectedCategory || selectedBrands.size > 0 || inStockOnly

  return (
    <div className="flex h-full flex-col">
      <div className="border-border flex items-center justify-between border-b px-5 py-4">
        <h3 className="text-sm font-semibold">Фильтры</h3>
        {hasFilters ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={reset}
            className="h-7 px-2 text-xs"
          >
            Сбросить
          </Button>
        ) : null}
      </div>

      <div className="flex-1 overflow-y-auto px-5">
        <Accordion
          type="multiple"
          defaultValue={['category', 'brand', 'stock']}
          className="text-sm"
        >
          <AccordionItem value="category">
            <AccordionTrigger className="text-sm">
              Категория
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => update({ category: null })}
                  className={cn(
                    'text-muted-foreground hover:text-foreground text-left text-sm transition-colors',
                    !selectedCategory && 'text-foreground font-medium'
                  )}
                >
                  Все категории
                </button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => update({ category: cat.id })}
                    className={cn(
                      'text-muted-foreground hover:text-foreground text-left text-sm transition-colors',
                      selectedCategory === cat.id &&
                        'text-foreground font-medium'
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brand">
            <AccordionTrigger className="text-sm">
              Бренд
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2.5">
                {brands.map(brand => (
                  <Label
                    key={brand}
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm font-normal"
                  >
                    <Checkbox
                      checked={selectedBrands.has(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                    />
                    {brand}
                  </Label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger className="text-sm">Цена</AccordionTrigger>
            <AccordionContent>
              <div className="text-muted-foreground text-xs">
                от {priceMin.toLocaleString('ru-RU')} ₽ до{' '}
                {priceMax.toLocaleString('ru-RU')} ₽
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="stock">
            <AccordionTrigger className="text-sm">
              Наличие
            </AccordionTrigger>
            <AccordionContent>
              <Label className="text-muted-foreground hover:text-foreground cursor-pointer text-sm font-normal">
                <Checkbox
                  checked={inStockOnly}
                  onCheckedChange={checked => {
                    update({ stock: checked ? '1' : null })
                  }}
                />
                Только в наличии
              </Label>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {onApply ? (
        <div className="border-border border-t px-5 py-4">
          <Button
            type="button"
            className="w-full rounded-full"
            onClick={onApply}
          >
            Показать товары
          </Button>
        </div>
      ) : null}
    </div>
  )
}
