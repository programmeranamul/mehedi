import type { Metadata } from 'next'
import { MorePage } from '@/components/more/more-page'

export const metadata: Metadata = {
  title: 'More',
  description: 'Explore TechMehedi tools, activity, information and more.',
}

export default function MoreRoute() {
  return <MorePage />
}
