'use client'

import Link from 'next/link'
import { useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { NavItem } from '@/lib/types'
import { cn } from '@/lib/utils'

type NavDropdownProps = {
  label: string
  items: NavItem[]
  className?: string
  icon?: React.ReactNode
}

export function NavDropdown({ label, items, className, icon }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const rootRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={rootRef}
      className="relative h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) setOpen(false)
      }}
      onKeyDown={(event) => event.key === 'Escape' && setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={className}
      >
        {icon}
        {label}
        <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>
      {open && (
        <ul
          id={menuId}
          className="absolute left-0 top-full z-50 min-w-48 rounded-b-md border border-border bg-popover py-1.5 shadow-lg"
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
