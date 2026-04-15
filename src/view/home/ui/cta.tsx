import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

import { ROUTES } from 'shared/lib/constants/routes'
import { Button } from 'shared/ui'

export function Cta() {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.4), transparent 40%)'
          }}
        />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Нужна консультация по проекту?
            </h2>
            <p className="mt-4 text-base opacity-90 md:text-lg">
              Расскажите о задаче — подберём комплектацию, рассчитаем
              смету и предложим лучшие условия.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 rounded-full bg-background text-foreground hover:bg-background/90 px-7"
            >
              <Link href={ROUTES.CONTACTS}>
                Связаться с нами
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full border border-white/30 bg-transparent px-7 text-primary-foreground hover:bg-white/10"
            >
              <a href="tel:+74242123456">
                <Phone className="size-4" />
                +7 (4242) 12-34-56
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
