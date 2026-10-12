'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Heart, Scale } from 'lucide-react'
import { Logo } from '@/components/layout/logo'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { categoryNav, mainNav } from '@/lib/site-config'
import type { NavItem } from '@/lib/types'

type MobileMenuProps = {
  triggerLabel: string
  triggerClassName?: string
  children: React.ReactNode
}

export function MobileMenu({ triggerLabel, triggerClassName, children }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const groups: { title: string; items: NavItem[] }[] = [
    { title: 'Categories', items: categoryNav },
    ...mainNav.map((item) => ({ title: item.label, items: item.children ?? [item] })),
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label={triggerLabel} className={triggerClassName}>
        {children}
      </SheetTrigger>
      <SheetContent side="left" className="w-[290px] gap-0 overflow-y-auto p-0">
        <div className="border-b border-border px-4 py-4">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Logo showTagline={false} />
        </div>
        <nav aria-label="Mobile" className="flex flex-col gap-4 px-4 py-4">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{group.title}</p>
              <ul className="flex flex-col">
                {group.items.map((item) => (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block rounded-md py-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-4 border-t border-border px-4 py-3">
          <Link href="/compare" onClick={close} className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            <Scale className="size-4 text-primary" aria-hidden="true" />
            Compare
          </Link>
          <Link href="/wishlist" onClick={close} className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            <Heart className="size-4 text-primary" aria-hidden="true" />
            Wishlist
          </Link>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
