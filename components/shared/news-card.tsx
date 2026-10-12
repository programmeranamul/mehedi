import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { CardShell } from '@/components/shared/card-shell'
import { formatDate } from '@/lib/format'
import type { Article, ArticleCategory } from '@/lib/types'
import { cn } from '@/lib/utils'

const categoryStyles: Record<ArticleCategory, string> = {
  news: 'text-primary',
  review: 'text-price',
  tips: 'text-primary',
}

/** Row layout on mobile (inside a NewsList), stacked card from `md`. */
export function NewsCard({ article }: { article: Article }) {
  const href = `/news/${article.slug}`

  return (
    <CardShell className="group relative flex items-center gap-3 rounded-none border-0 bg-transparent py-1.5 shadow-none md:flex-col md:items-stretch md:gap-0 md:overflow-hidden md:rounded-md md:border md:bg-card md:py-0 md:shadow-[0_1px_4px_rgba(15,23,42,0.06)]">
      <Link
        href={href}
        className="relative block aspect-[230/86] w-[34%] shrink-0 overflow-hidden rounded-md md:aspect-[230/106] md:w-full md:rounded-none"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={article.image || '/placeholder.svg'}
          alt=""
          fill
          sizes="(min-width: 1024px) 240px, (min-width: 768px) 50vw, 34vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col md:px-3 md:pb-3 md:pt-2.5">
        <div className="contents md:flex md:items-center md:justify-between md:text-[10px]">
          <span className={cn('text-[9px] font-semibold uppercase md:text-[10px]', categoryStyles[article.category])}>
            {article.category}
          </span>
          <time
            dateTime={article.publishedAt}
            className="order-last mt-1 text-[9px] text-muted-foreground md:order-none md:mt-0 md:text-[10px]"
          >
            {formatDate(article.publishedAt)}
          </time>
        </div>
        <h3 className="mt-0.5 line-clamp-2 text-xs font-semibold leading-[15px] text-card-foreground md:mt-2 md:text-sm md:leading-5">
          <Link href={href} className="after:absolute after:inset-0 hover:text-primary md:after:hidden">
            {article.title}
          </Link>
        </h3>
        <Link
          href={href}
          className="mt-2 hidden w-fit items-center gap-0.5 text-[10px] font-medium text-primary hover:opacity-80 md:flex"
        >
          Read More
          <ChevronRight className="size-3" aria-hidden="true" />
          <span className="sr-only">{`: ${article.title}`}</span>
        </Link>
      </div>

      <ChevronRight className="mr-1 size-4 shrink-0 text-muted-foreground md:hidden" aria-hidden="true" />
    </CardShell>
  )
}
