import { FeaturesStrip } from '@/components/home/features-strip'
import { HeroFinder } from '@/components/home/hero-finder'
import { QuickLinks } from '@/components/home/quick-links'
import { BrandCard } from '@/components/shared/brand-card'
import { CompareCard } from '@/components/shared/compare-card'
import { NewsCard } from '@/components/shared/news-card'
import { ProductCard } from '@/components/shared/product-card'
import { Rail } from '@/components/shared/rail'
import { Section } from '@/components/shared/section'
import { getBrands, getComparisons, getLatestArticles, getPopularPhones } from '@/lib/api'

export default async function HomePage() {
  const [phones, brands, comparisons, articles] = await Promise.all([
    getPopularPhones(6),
    getBrands(8),
    getComparisons(4),
    getLatestArticles(4),
  ])

  const brandOptions = brands.map((brand) => ({ label: brand.name, value: brand.slug }))

  return (
    <>
      <HeroFinder
        typeOptions={[
          { label: 'Smartphone', value: 'smartphone' },
          { label: 'Feature Phone', value: 'feature-phone' },
          { label: 'Tablet', value: 'tablet' },
        ]}
        categoryOptions={[
          { label: 'Gaming', value: 'gaming' },
          { label: 'Camera', value: 'camera' },
          { label: 'Budget', value: 'budget' },
          { label: 'Flagship', value: 'flagship' },
        ]}
        brandOptions={brandOptions}
      />

      <QuickLinks />

      <Section title="Popular Phones" viewAllHref="/phones" className="pt-4 md:pt-6">
        <Rail className="md:grid-cols-3 md:gap-2 lg:grid-cols-6" itemClassName="w-[22vw] min-w-[84px]">
          {phones.map((phone, index) => (
            <ProductCard key={phone.id} phone={phone} priority={index < 3} />
          ))}
        </Rail>
      </Section>

      <Section title="Shop by Brand" viewAllHref="/brands" className="pt-2 md:pt-7">
        <Rail className="gap-0 md:grid-cols-4 md:gap-3 lg:grid-cols-8 lg:px-2" itemClassName="w-[14.5vw] min-w-[54px]">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </Rail>
      </Section>

      <Section title="Compare Phones" viewAllHref="/compare" className="pt-3 md:pt-7">
        <Rail className="md:grid-cols-2 md:gap-3 lg:grid-cols-4" itemClassName="w-[30vw] min-w-[116px]">
          {comparisons.map((comparison) => (
            <CompareCard key={comparison.id} comparison={comparison} />
          ))}
        </Rail>
      </Section>

      <Section title="Latest News & Reviews" viewAllHref="/news" className="pt-3 md:pt-7">
        <div className="divide-y divide-border rounded-md border border-border bg-card px-2.5 py-1 shadow-[0_1px_4px_rgba(15,23,42,0.06)] md:grid md:grid-cols-2 md:gap-3 md:divide-y-0 md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:grid-cols-4">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </Section>

      <FeaturesStrip />
    </>
  )
}
