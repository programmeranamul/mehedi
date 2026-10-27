import { apiFetch } from "@/lib/api";
import type { MobileDetailData } from "@/lib/types/mobile-detail";

interface ProductDetailResponse {
  data?: {
    data?: MobileDetailData;
  };
}

interface LatestProductRecord {
  id?: string;
  slug?: string;
  name?: string;
  image?: string;
  price?: number;
  priceStatus?: string;
  score?: number;
  marketStatus?: string;
}

interface LatestProductsResponse {
  data?: LatestProductRecord[];
  pagination?: {
    page?: number;
    limit?: number;
    total?: number;
    pages?: number;
  };
}

interface HomePhoneRecord {
  id?: string;
  slug?: string;
  name?: string;
  image?: string;
  price?: number;
  score?: number;
  priceStatus?: string;
  marketStatus?: string;
}

interface HomePhonesResponse {
  data?: HomePhoneRecord[];
  pagination?: LatestProductsResponse["pagination"];
}

interface PhoneComparisonResponse {
  success?: boolean;
  data?: {
    phones?: {
      _id?: string;
      slug?: string;
      name?: string;
      brand?: string;
      image?: string;
      price?: number | null;
      priceStatus?: string;
      marketStatus?: string;
      score?: number;
      releaseDate?: string;
      variant?: string;
    }[];
    specificationGroups?: {
      key?: string;
      title?: string;
      items?: {
        key?: string;
        label?: string;
        values?: (string | null)[];
      }[];
    }[];
  };
}

export interface ComparedPhone {
  id: string;
  slug: string;
  name: string;
  brand: string;
  image: string;
  price: number | null;
  priceStatus: string;
  marketStatus: string;
  score: number;
  releaseDate: string;
  variant: string;
}

export interface PhoneComparisonSpecItem {
  key: string;
  label: string;
  values: (string | null)[];
}

export interface PhoneComparisonSpecGroup {
  key: string;
  title: string;
  items: PhoneComparisonSpecItem[];
}

export interface PhoneComparison {
  phones: ComparedPhone[];
  specificationGroups: PhoneComparisonSpecGroup[];
}

export interface LatestPhone {
  name: string;
  image: string;
  price: string;
  status: string;
  href: string;
}

export interface LatestHomePhone {
  id: string;
  slug?: string;
  name: string;
  image: string;
  score: number;
  price: number;
  official: boolean;
  status?: string;
  marketStatus?: string;
}

export interface LatestPhonesPagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface LatestHomePhonesPage {
  phones: LatestHomePhone[];
  pagination: LatestPhonesPagination;
}

export async function getPhoneComparison(
  slugs: string[],
): Promise<PhoneComparison> {
  if (slugs.length < 2 || slugs.length > 4) {
    throw new Error("Phone comparison requires between two and four slugs.");
  }

  // const query = new URLSearchParams({ slugs: slugs.join(",") });
  const slugsString = slugs.join(',');
  const query = `slugs=${slugs.join(',')}`;
  console.log("query", query.toString())
  const response = await apiFetch<PhoneComparisonResponse>(
    `/phones/compare?${query.toString()}`,
    { cache: "no-store" },
  );
  const data = response.data;

  if (
    response.success !== true ||
    !Array.isArray(data?.phones) ||
    !Array.isArray(data.specificationGroups)
  ) {
    throw new Error("Phone comparison response is missing phones or specification groups.");
  }

  const phones = data.phones.map((phone) => {
    const {
      _id,
      slug,
      name,
      brand,
      image,
      price,
      priceStatus,
      marketStatus,
      score,
      releaseDate,
      variant,
    } = phone;

    if (
      !_id ||
      !slug ||
      !name ||
      !brand ||
      !image ||
      (price !== null && typeof price !== "number") ||
      !priceStatus ||
      !marketStatus ||
      typeof score !== "number" ||
      !releaseDate ||
      !variant
    ) {
      throw new Error("Phone comparison response contains an invalid phone.");
    }

    return {
      id: _id,
      slug,
      name,
      brand,
      image,
      price,
      priceStatus,
      marketStatus,
      score,
      releaseDate,
      variant,
    };
  });

  if (phones.length !== slugs.length) {
    throw new Error("Phone comparison response does not match the requested phones.");
  }

  const specificationGroups = data.specificationGroups.map((group) => {
    if (!group.key || !group.title || !Array.isArray(group.items)) {
      throw new Error("Phone comparison response contains an invalid specification group.");
    }

    return {
      key: group.key,
      title: group.title,
      items: group.items.map((item) => {
        if (
          !item.key ||
          !item.label ||
          !Array.isArray(item.values) ||
          item.values.length !== phones.length ||
          item.values.some(
            (value) => value !== null && typeof value !== "string",
          )
        ) {
          throw new Error("Phone comparison response contains an invalid specification row.");
        }

        return {
          key: item.key,
          label: item.label,
          values: item.values,
        };
      }),
    };
  });

  return { phones, specificationGroups };
}

