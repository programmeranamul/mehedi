import Link from 'next/link'
import { cn } from '@/lib/utils'

export function OutlineLink({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        'inline-flex h-[30px] items-center justify-center rounded-sm border border-primary/60 bg-card px-4 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground',
        className,
      )}
      {...props}
    />
  )
}
