import BrandFilter from "@/components/all-mobiles/brand-filter";
import CameraFilter from "@/components/all-mobiles/camra-filter";
import DisplayFilters from "@/components/all-mobiles/display-filters";
import LatestMobileHeader from "@/components/all-mobiles/latest-mobile-header";
import LatestMobileList from "@/components/all-mobiles/latest-mobile-list";
import LatestPhonesTable from "@/components/all-mobiles/latest-phones-table";
import PhoneListingHeader from "@/components/all-mobiles/phone-listing-header";
import PriceFilter from "@/components/all-mobiles/price-filter";
import RamFilter from "@/components/all-mobiles/ram-filter";
import { Container } from "@/components/layout/container";
import DisplayTypeFilters from "@/components/all-mobiles/display-type-filter";
import { getLatestHomePhones } from "@/lib/api/products";

type LatestMobilePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

async function page({ searchParams }: LatestMobilePageProps) {
  const params = await searchParams;
  const filters = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach((item) => filters.append(key, item));
    } else if (value !== undefined) {
      filters.set(key, value);
    }
  }

  const latestPhones = await getLatestHomePhones(1, 11);

  return (
    <>
      <Container>
        <LatestMobileHeader />
        <div className="grid grid-cols-1 items-start bg-white md:grid-cols-[292px_minmax(0,1fr)]">
          <div className="space-y-4 border-r border-slate-300 bg-white p-3">
            <PriceFilter />
            <BrandFilter />
            <CameraFilter />
            <DisplayFilters />
            <RamFilter />
            <DisplayTypeFilters />
          </div>
          <div>
            <PhoneListingHeader title="View All Mobiles (Page : Latest)"/>
            <LatestMobileList filters={filters} />
            <LatestPhonesTable phones={latestPhones} title="Latest Mobile Phones in Bangladesh 2026" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default page;
