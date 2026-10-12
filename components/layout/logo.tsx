import Link from 'next/link'
import { Smartphone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

type LogoProps = {
  variant?: 'default' | 'light'
  size?: 'md' | 'sm'
  showTagline?: boolean
  className?: string
}

export function Logo({ variant = 'default', size = 'md', showTagline = true, className }: LogoProps) {
  const isLight = variant === 'light'
  const isSmall = size === 'sm'

  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className={cn('flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'flex shrink-0 items-center justify-center rounded-md',
          isSmall ? 'size-5 border border-white' : 'size-[30px] bg-primary text-primary-foreground md:size-[42px]',
        )}
      >
        <Smartphone
          className={isSmall ? 'size-3.5 text-white' : 'size-5 md:size-7'}
          strokeWidth={isSmall ? 2 : 1.75}
          aria-hidden="true"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-bold tracking-tight',
            isSmall ? 'text-base' : 'text-[25px] md:text-[32px]',
            isLight ? 'text-white' : 'text-foreground',
          )}
        >
          Tech<span className="text-primary">Mehedi</span>
        </span>
        {showTagline && !isSmall && (
          <span className="mt-1 hidden text-[13px] text-muted-foreground md:block">{siteConfig.tagline}</span>
        )}
      </span>
    </Link>
  )
}
