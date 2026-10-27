import BrandFilter from "@/components/all-mobiles/brand-filter";
import CameraFilter from "@/components/all-mobiles/camra-filter";
import DisplayFilters from "@/components/all-mobiles/display-filters";
import DisplayTypeFilters from "@/components/all-mobiles/display-type-filter";
import LatestMobileList from "@/components/all-mobiles/latest-mobile-list";
import LatestPhonesTable from "@/components/all-mobiles/latest-phones-table";
import OfficialMobileHeader from "@/components/all-mobiles/official-mobile-header";
import PhoneListingHeader from "@/components/all-mobiles/phone-listing-header";
import PriceFilter from "@/components/all-mobiles/price-filter";
import RamFilter from "@/components/all-mobiles/ram-filter";
import { Container } from "@/components/layout/container";
import { getOfficialPhones, getOfficialPhonesPage } from "@/lib/api/products";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach((item) => filters.append(key, item));
    } else if (value !== undefined) {
      filters.set(key, value);
    }
  }

  const latestPhones = await getOfficialPhones(1, 11);
const pageSize = 3;

  const requestedPage = Number(filters.get("page") ?? 1);
  
    const initialPage = Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
    
    const { phones, pagination } = await getOfficialPhonesPage(
      initialPage,
      pageSize,
      filters,
    );

  return (
    <Container>
        <OfficialMobileHeader />
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
          <PhoneListingHeader title="View All Mobiles (Page : official)" />
          <LatestMobileList filters={filters} endpoint="official" />
          <LatestPhonesTable phones={latestPhones} title="Official Mobile Price in Bangladesh 2026" />
        </div>
      </div>
    </Container>
  );
}

export default Page;
