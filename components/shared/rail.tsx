import { Children } from 'react'
import { cn } from '@/lib/utils'

type RailProps = {
  children: React.ReactNode
  /** Desktop grid columns and gaps, e.g. "md:grid-cols-3 lg:grid-cols-6 md:gap-2". */
  className?: string
  /** Mobile item width, e.g. "w-[22vw] min-w-[84px]". */
  itemClassName?: string
}

/** Horizontally scrolling row on mobile that becomes a grid from the `md` breakpoint. */
export function Rail({ children, className, itemClassName }: RailProps) {
  return (
    <div
      className={cn(
        '-mx-3.5 flex snap-x gap-2.5 overflow-x-auto scroll-px-3.5 px-3.5 pb-1.5 pt-px [scrollbar-width:none] md:mx-0 md:grid md:snap-none md:overflow-visible md:p-0 [&::-webkit-scrollbar]:hidden',
        className,
      )}
    >
      {Children.map(children, (child) => (
        <div className={cn('flex shrink-0 snap-start md:w-auto md:min-w-0', itemClassName)}>{child}</div>
      ))}
    </div>
  )
}
