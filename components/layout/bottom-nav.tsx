'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Ellipsis, House, Newspaper, Scale, Smartphone, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const tabs: { label: string; href: string; icon: LucideIcon }[] = [
  { label: 'Home', href: '/', icon: House },
  { label: 'Phones', href: '/phones', icon: Smartphone },
  { label: 'Compare', href: '/compare', icon: Scale },
  { label: 'News', href: '/news', icon: Newspaper },
]

const tabClass = 'flex h-full flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors'

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Bottom"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_10px_rgba(15,23,42,0.06)] md:hidden"
    >
      <ul className="grid h-16 grid-cols-5">
        {tabs.map(({ label, href, icon: Icon }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(tabClass, active ? 'text-primary' : 'text-muted-foreground hover:text-foreground')}
              >
                <Icon
                  className={cn('size-6', active && 'fill-current [&>path:last-child]:fill-background')}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                {label}
              </Link>
            </li>
          )
        })}
        <li>
          <Link
            href="/more"
            aria-current={pathname.startsWith('/more') ? 'page' : undefined}
            className={cn(tabClass, pathname.startsWith('/more') ? 'text-primary' : 'text-muted-foreground hover:text-foreground')}
          >
            <Ellipsis className="size-6" strokeWidth={2} aria-hidden="true" />
            More
          </Link>
        </li>
      </ul>
    </nav>
  )
}
