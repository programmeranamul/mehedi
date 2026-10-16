'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, GraduationCap, Gamepad2, Grid2X2, Leaf, Palette, Search, Tag, Wrench } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/shared/section'
import { cn } from '@/lib/utils'

const laptops = [
  { name: 'MacBook Air M2', specs: '13.6” | 8GB | 256GB', price: '89,999', image: '/images/laptops/macbook-air-m2.png' },
  { name: 'ASUS TUF Gaming F15', specs: '15.6” | 16GB | 512GB', price: '94,999', image: '/images/laptops/asus-tuf-f15.png' },
  { name: 'HP Pavilion 15', specs: '15.6” | 8GB | 512GB', price: '72,999', image: '/images/laptops/hp-pavilion-15.png' },
]
const categories = [
  ['All Laptops', Grid2X2, 'bg-blue-50 text-blue-600'], ['Gaming', Gamepad2, 'bg-violet-50 text-violet-600'], ['Business', BriefcaseBusiness, 'bg-emerald-50 text-emerald-600'], ['Student', GraduationCap, 'bg-amber-50 text-amber-600'], ['Creator', Palette, 'bg-pink-50 text-pink-600'], ['Ultrabook', Leaf, 'bg-cyan-50 text-cyan-600'],
] as const
const brands = ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Apple']

function LaptopCard({ laptop }: { laptop: typeof laptops[number] }) {
  return <article className="min-w-[238px] rounded-2xl border border-blue-100 bg-card p-4 shadow-[0_2px_10px_rgba(37,99,235,.08)] md:min-w-0"><div className="relative h-32"><Image src={laptop.image} alt={laptop.name} fill sizes="240px" className="object-contain" /><span className="absolute right-0 top-0 text-2xl text-slate-400">♡</span></div><h3 className="mt-2 text-base font-semibold text-[#0d2b67]">{laptop.name}</h3><p className="mt-1 text-sm text-[#6680b3]">{laptop.specs}</p><p className="mt-3 text-xl font-bold text-red-600">৳ {laptop.price}</p><Link href="/phones/samsung-galaxy-a15" className="mt-3 flex h-10 items-center justify-center rounded-lg border border-blue-500 text-sm font-semibold text-blue-600">View Details</Link></article>
}

export function LaptopsPage() {
  return <main className="bg-[#f8fbff] pb-20 text-[#092963]">
    <Container className="pt-3 md:pt-8"><section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#071d58] via-[#06448e] to-[#071b57] p-5 text-white md:min-h-[380px] md:p-10"><div className="relative z-10 max-w-[470px]"><span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold">Find Your Perfect Laptop</span><h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">Find the Right <span className="text-blue-400">Laptop</span><br />for You</h1><p className="mt-3 text-sm leading-6 text-blue-50 md:text-lg">Filter by category, budget and brand to discover the best laptops that fit your needs.</p></div><Image src="/images/laptops/hero-laptop.png" alt="Open laptop" fill priority sizes="(min-width: 768px) 70vw, 100vw" className="object-cover object-right opacity-90" /><div className="relative z-10 mt-5 grid grid-cols-1 gap-3 md:mt-10 md:grid-cols-3"><Filter icon={Grid2X2} label="Category" value="All Categories" /><Filter icon={Wrench} label="Budget" value="All Budgets" /><Filter icon={Tag} label="Brand" value="All Brands" /></div><button className="relative z-10 mt-3 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 font-semibold"><Search className="size-5" /> Find Laptops <ArrowRight className="size-5" /></button></section></Container>
    <Container className="mt-4"><nav className="grid grid-cols-3 gap-2 rounded-2xl border border-blue-100 bg-white p-2 sm:grid-cols-6">{categories.map(([label, Icon, color]) => <Link key={label} href="/laptops" className="flex flex-col items-center gap-2 rounded-xl py-3 text-center text-xs font-semibold md:text-sm"><span className={cn('flex size-12 items-center justify-center rounded-full', color)}><Icon className="size-6" /></span>{label}</Link>)}</nav></Container>
    <Section title="Popular Laptops" viewAllHref="/laptops" className="pt-6"><div className="flex snap-x gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3">{laptops.map((laptop) => <LaptopCard key={laptop.name} laptop={laptop} />)}</div></Section>
    <Section title="Shop by Brand" viewAllHref="/brands" className="pt-5"><div className="grid grid-cols-3 gap-5 sm:grid-cols-6">{brands.map((brand, index) => <Link key={brand} href="/laptops" className="flex flex-col items-center gap-2 text-sm font-semibold"><span className={cn('flex size-16 items-center justify-center rounded-full text-lg font-bold text-white', ['bg-blue-700','bg-sky-500','bg-red-600','bg-slate-800','bg-lime-500','bg-slate-200 text-slate-900'][index])}>{brand === 'Apple' ? '●' : brand.slice(0, 2)}</span>{brand}</Link>)}</div></Section>
    <Section title="Compare Laptops" viewAllHref="/compare" className="pt-7"><div className="grid gap-4 md:grid-cols-3">{laptops.map((laptop, index) => <div key={laptop.name} className="rounded-2xl border border-blue-100 bg-white p-4"><div className="flex items-center justify-between"><Image src={laptop.image} alt="" width={105} height={62} className="object-contain" /><span className="font-bold text-blue-600">VS</span><Image src={laptops[(index + 1) % laptops.length].image} alt="" width={105} height={62} className="object-contain" /></div><button className="mt-4 h-10 w-full rounded-lg border border-blue-500 font-semibold text-blue-600">Compare</button></div>)}</div></Section>
    <Section title="Latest News & Reviews" viewAllHref="/news" className="pt-7"><div className="grid gap-3 rounded-2xl border border-blue-100 bg-white p-3 md:grid-cols-2"><NewsRow title="MacBook Air M2 Review: Still a Great Choice in 2024?" image="/images/laptops/macbook-air-m2.png" type="REVIEW" date="May 24, 2024" /><NewsRow title="ASUS ROG Strix G16 Launched in Bangladesh" image="/images/laptops/asus-tuf-f15.png" type="NEWS" date="May 22, 2024" /></div></Section>
  </main>
}

function Filter({ icon: Icon, label, value }: { icon: typeof Grid2X2; label: string; value: string }) { return <button className="flex items-center gap-3 rounded-xl bg-white p-4 text-left text-[#0d2b67]"><Icon className="size-6 text-blue-600" /><span className="flex-1"><strong className="block text-sm">{label}</strong><small className="text-slate-500">{value}</small></span><Chevron /></button> }
function Chevron() { return <span aria-hidden="true">⌄</span> }
function NewsRow({ title, image, type, date }: { title: string; image: string; type: string; date: string }) { return <article className="flex items-center gap-3 border-b border-blue-50 pb-3 last:border-0 last:pb-0"><Image src={image} alt="" width={150} height={80} className="h-20 w-32 rounded-xl object-cover" /><div><span className="text-xs font-bold text-blue-500">{type}</span><h3 className="text-sm font-semibold text-[#0d2b67]">{title}</h3><p className="text-xs text-slate-500">{date}</p></div><ArrowRight className="ml-auto size-5 shrink-0 text-slate-400" /></article> }
