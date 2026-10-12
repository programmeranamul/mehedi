'use client'

import Link from 'next/link'
import {
  BarChart3,
  Bell,
  Bookmark,
  CalendarDays,
  ChevronRight,
  FileText,
  Heart,
  Info,
  MessageSquareText,
  PlayCircle,
  Scale,
  Shield,
  Smartphone,
  Star,
  Tag,
  UsersRound,
} from 'lucide-react'
import { Container } from '@/components/layout/container'

type MoreItem = {
  label: string
  description: string
  href: string
  icon: typeof Smartphone
  tone: string
}

const activity = [
  { label: 'Wishlist', href: '/wishlist', icon: Heart, count: 5, tone: 'bg-[#f2eafe] text-[#6935c5]' },
  { label: 'Comparisons', href: '/compare', icon: Scale, count: 2, tone: 'bg-[#e7f8ed] text-[#15945a]' },
  { label: 'Saved News', href: '/news/saved', icon: Bookmark, count: 8, tone: 'bg-[#fff7df] text-[#e9a916]' },
  { label: 'Notifications', href: '/notifications', icon: Bell, count: 3, tone: 'bg-[#eaf3ff] text-[#2872dc]' },
]

const explore: MoreItem[] = [
  { label: 'Phone Finder', description: 'Find phones by your needs', href: '/finder', icon: Smartphone, tone: 'bg-[#eaf3ff] text-[#2872dc]' },
  { label: 'Best Deals', description: 'Latest offers & discounts', href: '/deals', icon: Tag, tone: 'bg-[#e7f8ed] text-[#15945a]' },
  { label: 'All Brands', description: 'Browse phones by brands', href: '/brands', icon: UsersRound, tone: 'bg-[#f2eafe] text-[#6935c5]' },
  { label: 'Upcoming Phones', description: 'Upcoming phones & leaks', href: '/upcoming', icon: CalendarDays, tone: 'bg-[#fff0e8] text-[#ed7c2c]' },
  { label: 'Phone Price List', description: 'Check latest phone prices', href: '/phones', icon: BarChart3, tone: 'bg-[#eaf3ff] text-[#2872dc]' },
  { label: 'Top Rated Phones', description: 'Top phones by our users', href: '/top-rated', icon: Star, tone: 'bg-[#fff7df] text-[#e9a916]' },
  { label: 'Reviews', description: 'In-depth phone reviews', href: '/reviews', icon: MessageSquareText, tone: 'bg-[#ffecef] text-[#e14b68]' },
  { label: 'Videos', description: 'Unboxing & hands-on videos', href: '/videos', icon: PlayCircle, tone: 'bg-[#f2eafe] text-[#6935c5]' },
]

const information: MoreItem[] = [
  { label: 'About TechMehedi', description: 'Learn more about us', href: '/about', icon: Info, tone: 'bg-[#f1f3f5] text-[#59636f]' },
  { label: 'Contact Us', description: 'Get in touch with our team', href: '/contact', icon: UsersRound, tone: 'bg-[#eaf3ff] text-[#2872dc]' },
  { label: 'Privacy Policy', description: 'Read our privacy policy', href: '/privacy', icon: Shield, tone: 'bg-[#eaf3ff] text-[#2872dc]' },
  { label: 'Terms & Conditions', description: 'Read our terms and conditions', href: '/terms', icon: FileText, tone: 'bg-[#f2eafe] text-[#6935c5]' },
]

function MoreLink({ item }: { item: MoreItem }) {
  const Icon = item.icon
  return (
    <Link href={item.href} className="flex min-w-0 items-center gap-3 px-3 py-3.5 transition-colors hover:bg-muted/40">
      <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${item.tone}`}>
        <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[14px] font-semibold leading-5 text-foreground">{item.label}</span>
        <span className="block truncate text-[12px] leading-5 text-muted-foreground">{item.description}</span>
      </span>
      <ChevronRight className="size-5 shrink-0 text-muted-foreground" strokeWidth={1.6} aria-hidden="true" />
    </Link>
  )
}

export function MorePage() {
  return (
    <div className="min-h-full bg-[#fcfcfd] pb-6">
      <Container className="pt-5">
        <h1 className="text-[30px] font-semibold leading-9 tracking-[-0.04em]">More</h1>
        <p className="mt-1 text-[16px] text-muted-foreground">All features and options in one place</p>

        <Link href="/finder" className="relative mt-7 block min-h-[clamp(238px,75vw,284px)] overflow-hidden rounded-xl border border-[#dce6f4] bg-[#f1f5fd] px-[clamp(18px,7vw,28px)] py-[clamp(20px,7vw,28px)] shadow-sm">
          <div className="relative z-10 max-w-[clamp(180px,58vw,290px)]">
            <h2 className="text-[clamp(18px,5.4vw,21px)] font-semibold leading-7">Find Your Perfect Phone</h2>
            <p className="mt-2 text-[clamp(13px,4vw,16px)] leading-6 text-muted-foreground">Use our smart tools to find the best phone that matches your needs.</p>
            <p className="mt-5 text-[clamp(17px,5.4vw,21px)] font-medium text-foreground">Power by Tech Mehedi</p>
            <span className="mt-7 flex h-11 w-[clamp(170px,76vw,306px)] max-w-full items-center justify-center gap-4 rounded-lg bg-[#1768e5] text-[clamp(14px,4vw,16px)] font-medium text-white shadow-sm">Start Finding <ChevronRight className="size-5" /></span>
          </div>
          <img src="/images/phones/iphone-15.png" alt="Smartphone" className="absolute right-[clamp(6px,4vw,20px)] top-5 h-[clamp(130px,57vw,215px)] w-auto object-contain max-[340px]:hidden" />
        </Link>

        <section className="mt-7">
          <h2 className="mb-3 text-[18px] font-semibold">Your Activity</h2>
          <div className="grid grid-cols-4 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            {activity.map(({ label, href, icon: Icon, count, tone }) => (
              <Link key={label} href={href} className="relative flex min-w-0 flex-col items-center gap-2 px-1 py-5 text-center hover:bg-muted/30">
                <span className={`relative flex size-12 items-center justify-center rounded-full ${tone}`}><Icon className="size-7" strokeWidth={1.8} /><b className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-[#1768e5] text-[11px] font-semibold text-white">{count}</b></span>
                <span className="truncate text-[13px] font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h2 className="mb-3 text-[18px] font-semibold">Explore</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-2 divide-x divide-border">
              {explore.map((item, index) => <div key={item.label} className={index >= 2 ? 'border-t border-border' : ''}><MoreLink item={item} /></div>)}
            </div>
          </div>
        </section>

        <section className="mt-7">
          <h2 className="mb-3 text-[18px] font-semibold">Information</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            {information.map((item, index) => <div key={item.label} className={index ? 'border-t border-border' : ''}><MoreLink item={item} /></div>)}
          </div>
        </section>
      </Container>
    </div>
  )
}
