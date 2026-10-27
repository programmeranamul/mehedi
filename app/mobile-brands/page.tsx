import { Container } from "@/components/layout/container";
import MobileBrandsHeader from "@/components/mobile-brands/mobile-brand-header";
import PopularBrands from "@/components/mobile-brands/popular-brands";
import React from "react";
import SidebarBrands from "@/components/mobile-brands/SidebarBrands";
import AllMobileBrands from "@/components/mobile-brands/all-brands";
import LatestNews from "@/components/mobile-details/latest-news";
import LatestCompare from "@/components/mobile-details/latest-compare";
import PhoneSidebarSection from "@/components/mobile-details/sidebar-phone";
import { getBrands } from "@/lib/api";
import { getLatestProducts, getProductsByBrand } from "@/lib/api/products";

async function page() {
  const [brandsResult, latestProductsResult, popularProductsResult] =
    await Promise.allSettled([
      getBrands(10, 1),
      getLatestProducts(1, 5),
      getProductsByBrand("OnePlus", 1, 10),
    ]);

  const brands = brandsResult.status === "fulfilled" ? brandsResult.value : [];
  const brandsError =
    brandsResult.status === "rejected"
      ? "Unable to load mobile brands right now."
      : undefined;

  if (brandsResult.status === "rejected") {
    console.error("Failed to load mobile brands.", brandsResult.reason);
  }

  const popularPhones =
    popularProductsResult.status === "fulfilled"
      ? popularProductsResult.value
      : [];
  const popularPhonesError =
    popularProductsResult.status === "rejected"
      ? "Unable to load OnePlus phones right now."
      : undefined;

  const latestPhones =
    latestProductsResult.status === "fulfilled"
      ? latestProductsResult.value
      : [];
  const latestPhonesError =
    latestProductsResult.status === "rejected"
      ? "Unable to load the latest phones right now."
      : undefined;

  return (
    <Container className="mt-12 mb-30">
      <MobileBrandsHeader />

      <div className="grid grid-cols-1 items-start gap-3 bg-[#f0f1f2] p-2 md:grid-cols-[minmax(0,2fr)_minmax(245px,1fr)]">
        <div>
          <PopularBrands brands={brands} error={brandsError} />
          <AllMobileBrands brands={brands} error={brandsError} />
        </div>

        <aside className="flex min-w-0 flex-col gap-2">
          <SidebarBrands brands={brands} error={brandsError} />
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
  );
}

export default page;
