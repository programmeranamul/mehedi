import BlogAndSidebar from "@/components/home/blog-and-sidebar";
import { FeaturesStrip } from "@/components/home/features-strip";
import { HeroFinder } from "@/components/home/hero-finder";
import LatestPhones from "@/components/home/latest-phones";
import LatestReviews from "@/components/home/latest-reviews";
import OfficialAndUnofficialPhone from "@/components/home/official-and-unofficial-phone";
import PhoneComparison from "@/components/home/phone-comparison";
import { QuickLinks } from "@/components/home/quick-links";
import UpcommingPhones from "@/components/home/upcomming-phones";
import { BrandCard } from "@/components/shared/brand-card";
import { CompareCard } from "@/components/shared/compare-card";
import { NewsCard } from "@/components/shared/news-card";
import PhoneCard from "@/components/shared/phone-card";
import { ProductCard } from "@/components/shared/product-card";
import { Rail } from "@/components/shared/rail";
import { Section } from "@/components/shared/section";
import {
  getBrands,
  getComparisons,
  getLatestArticles,
  getPopularPhones,
} from "@/lib/api";
import {
  getLatestHomePhones,
  getOfficialPhones,
  getUpcomingPhones,
  getUnofficialPhones,
} from "@/lib/api/products";

export default async function HomePage() {
  const [
    phones,
    brands,
    comparisons,
    articles,
    latestPhonesResult,
    officialPhonesResult,
    unofficialPhonesResult,
    upcomingPhonesResult,
  ] = await Promise.all([
    getPopularPhones(12),
    getBrands(8),
    getComparisons(4),
    getLatestArticles(4),
    getLatestHomePhones(1, 12).then(
      (latestPhones) => ({ status: "fulfilled" as const, value: latestPhones }),
      (error: unknown) => ({ status: "rejected" as const, reason: error }),
    ),
    getOfficialPhones(1, 10).then(
      (officialPhones) => ({
        status: "fulfilled" as const,
        value: officialPhones,
      }),
      (error: unknown) => ({ status: "rejected" as const, reason: error }),
    ),
    getUnofficialPhones(1, 10).then(
      (unofficialPhones) => ({
        status: "fulfilled" as const,
        value: unofficialPhones,
      }),
      (error: unknown) => ({ status: "rejected" as const, reason: error }),
    ),
    getUpcomingPhones(1, 10).then(
      (upcomingPhones) => ({
        status: "fulfilled" as const,
        value: upcomingPhones,
      }),
      (error: unknown) => ({ status: "rejected" as const, reason: error }),
    ),
  ]);

  const latestPhones =
    latestPhonesResult.status === "fulfilled" ? latestPhonesResult.value : [];
  const latestPhonesError =
    latestPhonesResult.status === "rejected"
      ? "Unable to load the latest mobile phones right now."
      : undefined;

  if (latestPhonesResult.status === "rejected") {
    console.error(
      "Failed to load latest mobile phones for the home page.",
      latestPhonesResult.reason,
    );
  }

  const officialPhones =
    officialPhonesResult.status === "fulfilled"
      ? officialPhonesResult.value
      : [];
  const officialPhonesError =
    officialPhonesResult.status === "rejected"
      ? "Unable to load official phones right now."
      : undefined;

  if (officialPhonesResult.status === "rejected") {
    console.error(
      "Failed to load official phones for the home page.",
      officialPhonesResult.reason,
    );
  }

  const unofficialPhones =
    unofficialPhonesResult.status === "fulfilled"
      ? unofficialPhonesResult.value
      : [];
  const unofficialPhonesError =
    unofficialPhonesResult.status === "rejected"
      ? "Unable to load unofficial phones right now."
      : undefined;

  if (unofficialPhonesResult.status === "rejected") {
    console.error(
      "Failed to load unofficial phones for the home page.",
      unofficialPhonesResult.reason,
    );
  }

  const upcomingPhones =
    upcomingPhonesResult.status === "fulfilled"
      ? upcomingPhonesResult.value
      : [];
  const upcomingPhonesError =
    upcomingPhonesResult.status === "rejected"
      ? "Unable to load upcoming phones right now."
      : undefined;

  if (upcomingPhonesResult.status === "rejected") {
    console.error(
      "Failed to load upcoming phones for the home page.",
      upcomingPhonesResult.reason,
    );
  }

  const brandOptions = brands.map((brand) => ({
    label: brand.name,
    value: brand.slug,
  }));

  return (
    <>
      <HeroFinder
        typeOptions={[
          { label: "Smartphone", value: "smartphone" },
          { label: "Feature Phone", value: "feature-phone" },
          { label: "Tablet", value: "tablet" },
        ]}
        categoryOptions={[
          { label: "Gaming", value: "gaming" },
          { label: "Camera", value: "camera" },
          { label: "Budget", value: "budget" },
          { label: "Flagship", value: "flagship" },
        ]}
        brandOptions={brandOptions}
        phones={phones}
      />

      <QuickLinks />

      <Section
        title="Latest Mobile Phones"
        viewAllHref="/phones"
        className="pt-4 md:pt-6"
      >
        <LatestPhones phones={latestPhones} error={latestPhonesError} />
      </Section>

      <Section
        title="Shop by Brand"
        viewAllHref="/brands"
        className="pt-2 md:pt-7"
      >
        <Rail
          className="gap-0 md:grid-cols-4 md:gap-3 lg:grid-cols-8 lg:px-2"
          itemClassName="w-[14.5vw] min-w-[54px]"
        >
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </Rail>
      </Section>

      <BlogAndSidebar />
      <OfficialAndUnofficialPhone
        officialPhones={officialPhones}
        unofficialPhones={unofficialPhones}
        officialPhonesError={officialPhonesError}
        unofficialPhonesError={unofficialPhonesError}
      />
      <UpcommingPhones phones={upcomingPhones} error={upcomingPhonesError} />
      <PhoneComparison />


      <LatestReviews />

     
    </>
  );
}
