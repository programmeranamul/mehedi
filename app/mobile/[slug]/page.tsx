
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/container'
import DetailsBanner from '@/components/mobile-details/details-banner'
import LatestCompare from '@/components/mobile-details/latest-compare';
import LatestNews from '@/components/mobile-details/latest-news';
import PhoneSpecifications  from '@/components/mobile-details/phone-specifications'
import PhoneSidebarSection  from '@/components/mobile-details/sidebar-phone'
import { ApiError } from '@/lib/api'
import {
  getLatestProducts,
  getMobileProductDetail,
  getProductsByBrand,
} from '@/lib/api/products'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [
    productResult,
    latestProductsResult,
    popularProductsResult,
  ] = await Promise.allSettled([
    getMobileProductDetail(slug),
    getLatestProducts(1, 6),
    getProductsByBrand('OnePlus', 1, 10),
  ])

  if (productResult.status === 'rejected') {
    const error = productResult.reason
    if (error instanceof ApiError && error.status === 404) {
      notFound()
    }

    console.error(`Failed to load mobile product "${slug}".`, error)

    return (
      <Container>
        <p role="alert" className="p-4 text-center text-red-700">
          Unable to load this phone’s details right now. Please try again later.
        </p>
      </Container>
    )
  }

  const latestPhones =
    latestProductsResult.status === 'fulfilled'
      ? latestProductsResult.value
      : []
  const latestPhonesError =
    latestProductsResult.status === 'rejected'
      ? 'Unable to load the latest phones right now.'
      : undefined
  const popularPhones =
    popularProductsResult.status === 'fulfilled'
      ? popularProductsResult.value
      : []
  const popularPhonesError =
    popularProductsResult.status === 'rejected'
      ? 'Unable to load OnePlus phones right now.'
      : undefined

  if (latestProductsResult.status === 'rejected') {
    console.error(
      'Failed to load latest mobile products.',
      latestProductsResult.reason,
    )
  }
  if (popularProductsResult.status === 'rejected') {
    console.error(
      'Failed to load popular OnePlus products.',
      popularProductsResult.reason,
    )
  }

  return <>
  <Container>
    <DetailsBanner data={productResult.value} />
  
   <div className="grid grid-cols-1 items-start gap-3 bg-gray-100 p-2 lg:grid-cols-[minmax(0,2.1fr)_minmax(300px,1fr)]">
      <PhoneSpecifications data={productResult.value} />
      
      <aside className="flex min-w-0 flex-col gap-2">
        <PhoneSidebarSection
          title="OnePlus mobile"
          actionLabel="View More"
          actionHref="/mobile-phones/oneplus"
          phones={popularPhones}
          error={popularPhonesError}
        />

        <PhoneSidebarSection
          title="Latest Updated Mobile"
          actionLabel="View All"
          actionHref="/mobile-phones/latest"
          phones={latestPhones}
          error={latestPhonesError}
        />
        <LatestNews />
        <LatestCompare />
      </aside>
    </div>
  </Container>
  
  
  </>
}
