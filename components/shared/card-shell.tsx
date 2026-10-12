import { cn } from '@/lib/utils'

export function CardShell({ className, ...props }: React.ComponentProps<'article'>) {
  return (
    <article
      className={cn('rounded-md border border-border bg-card shadow-[0_1px_4px_rgba(15,23,42,0.06)]', className)}
      {...props}
    />
  )
}
