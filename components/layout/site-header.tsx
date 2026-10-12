import Link from 'next/link'
import { Bell, Heart, Menu, Scale, Search } from 'lucide-react'
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
}

const mobileIconClass =
  'flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted'

export function SiteHeader({ compareCount = 0, wishlistCount = 0 }: SiteHeaderProps) {
  return (
    <header>
      <div className="bg-background">
        <Container className="flex items-center gap-2.5 pt-3 md:h-[86px] md:gap-8 md:pt-0">
          <MobileMenu triggerLabel="Open menu" triggerClassName={`${mobileIconClass} -ml-1.5 md:hidden`}>
            <Menu className="size-7" strokeWidth={1.75} aria-hidden="true" />
          </MobileMenu>

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
            <label htmlFor="mobile-search" className={`${mobileIconClass} cursor-pointer`}>
              <Search className="size-6" strokeWidth={1.75} aria-hidden="true" />
              <span className="sr-only">Focus search</span>
            </label>
            <Link href="/notifications" className={mobileIconClass}>
              <Bell className="size-6" strokeWidth={1.75} aria-hidden="true" />
              <span className="sr-only">Notifications</span>
            </Link>
          </div>
        </Container>

        <Container className="pb-3 pt-3 md:hidden">
          <HeaderSearch id="mobile-search" variant="pill" placeholder="Search mobile, brand, model..." />
        </Container>
      </div>
      <MainNav />
    </header>
  )
}
