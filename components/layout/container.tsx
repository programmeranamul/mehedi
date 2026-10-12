import { cn } from '@/lib/utils'

export function Container({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[1280px] px-3.5 md:px-5', className)} {...props} />
}
