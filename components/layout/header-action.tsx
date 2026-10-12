import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'

type HeaderActionProps = {
  href: string
  label: string
  count: number
  icon: LucideIcon
}

export function HeaderAction({ href, label, count, icon: Icon }: HeaderActionProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1.5 text-[13px] font-medium text-foreground transition-colors hover:text-primary"
    >
      <Icon className="size-[18px] text-primary" aria-hidden="true" />
      <span className="hidden lg:inline">{label}</span>
      <span className="sr-only lg:hidden">{label}</span>
      <span className="flex h-4 min-w-6 items-center justify-center rounded-full bg-badge px-1.5 text-[10px] font-semibold text-foreground">
        {count}
      </span>
    </Link>
  )
}
