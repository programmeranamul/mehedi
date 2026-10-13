import type { FooterColumn, NavItem } from '@/lib/types'

export const siteConfig = {
  name: 'TechMehedi',
  tagline: 'Smart Choice, Better Life',
  description: 'Your trusted source for smartphone prices, specs, reviews and tech news in Bangladesh.',
  email: 'techmehedi34@gmail.com',
  location: 'Dhaka, Bangladesh',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/techmehedie', icon: '/social/facebook.svg' },
    { label: 'YouTube', href: 'https://www.youtube.com/@TechMehedie', icon: '/social/youtube.svg' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@techmehedie', icon: '/social/tiktok.svg' },
    { label: 'Instagram', href: 'https://www.instagram.com/techmehedie/', icon: '/social/instagram.svg' },
  ],
}

export const mainNav: NavItem[] = [
  {
    label: 'Brands',
    href: '/brands',
    children: [
      { label: 'Samsung', href: '/brands/samsung' },
      { label: 'Xiaomi', href: '/brands/xiaomi' },
      { label: 'Realme', href: '/brands/realme' },
      { label: 'Apple', href: '/brands/apple' },
    ],
  },
  {
    label: 'Smartphones',
    href: '/phones',
    children: [
      { label: 'All Smartphones', href: '/phones' },
      { label: 'Upcoming Phones', href: '/phones/upcoming' },
      { label: 'Best Phones', href: '/phones/best' },
    ],
  },
  { label: 'Tablets', href: '/tablets' },
  { label: 'News', href: '/news' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Videos', href: '/videos' },
  {
    label: 'More',
    href: '#',
    children: [
      { label: 'Phone Finder', href: '/phone-finder' },
      { label: 'Compare Phones', href: '/compare' },
      { label: 'About Us', href: '/about' },
    ],
  },
]

export const categoryNav: NavItem[] = [
  { label: 'Smartphones', href: '/phones' },
  { label: 'Tablets', href: '/tablets' },
  { label: 'Smart Watches', href: '/watches' },
  { label: 'Accessories', href: '/accessories' },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { label: 'All Smartphones', href: '/phones' },
      { label: 'Upcoming Phones', href: '/phones/upcoming' },
      { label: 'Best Phones', href: '/phones/best' },
      { label: 'Phone Finder', href: '/phone-finder' },
      { label: 'Compare Phones', href: '/compare' },
    ],
  },
  {
    title: 'Popular Brands',
    links: [
      { label: 'Samsung', href: '/brands/samsung' },
      { label: 'Xiaomi', href: '/brands/xiaomi' },
      { label: 'Realme', href: '/brands/realme' },
      { label: 'Infinix', href: '/brands/infinix' },
      { label: 'Apple', href: '/brands/apple' },
    ],
  },
]
