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
  MessageSquare,
  PlayCircle,
  Scale,
  Shield,
  Smartphone,
  Star,
  Tag,
  Users,
} from 'lucide-react'
import { Container } from '@/components/layout/container'
import { CardShell } from '@/components/shared/card-shell'

const activities = [
  { label: 'Wishlist', icon: Heart, color: 'text-violet-700 bg-violet-50', count: 5, href: '/wishlist' },
  { label: 'Comparisons', icon: Scale, color: 'text-emerald-700 bg-emerald-50', count: 2, href: '/compare' },
  { label: 'Saved News', icon: Bookmark, color: 'text-amber-500 bg-amber-50', count: 8, href: '/news/saved' },
  { label: 'Notifications', icon: Bell, color: 'text-blue-600 bg-blue-50', count: 3, href: '/notifications' },
]

const explore = [
  ['Phone Finder', 'Find phones by your needs', Smartphone, 'text-blue-600 bg-blue-50', '/finder'],
  ['Best Deals', 'Latest offers & discounts', Tag, 'text-emerald-600 bg-emerald-50', '/deals'],
  ['All Brands', 'Browse phones by brands', Users, 'text-violet-600 bg-violet-50', '/brands'],
  ['Upcoming Phones', 'Upcoming phones & leaks', CalendarDays, 'text-orange-500 bg-orange-50', '/phones/upcoming'],
  ['Phone Price List', 'Check latest phone prices', BarChart3, 'text-blue-600 bg-blue-50', '/phones/prices'],
  ['Top Rated Phones', 'Top phones by our users', Star, 'text-amber-500 bg-amber-50', '/phones/top-rated'],
  ['Reviews', 'In-depth phone reviews', MessageSquare, 'text-rose-500 bg-rose-50', '/reviews'],
  ['Videos', 'Unboxing & hands-on videos', PlayCircle, 'text-violet-600 bg-violet-50', '/videos'],
] as const

const information = [
  ['About TechMehedi', 'Learn more about us', Info, 'text-slate-600 bg-slate-100', '/about'],
  ['Contact Us', 'Get in touch with our team', Users, 'text-blue-600 bg-blue-50', '/contact'],
  ['Privacy Policy', 'Read our privacy policy', Shield, 'text-sky-600 bg-sky-50', '/privacy'],
  ['Terms & Conditions', 'Read our terms and conditions', FileText, 'text-violet-600 bg-violet-50', '/terms'],
] as const

function MoreLink({ item }: { item: (typeof explore)[number] | (typeof information)[number] }) {
  const [title, description, Icon, iconClass, href] = item
  return (
    <Link href={href} className="flex min-w-0 items-center gap-3 border-b border-border px-3 py-3.5 last:border-b-0">
      <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${iconClass}`}>
        <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[14px] font-semibold leading-5 text-foreground">{title}</span>
        <span className="block truncate text-[12px] leading-4 text-muted-foreground">{description}</span>
      </span>
      <ChevronRight className="size-5 shrink-0 text-muted-foreground" strokeWidth={1.6} aria-hidden="true" />
    </Link>
  )
}

export function MorePage() {
  return (
    <Container className="pb-5 pt-5 md:pt-8">
      <header className="mb-6">
        <h1 className="font-display text-[30px] font-semibold leading-9 text-foreground">More</h1>
        <p className="mt-1 text-[15px] text-muted-foreground">All features and options in one place</p>
      </header>

      <Link href="/finder" className="mb-7 block overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-[0_1px_4px_rgba(15,23,42,0.04)]">
        <div className="min-h-[282px] bg-[radial-gradient(circle_at_85%_50%,rgba(59,130,246,0.16),transparent_30%)] px-7 py-7">
          <h2 className="max-w-[250px] text-[20px] font-semibold leading-7">Find Your Perfect Phone</h2>
          <p className="mt-2 max-w-[260px] text-[15px] leading-6 text-muted-foreground">Use our smart tools to find the best phone that matches your needs.</p>
          <p className="mt-7 text-[21px] font-semibold">Powered by Tech Mehedi</p>
          <span className="mt-9 flex h-11 max-w-[306px] items-center justify-center rounded-lg bg-primary text-[15px] font-semibold text-primary-foreground">Start Finding <ChevronRight className="ml-2 size-5" /></span>
        </div>
      </Link>

      <section className="mb-7" aria-labelledby="activity-heading">
        <h2 id="activity-heading" className="mb-3 text-[17px] font-semibold">Your Activity</h2>
        <CardShell className="grid grid-cols-4 rounded-xl px-2 py-4">
          {activities.map(({ label, icon: Icon, color, count, href }) => (
            <Link key={label} href={href} className="relative flex flex-col items-center gap-2 text-center">
              <span className={`relative flex size-12 items-center justify-center rounded-full ${color}`}>
                <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">{count}</span>
              </span>
              <span className="text-[12px] font-medium">{label}</span>
            </Link>
          ))}
        </CardShell>
      </section>

      <section className="mb-7" aria-labelledby="explore-heading">
        <h2 id="explore-heading" className="mb-3 text-[17px] font-semibold">Explore</h2>
        <CardShell className="grid grid-cols-2 overflow-hidden rounded-xl">
          {explore.map((item) => <MoreLink key={item[0]} item={item} />)}
        </CardShell>
      </section>

      <section aria-labelledby="information-heading">
        <h2 id="information-heading" className="mb-3 text-[17px] font-semibold">Information</h2>
        <CardShell className="overflow-hidden rounded-xl">
          {information.map((item) => <MoreLink key={item[0]} item={item} />)}
        </CardShell>
      </section>
    </Container>
  )
}

export default MorePage