export async function getOfficialPhones(
  page = 1,
  limit = 10,
): Promise<LatestHomePhone[]> {
  const result = await getOfficialPhonesPage(page, limit);
  return result.phones;
}

export async function getUnofficialPhones(
  page = 1,
  limit = 10,
): Promise<LatestHomePhone[]> {
  const result = await getUnofficialPhonesPage(page, limit);
  return result.phones;
}

export async function getUpcomingPhones(
  page = 1,
  limit = 10,
): Promise<LatestHomePhone[]> {
  const result = await getUpcomingPhonesPage(page, limit);
  return result.phones;
}

export async function getMobileProductDetail(
  slug: string,
): Promise<MobileDetailData> {
  const response = await apiFetch<ProductDetailResponse>(
    `/products/${encodeURIComponent(slug)}`,
    { cache: "no-store" },
  );

  if (!response.data?.data) {
    throw new Error(`Product detail response is missing data for "${slug}".`);
  }

  return response.data.data;
}

export async function getLatestProducts(
  page = 1,
  limit = 6,
): Promise<LatestPhone[]> {
  const response = await apiFetch<LatestProductsResponse>(
    `/products/latest?page=${page}&limit=${limit}`,
    { cache: "no-store" },
  );

  if (!Array.isArray(response.data)) {
    throw new Error("Latest products response is missing its data array.");
  }

  return response.data
    .map(mapProductToSidebarPhone)
    .filter((phone): phone is LatestPhone => phone !== null);
}

export async function getLatestHomePhones(
  page = 1,
  limit = 12,
  filters?: URLSearchParams,
  signal?: AbortSignal,
): Promise<LatestHomePhone[]> {
  const result = await getLatestHomePhonesPage(page, limit, filters, signal);
  return result.phones;
}

export async function getLatestHomePhonesPage(
  page = 1,
  limit = 12,
  filters?: URLSearchParams,
  signal?: AbortSignal,
): Promise<LatestHomePhonesPage> {
  return getHomePhonesPage(
    "/products/latest",
    page,
    limit,
    filters,
    signal,
  );
}

export async function getProductsPage(
  page = 1,
  limit = 10,
  filters?: URLSearchParams,
  signal?: AbortSignal,
): Promise<LatestHomePhonesPage> {
  return getHomePhonesPage("/products", page, limit, filters, signal);
}

export async function getOfficialPhonesPage(
  page = 1,
  limit = 10,
  filters?: URLSearchParams,
  signal?: AbortSignal,
): Promise<LatestHomePhonesPage> {
  return getHomePhonesPage(
    "/products/official-phone",
    page,
    limit,
    filters,
    signal,
  );
}

export async function getUnofficialPhonesPage(
  page = 1,
  limit = 10,
  filters?: URLSearchParams,
  signal?: AbortSignal,
): Promise<LatestHomePhonesPage> {
  return getHomePhonesPage(
    "/products/unofficial-phone",
    page,
    limit,
    filters,
    signal,
  );
}

