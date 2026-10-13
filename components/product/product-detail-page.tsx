import { BottomNav } from "@/components/layout/bottom-nav";
import { Container } from "@/components/layout/container";
import Hero from "./hero";
import Emi from "./emi";
import KeyFeatures from "./key-features";
import Breadcrumb from "./breadcrumb";
import Variant from "./variant";
import Description from "./description";
import Specifications from "./specifications";

export function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <main>
        <Container className="pt-3 md:pt-6">
          <Breadcrumb />
          <Hero />
          <Emi />
          <KeyFeatures />

          <Variant />

          <Description />
          <Specifications />
        </Container>
      </main>
      <BottomNav />
    </div>
  );
}
