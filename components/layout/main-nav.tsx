import Link from 'next/link'
import { ChevronDown, Menu } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { NavDropdown } from '@/components/layout/nav-dropdown'
import { categoryNav, mainNav } from '@/lib/site-config'

const itemClass =
  'flex h-full items-center gap-1 whitespace-nowrap text-sm font-medium text-navy-foreground transition-colors hover:text-primary'

export function MainNav() {
  return (
    <nav aria-label="Main" className="hidden bg-[#1d6ae5] md:block">
      <Container className="flex h-[46px] items-center gap-6">
        <ul className="flex h-full flex-1 items-center gap-6 overflow-x-auto lg:gap-[26px] lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          <li className="h-full">
            <NavDropdown label="Categories" items={categoryNav} className={itemClass} icon={<Menu className="mr-1.5 size-5" aria-hidden="true" />} />
          </li>
          {mainNav.map((item) => (
            <li key={item.label} className="h-full">
              {item.children ? (
                <NavDropdown label={item.label} items={item.children} className={itemClass} />
              ) : (
                <Link href={item.href} className={itemClass}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button type="button" className={itemClass} aria-label="Select country: Bangladesh">
          <BangladeshFlag />
          <span className="ml-1.5">BD</span>
          <ChevronDown className="size-4" aria-hidden="true" />
        </button>
      </Container>
    </nav>
  )
}

function BangladeshFlag() {
  return (
    <svg viewBox="0 0 20 14" className="h-3.5 w-5 rounded-[2px] border border-white" aria-hidden="true">
      <rect width="20" height="14" fill="#006a4e" />
      <circle cx="9" cy="7" r="4" fill="#f42a41" />
    </svg>
  )
}
