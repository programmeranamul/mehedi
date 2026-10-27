import {
  getLatestHomePhonesPage,
  getOfficialPhonesPage,
  getProductsPage,
  getUpcomingPhonesPage,
  getUnofficialPhonesPage,
  type LatestHomePhonesPage,
} from "@/lib/api/products";
import LatestMobileListClient from "./latest-mobile-list-client";

export type MobileListEndpoint =
  | "latest"
  | "products"
  | "official"
  | "unofficial"
  | "upcoming";

type LatestMobileListProps = {
  filters: URLSearchParams;
  endpoint?: MobileListEndpoint;
  pageSize?: number;
};

async function LatestMobileList({
  filters,
  endpoint = "latest",
  pageSize = 3,
}: LatestMobileListProps) {
  const requestedPage = Number(filters.get("page") ?? 1);

  const initialPage = Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  
  const loadPage =
    endpoint === "official"
      ? getOfficialPhonesPage
      : endpoint === "unofficial"
        ? getUnofficialPhonesPage
        : endpoint === "upcoming"
          ? getUpcomingPhonesPage
            : endpoint === "products"
              ? getProductsPage
              : getLatestHomePhonesPage;
  const { phones, pagination }: LatestHomePhonesPage = await loadPage(
    initialPage,
    pageSize,
    filters,
  );

  return (
    <LatestMobileListClient
      initialPhones={phones}
      initialPagination={pagination}
      endpoint={endpoint}
      brandSlug={filters.get("brand") ?? undefined}
    />
  );
}

export default LatestMobileList;
