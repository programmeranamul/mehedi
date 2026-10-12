'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, Bell, Ellipsis, Heart, Menu, Scale, Search, ShoppingCart } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { HeaderAction } from '@/components/layout/header-action'
import { HeaderSearch } from '@/components/layout/header-search'
import { Logo } from '@/components/layout/logo'
import { MainNav } from '@/components/layout/main-nav'
import { MobileMenu } from '@/components/layout/mobile-menu'
import { ThemeToggle } from '@/components/layout/theme-toggle'

type SiteHeaderProps = {
  compareCount?: number
  wishlistCount?: number
  compactMobile?: boolean
}

const mobileIconClass =
  'flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted'

export function SiteHeader({ compareCount = 0, wishlistCount = 0, compactMobile = false }: SiteHeaderProps) {
  const pathname = usePathname()
  const isMorePage = compactMobile || pathname.startsWith('/more')
  const isNewsPage = pathname.startsWith('/news')
  const isComparePage = pathname.startsWith('/compare')
  const isProductPage = pathname.startsWith('/phones/')
  const isCompactHeader = isMorePage || isNewsPage || isComparePage || isProductPage

  return (
    <header>
      <div className="bg-background">
        <Container className="flex items-center gap-2.5 pt-3 md:h-[86px] md:gap-8 md:pt-0">
          {(isComparePage || isProductPage) && <Link href={isProductPage ? '/phones' : '/'} aria-label="Back" className={`${mobileIconClass} -ml-1.5 md:hidden`}><ArrowLeft className="size-7" strokeWidth={1.8} /></Link>}
          {!isCompactHeader && <MobileMenu triggerLabel="Open menu" triggerClassName={`${mobileIconClass} -ml-1.5 md:hidden`}>
            <Menu className="size-7" strokeWidth={1.75} aria-hidden="true" />
          </MobileMenu>}

          <Logo />

          <div className="hidden md:block md:max-w-[388px] md:flex-1 lg:ml-12">
            <HeaderSearch id="site-search" />
          </div>

          <div className="ml-auto hidden items-center gap-5 md:flex lg:gap-6">
            <HeaderAction href="/compare" label="Compare" count={compareCount} icon={Scale} />
            <HeaderAction href="/wishlist" label="Wishlist" count={wishlistCount} icon={Heart} />
            <ThemeToggle />
          </div>

          <div className="-mr-1.5 ml-auto flex items-center gap-1 md:hidden">
            {!isMorePage && <label htmlFor="mobile-search" className={`${mobileIconClass} cursor-pointer`}>
              <Search className="size-6" strokeWidth={1.75} aria-hidden="true" />
              <span className="sr-only">Focus search</span>
            </label>}
            <Link href={(isComparePage || isProductPage) ? '/compare' : '/notifications'} className={`${mobileIconClass} relative`}>
              {(isComparePage || isProductPage) ? <ShoppingCart className="size-6" strokeWidth={1.75} aria-hidden="true" /> : <Bell className="size-6" strokeWidth={1.75} aria-hidden="true" />}
              {!isMorePage && !isComparePage && <span className="sr-only">Notifications</span>}
              {(isMorePage || isComparePage || isProductPage) && <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">2</span>}
            </Link>
            {isMorePage && <Link href="/more" aria-label="More options" className={mobileIconClass}>
              <Ellipsis className="size-6" strokeWidth={2} aria-hidden="true" />
            </Link>}
          </div>
        </Container>

        {!isCompactHeader && <Container className="pb-3 pt-3 md:hidden">
          <HeaderSearch id="mobile-search" variant="pill" placeholder="Search mobile, brand, model..." />
        </Container>}
      </div>
      <MainNav />
    </header>
  )
}
