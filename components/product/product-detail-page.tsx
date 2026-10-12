'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronRight, Gift, Heart, Plus, ShoppingCart, Star, Truck, ShieldCheck, RotateCcw, Headphones, CreditCard, Smartphone, Battery, Cpu, Wifi, Camera, Clock3 } from 'lucide-react'
import { SiteHeader } from '@/components/layout/site-header'
import { BottomNav } from '@/components/layout/bottom-nav'
import { Container } from '@/components/layout/container'
import { phones } from '@/lib/data/mock'
import { formatPrice } from '@/lib/format'

const phone = phones[0]
const features = [
  ['Display', '6.5” Super AMOLED', Smartphone], ['Battery', '5000mAh', Battery],
  ['RAM', '4GB', Smartphone], ['Charger', '25W Fast Charging', Plus],
  ['Storage', '128GB', Smartphone], ['Processor', 'MediaTek Helio G99', Cpu],
  ['Rear Camera', '50MP + 5MP + 2MP', Camera], ['Network', '4G', Wifi],
  ['Front Camera', '13MP', Camera], ['OS', 'Android 14, One UI 6', Clock3],
]
const gallery = [phone.image, phone.image, phone.image, phone.image]

function FeatureItem({ label, value, Icon }: { label: string; value: string; Icon: typeof Smartphone }) {
  return <div className="flex min-w-0 items-center gap-2 text-[12px] text-muted-foreground"><Icon className="size-4 shrink-0 text-foreground/70" strokeWidth={1.7} /><span><b className="font-medium text-foreground">{label}:</b> {value}</span></div>
}

export function ProductDetailPage() {
  return <div className="min-h-screen bg-background pb-24 md:pb-8">
    <SiteHeader />
    <main>
      <Container className="pt-3 md:pt-6">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 overflow-hidden whitespace-nowrap text-[12px] text-muted-foreground md:text-sm">
          <Link href="/">Home</Link><ChevronRight className="size-3" /><span>Smartphones</span><ChevronRight className="size-3" /><span>Samsung</span><ChevronRight className="size-3" /><b className="truncate text-foreground">Samsung Galaxy A15 (4G)</b>
        </nav>

        <section className="grid gap-5 md:grid-cols-[1fr_1fr] md:gap-10">
          <div>
            <div className="relative flex aspect-square items-center justify-center rounded-xl border bg-card p-5 md:max-w-[520px]">
              <Image src={phone.image} alt={phone.name} fill sizes="(min-width: 768px) 50vw, 90vw" className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal" priority />
              <button aria-label="Add to wishlist" className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground"><Heart className="size-6" /></button>
              <span className="absolute bottom-3 right-3 rounded-md bg-black/35 px-2 py-1 text-xs text-white">1/7</span>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {gallery.map((image, index) => <button key={`${image}-${index}`} aria-label={`View image ${index + 1}`} className={`relative aspect-square rounded-md border bg-card p-1 ${index === 0 ? 'border-primary ring-1 ring-primary' : ''}`}><Image src={image} alt="" fill sizes="64px" className="object-contain p-1" />{index === 3 && <span className="absolute inset-0 flex items-center justify-center bg-background/80 text-sm">+3</span>}</button>)}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Samsung</p>
            <h1 className="mt-2 text-2xl font-semibold leading-tight md:text-4xl">Samsung Galaxy A15 (4G)</h1>
            <div className="mt-3 flex items-center gap-2 text-sm"><Star className="size-4 fill-amber-400 text-amber-400" /> 4.6 <Link href="#reviews" className="text-primary">(324 reviews)</Link></div>
            <div className="mt-5 flex items-center gap-3"><span className="text-2xl font-bold text-price md:text-3xl">{formatPrice(phone.price)}</span><span className="rounded bg-red-50 px-2 py-1 text-sm font-semibold text-red-500">-13%</span></div>
            <p className="mt-1 text-sm text-muted-foreground line-through">৳ 23,999</p>
            <div className="mt-5 grid gap-3 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Gift className="size-5 text-emerald-600" /> Cashback: ৳ 500</span><span className="flex items-center gap-2"><ShieldCheck className="size-5 text-foreground/70" /> Official Warranty: 1 Year</span><span className="flex items-center gap-2"><Truck className="size-5 text-foreground/70" /> Delivery: 1-3 Days (Inside Dhaka)</span><span className="font-medium text-emerald-600">● &nbsp;In Stock</span></div>
            <div className="mt-6 grid gap-2"><button className="flex h-11 items-center justify-center gap-2 rounded-md bg-primary font-medium text-primary-foreground"><ShoppingCart className="size-5" /> Add to Cart</button><button className="h-11 rounded-md border border-primary font-medium text-primary">Buy Now</button></div>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-4">
          {[[ShieldCheck,'100% Authentic','Official Products'],[RotateCcw,'7 Days Return','Easy Return Policy'],[Headphones,'Fast Support','24/7 Customer Support'],[CreditCard,'EMI Available','Easy Installments']].map(([Icon, title, sub]) => <div key={title as string} className="bg-card px-2 py-5 text-center"><Icon className="mx-auto size-7 text-primary" /><p className="mt-2 text-xs font-semibold">{title as string}</p><p className="text-[11px] text-muted-foreground">{sub as string}</p></div>)}
        </section>

        <section className="mt-5 rounded-xl border bg-card p-4 md:p-6"><h2 className="text-base font-semibold">Key Features</h2><div className="mt-4 grid gap-3 md:grid-cols-2">{features.map(([label, value, Icon]) => <FeatureItem key={label as string} label={label as string} value={value as string} Icon={Icon as typeof Smartphone} />)}</div></section>

        <section className="mt-5 rounded-xl border bg-card p-4 md:p-6"><h2 className="text-sm font-semibold">Select Variant</h2><p className="mt-4 text-xs font-medium">RAM</p><div className="mt-2 flex gap-3">{['4GB','6GB','8GB'].map((item, i) => <button key={item} className={`rounded-md border px-4 py-2 text-sm ${i === 0 ? 'border-primary text-primary' : 'text-muted-foreground'}`}>{item}</button>)}</div><p className="mt-4 text-xs font-medium">Storage</p><div className="mt-2 flex gap-3"><button className="rounded-md border border-primary px-4 py-2 text-sm text-primary">128GB</button><button className="rounded-md border px-4 py-2 text-sm text-muted-foreground">256GB</button></div><p className="mt-5 text-xs font-medium">Color: Light Blue</p><div className="mt-2 flex gap-5">{[['Light Blue','bg-sky-100'],['Dark Blue','bg-blue-950'],['Yellow','bg-yellow-300'],['Black','bg-black']].map(([name, color], i) => <button key={name} className={`flex flex-col items-center gap-1 rounded-md p-2 text-[11px] ${i === 0 ? 'border border-primary' : ''}`}><span className={`size-7 rounded-full ${color}`} />{name}</button>)}</div></section>

        <section className="mt-5 rounded-xl border bg-card p-4 md:p-6"><h2 className="text-base font-semibold">Product Description</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">Samsung Galaxy A15 (4G) features a 6.5-inch Super AMOLED display, 50MP triple rear camera, 5000mAh battery with 25W fast charging and powerful performance with MediaTek Helio G99 processor.</p><button className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">View More <ChevronDown className="size-4" /></button></section>
      </Container>
    </main>
    <BottomNav />
  </div>
}

