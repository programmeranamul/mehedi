'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

type HeaderSearchProps = {
  id: string
  variant?: 'default' | 'pill'
  placeholder?: string
  className?: string
}

export function HeaderSearch({
  id,
  variant = 'default',
  placeholder = 'Search mobile phone, brand, model...',
  className,
}: HeaderSearchProps) {
  const router = useRouter()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const query = new FormData(event.currentTarget).get('q')?.toString().trim()
    if (query) router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  const label = (
    <label htmlFor={id} className="sr-only">
      Search mobile phone, brand, model
    </label>
  )

  if (variant === 'pill') {
    return (
      <form
        role="search"
        onSubmit={handleSubmit}
        className={cn(
          'flex h-[38px] w-full items-center rounded-full border border-input bg-background shadow-[0_1px_3px_rgba(15,23,42,0.06)] focus-within:border-primary',
          className,
        )}
      >
        {label}
        <Search className="ml-3 size-[18px] shrink-0 text-muted-foreground" aria-hidden="true" />
        <input
          id={id}
          name="q"
          type="search"
          placeholder={placeholder}
          className="h-full min-w-0 flex-1 bg-transparent px-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          type="submit"
          className="h-full shrink-0 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Search
        </button>
      </form>
    )
  }

  return (
    <form role="search" onSubmit={handleSubmit} className={cn('flex h-10 w-full', className)}>
      {label}
      <input
        id={id}
        name="q"
        type="search"
        placeholder={placeholder}
        className="h-full min-w-0 flex-1 rounded-l-md border border-r-0 border-input bg-background px-4 text-[13px] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
      <button
        type="submit"
        className="flex h-full w-10 shrink-0 items-center justify-center rounded-r-md bg-primary text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Search className="size-[18px]" aria-hidden="true" />
        <span className="sr-only">Search</span>
      </button>
    </form>
  )
}
