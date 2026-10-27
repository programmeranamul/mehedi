import CompareMobileHeader from "@/components/compare-mobile/compare-mobile-header";
import ComparisonBuilder from "@/components/compare-mobile/comparison-builder";
import LatestComparision from "@/components/compare-mobile/latest-comparision";
import { Container } from "@/components/layout/container";
import { getProductsPage, type LatestHomePhone } from "@/lib/api/products";
import React from "react";

async function page() {
  let phones: LatestHomePhone[] = [];
  let productsError: string | undefined;

  try {
    ({ phones } = await getProductsPage(1, 10));
  } catch (reason) {
    console.error("Failed to load competitor products.", reason);
    productsError = "Unable to load competitors right now.";
  }

  return (
    <Container>
      <CompareMobileHeader />
      <ComparisonBuilder phones={phones} error={productsError}>
        <LatestComparision />
      </ComparisonBuilder>
    </Container>
  );
}

export default page;
