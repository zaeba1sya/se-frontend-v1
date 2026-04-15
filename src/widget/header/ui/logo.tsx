import Link from 'next/link'
import { Zap } from 'lucide-react'

import { ROUTES } from 'shared/lib/constants/routes'

export function Logo() {
  return (
    <Link
      href={ROUTES.HOME}
      className="group flex items-center gap-2.5"
      aria-label="Сахэлектрик, на главную"
    >
      <span
        className="bg-primary/10 text-primary ring-primary/20 relative flex size-9 items-center justify-center rounded-xl ring-1 transition-all group-hover:ring-primary/40"
        aria-hidden="true"
      >
        <Zap className="size-5" strokeWidth={2.4} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-foreground text-[15px] font-semibold tracking-tight">
          Сахэлектрик
        </span>
        <span className="text-muted-foreground text-[11px] font-medium">
          электромаркет Сахалина
        </span>
      </span>
    </Link>
  )
}
