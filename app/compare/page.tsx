import type { Metadata } from 'next'
import { ComparePage } from '@/components/compare/compare-page'

export const metadata: Metadata = { title: 'Compare Phones' }

export default function Page() {
  return <ComparePage />
}
