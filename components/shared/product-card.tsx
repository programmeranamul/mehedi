import Image from 'next/image'
import { Heart } from 'lucide-react'
import { CardShell } from '@/components/shared/card-shell'
import { OutlineLink } from '@/components/shared/outline-link'
import { formatPrice } from '@/lib/format'
import type { Phone } from '@/lib/types'

export function ProductCard({ phone, priority = false }: { phone: Phone; priority?: boolean }) {
  const [firstWord, ...restWords] = phone.name.split(' ')
  const breakAfterBrand = phone.name.length > 12 && restWords.length > 0

  return (
    <CardShell className="relative flex w-full flex-col px-1.5 pb-2 pt-1.5 md:items-center md:px-3 md:pb-4 md:pt-3 md:text-center">
      <button
        type="button"
        className="absolute right-1 top-1 z-10 flex size-5 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-price md:hidden"
      >
        <Heart className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
        <span className="sr-only">{`Add ${phone.name} to wishlist`}</span>
      </button>

      <div className="relative aspect-[162/122] w-full md:aspect-auto md:h-[124px]">
        <Image
          src={phone.image || '/placeholder.svg'}
          alt={phone.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 160px, (min-width: 768px) 30vw, 22vw"
          className="object-contain mix-blend-multiply dark:mix-blend-normal"
        />
      </div>

      <h3 className="mt-1.5 flex min-h-6 items-center text-[10px] font-medium leading-3 text-card-foreground md:mt-3 md:line-clamp-1 md:block md:min-h-0 md:text-[13px] md:leading-normal">
        <span>
          {breakAfterBrand ? (
            <>
              {firstWord}
              <br className="md:hidden" /> {restWords.join(' ')}
            </>
          ) : (
            phone.name
          )}
        </span>
      </h3>

      <p className="mt-1 text-xs font-bold text-price md:mt-3 md:text-[15px]">{formatPrice(phone.price)}</p>

      <OutlineLink
        href={`/phones/${phone.slug}`}
        className="mt-1.5 h-[18px] w-full rounded-[3px] px-1 text-[9px] md:mt-3 md:h-[30px] md:max-w-[116px] md:rounded-sm md:px-4 md:text-xs"
      >
        View Details
        <span className="sr-only">{` for ${phone.name}`}</span>
      </OutlineLink>
    </CardShell>
  )
}
