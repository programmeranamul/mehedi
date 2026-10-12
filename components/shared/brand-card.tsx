import Link from 'next/link'
import type { Brand } from '@/lib/types'
import { cn } from '@/lib/utils'

/** Circular avatar + label on mobile, logo tile from `md`. */
export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="flex w-full flex-col items-center gap-1 md:h-[72px] md:justify-center md:rounded-md md:border md:border-border md:bg-card md:px-3 md:shadow-[0_1px_4px_rgba(15,23,42,0.06)] md:transition-shadow md:hover:shadow-md md:dark:bg-white"
    >
      <BrandAvatar brand={brand} className="md:hidden" />
      <span className="text-[10px] font-medium text-foreground md:hidden">{brand.name}</span>
      <span className="hidden md:contents">
        <BrandLogo brand={brand} />
      </span>
    </Link>
  )
}

const avatarStyles: Record<string, { bg: string; content: (brand: Brand) => React.ReactNode }> = {
  samsung: {
    bg: 'bg-[#1428a0]',
    content: (b) => <img src={b.logo! || '/placeholder.svg'} alt="" className="w-[84%] brightness-0 invert" />,
  },
  xiaomi: {
    bg: 'bg-[#ff6900]',
    content: (b) => <img src={b.logo! || '/placeholder.svg'} alt="" className="w-[62%]" />,
  },
  realme: {
    bg: 'bg-[#ffc915]',
    content: () => <span className="text-[19px] font-normal leading-none text-[#111]">R</span>,
  },
  infinix: {
    bg: 'bg-[#111]',
    content: () => <span className="text-[8px] font-bold tracking-tight text-white">Infinix</span>,
  },
  vivo: {
    bg: 'bg-[#415fff]',
    content: (b) => <img src={b.logo! || '/placeholder.svg'} alt="" className="w-[70%] brightness-0 invert" />,
  },
  oppo: {
    bg: 'bg-[#1e9b45]',
    content: (b) => <img src={b.logo! || '/placeholder.svg'} alt="" className="w-[72%] brightness-0 invert" />,
  },
  tecno: {
    bg: 'bg-[#0050ff]',
    content: (b) => <img src={b.logo! || '/placeholder.svg'} alt="" className="w-[72%] brightness-0 invert" />,
  },
  apple: {
    bg: 'bg-[#ececec]',
    content: (b) => <img src={b.logo! || '/placeholder.svg'} alt="" className="w-[46%]" />,
  },
}

function BrandAvatar({ brand, className }: { brand: Brand; className?: string }) {
  const style = avatarStyles[brand.slug]

  return (
    <span
      className={cn(
        'flex size-[34px] items-center justify-center overflow-hidden rounded-full shadow-sm',
        style?.bg ?? 'bg-primary',
        className,
      )}
      aria-hidden="true"
    >
      {style ? style.content(brand) : <span className="text-sm font-bold text-white">{brand.name.charAt(0)}</span>}
    </span>
  )
}

function BrandLogo({ brand }: { brand: Brand }) {
  switch (brand.slug) {
    case 'samsung':
      return <img src={brand.logo! || '/placeholder.svg'} alt="Samsung" className="h-auto w-[86px]" />
    case 'xiaomi':
      return (
        <span className="flex items-center gap-1.5">
          <img src={brand.logo! || '/placeholder.svg'} alt="" className="size-7" />
          <span className="text-[15px] font-medium text-[#111]">xiaomi</span>
        </span>
      )
    case 'realme':
      return <span className="bg-[#ffc915] px-1.5 text-[22px] font-medium leading-tight text-[#111]">realme</span>
    case 'infinix':
      return <span className="text-[24px] font-bold tracking-tight text-[#111]">Infinix</span>
    case 'vivo':
      return <img src={brand.logo! || '/placeholder.svg'} alt="vivo" className="h-auto w-[74px]" />
    case 'oppo':
      return <img src={brand.logo! || '/placeholder.svg'} alt="oppo" className="h-auto w-[78px]" />
    case 'tecno':
      return <img src={brand.logo! || '/placeholder.svg'} alt="Tecno" className="h-auto w-[80px]" />
    case 'apple':
      return (
        <span className="flex items-center gap-1">
          <img src={brand.logo! || '/placeholder.svg'} alt="" className="size-6" />
          <span className="text-[19px] font-medium text-[#111]">Apple</span>
        </span>
      )
    default:
      return brand.logo ? (
        <img src={brand.logo || '/placeholder.svg'} alt={brand.name} className="h-auto max-h-8 w-auto max-w-[90px]" />
      ) : (
        <span className="text-lg font-bold text-[#111]">{brand.name}</span>
      )
  }
}
