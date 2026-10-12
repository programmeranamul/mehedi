import type { Article, Brand, Comparison, Phone } from '@/lib/types'

export const phones: Phone[] = [
  { id: '1', slug: 'samsung-galaxy-a15', name: 'Samsung Galaxy A15', shortName: 'Samsung A15', brandSlug: 'samsung', price: 20999, image: '/images/phones/galaxy-a15.png' },
  { id: '2', slug: 'xiaomi-redmi-note-13', name: 'Xiaomi Redmi Note 13', shortName: 'Redmi Note 13', brandSlug: 'xiaomi', price: 22999, image: '/images/phones/redmi-note-13.png' },
  { id: '3', slug: 'realme-c67', name: 'Realme C67', shortName: 'Realme C67', brandSlug: 'realme', price: 18999, image: '/images/phones/realme-c67.png' },
  { id: '4', slug: 'infinix-hot-40', name: 'Infinix Hot 40', shortName: 'Infinix Hot 40', brandSlug: 'infinix', price: 15999, image: '/images/phones/infinix-hot-40.png' },
  { id: '5', slug: 'poco-x6-pro-5g', name: 'Poco X6 Pro 5G', shortName: 'Poco X6 Pro', brandSlug: 'xiaomi', price: 32999, image: '/images/phones/poco-x6-pro.png' },
  { id: '6', slug: 'iphone-15', name: 'iPhone 15', shortName: 'iPhone 15', brandSlug: 'apple', price: 124999, image: '/images/phones/iphone-15.png' },
  { id: '7', slug: 'oneplus-12r', name: 'OnePlus 12R', shortName: 'OnePlus 12R', brandSlug: 'oneplus', price: 64999, image: '/images/phones/oneplus-12r.png' },
  { id: '8', slug: 'samsung-galaxy-s23', name: 'Samsung Galaxy S23', shortName: 'Galaxy S23', brandSlug: 'samsung', price: 89999, image: '/images/phones/galaxy-s23.png' },
]

export const brands: Brand[] = [
  { id: '1', slug: 'samsung', name: 'Samsung', logo: '/brands/samsung.svg' },
  { id: '2', slug: 'xiaomi', name: 'Xiaomi', logo: '/brands/xiaomi.svg' },
  { id: '3', slug: 'realme', name: 'Realme', logo: null },
  { id: '4', slug: 'infinix', name: 'Infinix', logo: null },
  { id: '5', slug: 'vivo', name: 'vivo', logo: '/brands/vivo.svg' },
  { id: '6', slug: 'oppo', name: 'Oppo', logo: '/brands/oppo.svg' },
  { id: '7', slug: 'tecno', name: 'Tecno', logo: '/brands/tecno.svg' },
  { id: '8', slug: 'apple', name: 'Apple', logo: '/brands/apple.svg' },
]

const pick = (slug: string) => {
  const phone = phones.find((p) => p.slug === slug)!
  return { slug: phone.slug, shortName: phone.shortName, image: phone.image }
}

export const comparisons: Comparison[] = [
  { id: '1', slug: 'samsung-galaxy-a15-vs-xiaomi-redmi-note-13', left: pick('samsung-galaxy-a15'), right: pick('xiaomi-redmi-note-13') },
  { id: '2', slug: 'realme-c67-vs-infinix-hot-40', left: pick('realme-c67'), right: pick('infinix-hot-40') },
  { id: '3', slug: 'poco-x6-pro-5g-vs-oneplus-12r', left: pick('poco-x6-pro-5g'), right: pick('oneplus-12r') },
  { id: '4', slug: 'iphone-15-vs-samsung-galaxy-s23', left: pick('iphone-15'), right: pick('samsung-galaxy-s23') },
]

export const articles: Article[] = [
  { id: '1', slug: 'oneplus-nord-ce-4-lite-launched-in-bangladesh', title: 'OnePlus Nord CE 4 Lite Launched in Bangladesh', category: 'news', publishedAt: '2024-05-24', image: '/images/news/oneplus-nord.png' },
  { id: '2', slug: 'poco-x6-pro-5g-review', title: 'Poco X6 Pro 5G Review: Best Phone Under 35K?', category: 'review', publishedAt: '2024-05-22', image: '/images/news/poco-review.png' },
  { id: '3', slug: 'samsung-galaxy-m15-5g-officially-announced', title: 'Samsung Galaxy M15 5G Officially Announced', category: 'news', publishedAt: '2024-05-20', image: '/images/news/galaxy-m15.png' },
  { id: '4', slug: 'mobile-battery-charge-tips', title: 'মোবাইল ব্যাটারির চার্জ ভালোভাবে রাখার ১০ টি উপায়', category: 'tips', publishedAt: '2024-05-18', image: '/images/news/battery-tips.png' },
]
