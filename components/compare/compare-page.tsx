import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Battery, Camera, Check, Cpu, Info, Network, Plus, Scale, Share2, ShoppingCart, Trash2, X, Zap } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { OutlineLink } from '@/components/shared/outline-link'
import { phones } from '@/lib/data/mock'

const compared = phones.slice(0, 3)

const rows = [
  { label: 'Display', icon: Info, section: true },
  ['Screen Size', '6.5 inches', '6.67 inches', '6.72 inches'],
  ['Display Type', 'Super AMOLED', 'AMOLED', 'IPS LCD'],
  ['Resolution', '1080 x 2340 pixels', '1080 x 2400 pixels', '1080 x 2400 pixels'],
  ['Refresh Rate', '90Hz', '120Hz', '90Hz'],
  { label: 'Performance', icon: Cpu, section: true },
  ['Processor', 'MediaTek Helio G99', 'Qualcomm Snapdragon 685', 'Qualcomm Snapdragon 685'],
  ['RAM', '4GB', '6GB', '6GB'],
  ['Storage', '128GB', '128GB', '128GB'],
  ['OS', 'Android 14, One UI 6', 'Android 14, MIUI 14', 'Android 14, realme UI 5.0'],
  { label: 'Camera', icon: Camera, section: true },
  ['Rear Camera', '50MP + 5MP + 2MP (Triple)', '108MP + 8MP + 2MP (Triple)', '108MP + 2MP (Dual)'],
  ['Front Camera', '13MP', '16MP', '8MP'],
  { label: 'Battery', icon: Battery, section: true },
  ['Battery Capacity', '5000mAh', '5000mAh', '5000mAh'],
  ['Charging', '25W Fast Charging', '33W Fast Charging', '33W Fast Charging'],
  ['USB Type', 'Type-C 2.0', 'Type-C 2.0', 'Type-C 2.0'],
  { label: 'Connectivity', icon: Network, section: true },
  ['Network', '4G LTE', '4G LTE', '4G LTE'],
  ['SIM', 'Dual SIM (Nano)', 'Dual SIM (Nano)', 'Dual SIM (Nano)'],
  ['Wi-Fi', 'Wi-Fi 802.11 a/b/g/n/ac', 'Wi-Fi 802.11 a/b/g/n/ac', 'Wi-Fi 802.11 a/b/g/n/ac'],
  ['Bluetooth', '5.3', '5.1', '5.1'],
  { label: 'Design', icon: Zap, section: true },
  ['Dimensions', '160.1 x 76.8 x 8.4 mm', '162.2 x 75.7 x 8.0 mm', '164.6 x 75.4 x 7.6 mm'],
  ['Weight', '200 g', '188.5 g', '185 g'],
  ['Colors', '●  ●  ●', '●  ●  ●', '●  ●  ●'],
] as const

export function ComparePage() {
  return (
    <div className="bg-background">
      <Container className="pt-5 md:pt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-[21px] font-semibold md:text-3xl">Compare Phones</h1>
            <p className="mt-1 text-sm text-muted-foreground md:text-base">Compare up to 3 phones</p>
          </div>
          <Link href="/phones" className="flex h-11 items-center gap-2 rounded-md border border-primary px-5 text-sm font-semibold text-primary hover:bg-primary/5">
            <Plus className="size-4" /> Add Phone
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 md:mt-8 md:gap-5">
          {compared.map((phone, index) => (
            <article key={phone.id} className="relative rounded-xl border bg-card px-2 pb-4 pt-3 shadow-sm md:px-5 md:pt-5">
              <span className="absolute left-2 top-2 flex size-6 items-center justify-center rounded bg-primary text-xs font-semibold text-primary-foreground md:left-4 md:top-4">{index + 1}</span>
              <button aria-label={`Remove ${phone.name}`} className="absolute right-2 top-2 rounded-full bg-muted p-0.5 text-muted-foreground md:right-4 md:top-4"><X className="size-4" /></button>
              <div className="mt-5 h-[120px] md:h-48"><Image src={phone.image} alt={phone.name} width={180} height={220} className="h-full w-full object-contain" /></div>
              <h2 className="mt-3 text-center text-[11px] font-semibold leading-4 md:text-base">{phone.name}{index === 0 && ' (4G)'}</h2>
              <p className="mt-1 text-center text-[10px] text-muted-foreground md:text-sm">{index === 0 ? '4GB RAM, 128GB' : '6GB RAM, 128GB'}</p>
              <p className="mt-3 text-center text-base font-bold text-destructive md:text-xl">৳ {phone.price.toLocaleString()}</p>
              <OutlineLink href={`/phones/${phone.slug}`} className="mx-auto mt-3 h-8 w-full text-[11px] md:h-10 md:text-sm">View Details</OutlineLink>
            </article>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border bg-card shadow-sm md:mt-7">
          <div className="grid grid-cols-[110px_repeat(3,minmax(105px,1fr))] text-[10px] md:grid-cols-[190px_repeat(3,1fr)] md:text-sm">
            <div className="bg-muted/40 p-3 font-semibold">Features</div>
            {compared.map((phone) => <div key={phone.id} className="border-l p-3 text-center font-semibold">{phone.name}</div>)}
            {rows.map((row, index) => 'section' in row ? (
              <div key={row.label} className="col-span-4 flex items-center gap-2 border-t bg-muted/30 px-3 py-2 font-semibold"><row.icon className="size-3.5" />{row.label}</div>
            ) : (
              row.map((cell, cellIndex) => <div key={`${index}-${cellIndex}`} className={`${cellIndex === 0 ? 'text-left font-medium' : 'border-l text-center'} border-t px-2 py-2 leading-4 md:px-3 md:py-3`}>{cell}</div>)
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 pb-5 md:mt-7 md:flex md:justify-end md:gap-4">
          <button className="flex h-12 items-center justify-center gap-1 rounded-lg border border-destructive px-2 text-xs font-semibold text-destructive md:w-36"><Trash2 className="size-4" />Clear All</button>
          <button className="flex h-12 items-center justify-center gap-1 rounded-lg border border-primary px-2 text-xs font-semibold text-primary md:w-52"><Share2 className="size-4" />Share Comparison</button>
          <button className="flex h-12 items-center justify-center gap-1 rounded-lg bg-primary px-2 text-xs font-semibold text-primary-foreground md:w-48"><Scale className="size-4" />Add to Compare</button>
        </div>
      </Container>
    </div>
  )
}

export function CompareHeaderIcon() {
  return <ShoppingCart className="size-6" strokeWidth={1.8} aria-hidden="true" />
}
