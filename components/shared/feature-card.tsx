import type { LucideIcon } from 'lucide-react'
import { CardShell } from '@/components/shared/card-shell'
import { cn } from '@/lib/utils'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  iconClassName?: string
}

export function FeatureCard({ icon: Icon, title, description, iconClassName }: FeatureCardProps) {
  return (
    <CardShell className="flex items-center gap-4 px-4 py-4">
      <span className={cn('flex size-11 shrink-0 items-center justify-center rounded-full', iconClassName)}>
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-[13px] font-semibold text-card-foreground">{title}</h3>
        <p className="mt-1 text-[11px] leading-4 text-muted-foreground">{description}</p>
      </div>
    </CardShell>
  )
}
