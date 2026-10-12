import Image from 'next/image'
import { CardShell } from '@/components/shared/card-shell'
import { OutlineLink } from '@/components/shared/outline-link'
import type { Comparison } from '@/lib/types'

export function CompareCard({ comparison }: { comparison: Comparison }) {
  const { left, right } = comparison

  return (
    <CardShell className="flex w-full flex-col items-center px-1.5 pb-2 pt-2 md:px-4 md:pb-4 md:pt-3">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-0.5 md:gap-2">
        <ComparePhone name={left.shortName} image={left.image} />
        <span className="flex size-5 items-center justify-center rounded-full border border-border bg-card text-[8px] font-bold text-card-foreground shadow-sm md:-mt-6 md:size-9 md:text-[13px]">
          VS
        </span>
        <ComparePhone name={right.shortName} image={right.image} />
      </div>

      <p className="mt-1.5 flex w-full items-center justify-center gap-1 text-[8px] font-medium text-card-foreground md:hidden">
        <span className="truncate">{left.shortName}</span>
        <span className="shrink-0">VS</span>
        <span className="truncate">{right.shortName}</span>
      </p>

      <OutlineLink
        href={`/compare/${comparison.slug}`}
        className="mt-1.5 h-[18px] w-[82%] rounded-[3px] px-1 text-[9px] md:mt-3 md:h-[30px] md:w-full md:max-w-[150px] md:rounded-sm md:px-4 md:text-xs"
      >
        Compare
        <span className="sr-only">{` ${left.shortName} vs ${right.shortName}`}</span>
      </OutlineLink>
    </CardShell>
  )
}

function ComparePhone({ name, image }: { name: string; image: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-10 w-full md:h-20">
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          fill
          sizes="(min-width: 768px) 100px, 15vw"
          className="object-contain mix-blend-multiply dark:mix-blend-normal"
        />
      </div>
      <p className="mt-2 hidden line-clamp-1 text-[11px] font-medium text-card-foreground md:block">{name}</p>
    </div>
  )
}
