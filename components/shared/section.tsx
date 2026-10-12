import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { cn } from '@/lib/utils'

type SectionProps = {
  title: string
  viewAllHref?: string
  viewAllLabel?: string
  className?: string
  children: React.ReactNode
}

export function Section({ title, viewAllHref, viewAllLabel = 'View All', className, children }: SectionProps) {
  const headingId = `section-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <section aria-labelledby={headingId} className={cn('pt-[18px]', className)}>
      <Container>
        <div className="mb-2 flex items-center justify-between md:mb-3">
          <h2 id={headingId} className="text-[16px] font-bold text-foreground md:text-lg">
            {title}
          </h2>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="flex items-center gap-0.5 text-xs font-medium md:text-[13px] text-primary transition-opacity hover:opacity-80"
            >
              {viewAllLabel}
              <ChevronRight className="size-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
        {children}
      </Container>
    </section>
  )
}
