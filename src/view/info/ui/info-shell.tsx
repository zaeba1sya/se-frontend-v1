import type { LucideIcon } from 'lucide-react'

interface Props {
  icon: LucideIcon
  eyebrow: string
  title: string
  lead: string
  children: React.ReactNode
}

export function InfoShell({
  icon: Icon,
  eyebrow,
  title,
  lead,
  children
}: Props) {
  return (
    <div className="container-page py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-start gap-5">
          <span className="bg-primary/10 text-primary ring-primary/20 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold ring-1">
            <Icon className="size-3.5" />
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            {lead}
          </p>
        </div>

        <div className="flex flex-col gap-10">{children}</div>
      </div>
    </div>
  )
}

export function InfoSection({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="text-muted-foreground flex flex-col gap-3 text-base leading-relaxed">
        {children}
      </div>
    </section>
  )
}