export async function getUpcomingPhonesPage(
  page = 1,
  limit = 10,
  filters?: URLSearchParams,
  signal?: AbortSignal,
): Promise<LatestHomePhonesPage> {
  return getHomePhonesPage(
    "/products/upcoming-phone",
    page,
    limit,
    filters,
    signal,
  );
}

async function getHomePhonesPage(
  endpoint: string,
  page: number,
  limit: number,
  filters?: URLSearchParams,
  signal?: AbortSignal,
): Promise<LatestHomePhonesPage> {
  const query = new URLSearchParams(filters);
  query.set("page", String(page));
  query.set("limit", String(limit));

  const response = await apiFetch<HomePhonesResponse>(
    `${endpoint}?${query.toString()}`,
    { cache: "no-store", signal },
  );

  if (!Array.isArray(response.data)) {
    throw new Error(`Products response from "${endpoint}" is missing its data array.`);
  }

  const pagination = response.pagination;
  if (
    !pagination ||
    typeof pagination.page !== "number" ||
    !Number.isInteger(pagination.page) ||
    pagination.page < 1 ||
    typeof pagination.limit !== "number" ||
    !Number.isInteger(pagination.limit) ||
    pagination.limit < 1 ||
    typeof pagination.total !== "number" ||
    !Number.isInteger(pagination.total) ||
    pagination.total < 0 ||
    typeof pagination.pages !== "number" ||
    !Number.isInteger(pagination.pages) ||
    pagination.pages < 0
  ) {
    throw new Error(`Products response from "${endpoint}" contains invalid pagination.`);
  }

  const phones = response.data.map((product) => {
    const {
      id,
      slug,
      name,
      price,
      image,
      score,
      priceStatus,
      marketStatus,
    } = product;

    if (
      !id ||
      !name ||
      typeof price !== "number" ||
      !image ||
      typeof score !== "number"
    ) {
      throw new Error(`Products response from "${endpoint}" contains an invalid product.`);
    }

    return {
      id,
      slug,
      name,
      image,
      score,
      price,
      official:
        endpoint === "/products/upcoming-phone"
          ? false
          : priceStatus === "Official",
      status:
        endpoint === "/products/upcoming-phone"
          ? priceStatus ?? "Upcoming"
          : priceStatus,
      marketStatus,
    };
  });

  return {
    phones,
    pagination: {
      page: pagination.page,
      limit: pagination.limit,
      total: pagination.total,
      pages: pagination.pages,
    },
  };
}

export async function getProductsByBrand(
  brand: string,
  page = 1,
  limit = 10,
): Promise<LatestPhone[]> {
  const query = new URLSearchParams({
    brand,
    page: String(page),
    limit: String(limit),
  });
  const response = await apiFetch<LatestProductsResponse>(
    `/products?${query.toString()}`,
    { cache: "no-store" },
  );

  if (!Array.isArray(response.data)) {
    throw new Error(
      `Products response for brand "${brand}" is missing its data array.`,
    );
  }

  return response.data
    .map(mapProductToSidebarPhone)
    .filter((phone): phone is LatestPhone => phone !== null);
}

function mapProductToSidebarPhone(
  product: LatestProductRecord,
): LatestPhone | null {
  const { slug, name, price, image, priceStatus, marketStatus } = product;
  console.log("Mapping product to sidebar phone:", slug, name);

  // if (!slug) {
  //   console.error(
  //     "Skipping sidebar product because its response is missing a slug.",
  //     { id: product.id, name: product.name },
  //   );
  //   return null;
  // }

  if (!name || typeof price !== "number" || !image) {
    throw new Error("Products response contains an invalid product.");
  }

  return {
    name,
    image,
    price: price.toLocaleString("en-US"),
    status: priceStatus ?? marketStatus ?? "Unofficial",
    href: `/mobile/${slug}`,
  };
}
