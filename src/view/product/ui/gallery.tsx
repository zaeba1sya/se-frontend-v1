'use client'

import { useState } from 'react'
import Image from 'next/image'

import { cn } from 'shared/lib/utils'

interface Props {
  name: string
  images: string[]
}

export function Gallery({ name, images }: Props) {
  const [active, setActive] = useState(0)
  const current = images[active] ?? images[0]

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-card hairline relative aspect-square overflow-hidden rounded-2xl">
        {current ? (
          <Image
            src={current}
            alt={name}
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-contain p-10"
            priority
          />
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="grid grid-cols-5 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                'bg-card hairline relative aspect-square overflow-hidden rounded-xl transition-all',
                i === active && 'ring-primary ring-2'
              )}
              aria-label={`Изображение ${i + 1}`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="120px"
                className="object-contain p-3"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
