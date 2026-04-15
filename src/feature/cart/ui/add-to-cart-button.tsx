'use client'

import { useEffect, useState } from 'react'
import { Check, ShoppingBag } from 'lucide-react'

import type { Product } from 'entity/product'
import { cn } from 'shared/lib/utils'
import { Button } from 'shared/ui'

import { useCartStore } from '../model/store'

interface Props {
  product: Product
  className?: string
  size?: 'default' | 'sm' | 'lg'
  fullWidth?: boolean
  quantity?: number
  label?: string
}

export function AddToCartButton({
  product,
  className,
  size = 'default',
  fullWidth = false,
  quantity = 1,
  label = 'В корзину'
}: Props) {
  const add = useCartStore(s => s.add)
  const inCart = useCartStore(s =>
    s.items.some(i => i.productId === product.id)
  )
  const [justAdded, setJustAdded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleClick() {
    add(product, quantity)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1600)
  }

  const isInCart = mounted && (inCart || justAdded)

  return (
    <Button
      type="button"
      size={size}
      variant={isInCart ? 'secondary' : 'default'}
      disabled={!product.inStock}
      onClick={handleClick}
      className={cn(fullWidth && 'w-full', className)}
    >
      {isInCart ? (
        <>
          <Check className="size-4" />
          {justAdded ? 'Добавлено' : 'В корзине'}
        </>
      ) : (
        <>
          <ShoppingBag className="size-4" />
          {product.inStock ? label : 'Нет в наличии'}
        </>
      )}
    </Button>
  )
}
