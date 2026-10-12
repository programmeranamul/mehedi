export type Phone = {
  id: string
  slug: string
  name: string
  shortName: string
  brandSlug: string
  price: number
  image: string
}

export type Brand = {
  id: string
  slug: string
  name: string
  logo: string | null
}

export type Comparison = {
  id: string
  slug: string
  left: Pick<Phone, 'slug' | 'shortName' | 'image'>
  right: Pick<Phone, 'slug' | 'shortName' | 'image'>
}

export type ArticleCategory = 'news' | 'review' | 'tips'

export type Article = {
  id: string
  slug: string
  title: string
  category: ArticleCategory
  publishedAt: string
  image: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export type FooterColumn = {
  title: string
  links: NavItem[]
}

export type PhoneFilter = {
  minPrice: number
  maxPrice: number
  type?: string
  category?: string
  brand?: string
}
