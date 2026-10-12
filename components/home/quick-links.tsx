import Link from 'next/link'
import { CircleStar, Newspaper, Scale, Smartphone, Tag, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { cn } from '@/lib/utils'

const quickLinks: { label: string; href: string; icon: LucideIcon; iconClassName: string }[] = [
  { label: 'All Phones', href: '/phones', icon: Smartphone, iconClassName: 'bg-[#e8f0fe] text-primary' },
  { label: 'Compare', href: '/compare', icon: Scale, iconClassName: 'bg-[#e6f6ec] text-[#16a34a]' },
  { label: 'Best Deals', href: '/deals', icon: Tag, iconClassName: 'bg-[#fff3e2] text-[#f59e0b]' },
  { label: 'Top Rated', href: '/phones/top-rated', icon: CircleStar, iconClassName: 'bg-[#f1ebff] text-[#7c3aed]' },
  { label: 'News', href: '/news', icon: Newspaper, iconClassName: 'bg-[#fde8e8] text-price' },
]

export function QuickLinks() {
  return (
    <nav aria-label="Quick links" className="md:hidden">
      <Container className="pt-2.5">
        <ul className="grid grid-cols-5 rounded-md border border-border bg-card py-2.5 shadow-[0_1px_4px_rgba(15,23,42,0.06)]">
          {quickLinks.map(({ label, href, icon: Icon, iconClassName }) => (
            <li key={label}>
              <Link href={href} className="flex flex-col items-center gap-1.5 text-center">
                <span className={cn('flex size-[30px] items-center justify-center rounded-full', iconClassName)}>
                  <Icon className="size-[17px]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-[10px] font-medium leading-none text-card-foreground">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
