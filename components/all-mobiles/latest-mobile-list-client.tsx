"use client";

import { useEffect, useRef, useState } from "react";
import {
  getLatestHomePhonesPage,
  getOfficialPhonesPage,
  getProductsPage,
  getUpcomingPhonesPage,
  getUnofficialPhonesPage,
  type LatestHomePhone,
  type LatestPhonesPagination,
} from "@/lib/api/products";
import { LoaderCircle } from "lucide-react";
import PhoneCard from "@/components/shared/phone-card";
import Pagination from "@/components/shared/pagination";
import { FILTERS_CHANGED_EVENT, updateFilterUrl } from "./filter-url";
import type { MobileListEndpoint } from "./latest-mobile-list";

type LatestMobileListClientProps = {
  initialPhones: LatestHomePhone[];
  initialPagination: LatestPhonesPagination;
  endpoint: MobileListEndpoint;
  brandSlug?: string;
};

export default function LatestMobileListClient({
  initialPhones,
  initialPagination,
  endpoint,
  brandSlug,
}: LatestMobileListClientProps) {
  const [phones, setPhones] = useState(initialPhones);
  const [pagination, setPagination] = useState(initialPagination);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const requestRef = useRef<AbortController | null>(null);

  useEffect(() => {
    function fetchFilteredPhones() {
      const query = new URLSearchParams(window.location.search);
      if (brandSlug) {
        query.set("brand", brandSlug);
      }
      const requestedPage = Number(query.get("page") ?? 1);
      const page =
        Number.isInteger(requestedPage) && requestedPage > 0
          ? requestedPage
          : 1;

      requestRef.current?.abort();

      const request = new AbortController();
      requestRef.current = request;
      setIsLoading(true);
      setError(null);

      const getPage =
        endpoint === "official"
          ? getOfficialPhonesPage
          : endpoint === "unofficial"
            ? getUnofficialPhonesPage
            : endpoint === "upcoming"
              ? getUpcomingPhonesPage
              : endpoint === "products"
                ? getProductsPage
                : getLatestHomePhonesPage;
      void getPage(
        page,
        initialPagination.limit,
        query,
        request.signal,
      )
        .then((result) => {
          setPhones(result.phones);
          setPagination(result.pagination);
        })
        .catch((cause: unknown) => {
          if (!request.signal.aborted) {
            setError(
              cause instanceof Error
                ? cause.message
                : "An unexpected error occurred while loading phones.",
            );
          }
        })
        .finally(() => {
          if (!request.signal.aborted) {
            setIsLoading(false);
          }
        });
    }

    window.addEventListener(FILTERS_CHANGED_EVENT, fetchFilteredPhones);
    window.addEventListener("popstate", fetchFilteredPhones);

    return () => {
      window.removeEventListener(FILTERS_CHANGED_EVENT, fetchFilteredPhones);
      window.removeEventListener("popstate", fetchFilteredPhones);
      requestRef.current?.abort();
    };
  }, [brandSlug, endpoint, initialPagination.limit]);

  function changePage(page: number) {
    updateFilterUrl({ page });
  }

  return (
    <>
      {error && (
        <p className="px-3 pt-3 text-sm text-red-600" role="alert">
          Could not update phones: {error}
        </p>
      )}
      <div className="relative">
        {phones.length > 0 ? (
          <div
            className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 xl:grid-cols-4"
            aria-busy={isLoading}
          >
            {phones.map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        ) : (
          <p className="px-3 py-8 text-center text-sm text-slate-500">
            No data found.
          </p>
        )}
        {isLoading && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center bg-white/70"
            role="status"
            aria-label="Updating phones"
          >
            <LoaderCircle
              className="h-8 w-8 animate-spin text-blue-600"
              aria-hidden="true"
            />
            <span className="sr-only">Updating phones...</span>
          </div>
        )}
      </div>
      {pagination.total > 0 && phones.length > 0 && (
        <Pagination
          totalResults={pagination.total}
          pageSize={pagination.limit}
          totalPages={pagination.pages}
          currentPage={pagination.page}
          onPageChange={changePage}
        />
      )}
    </>
  );
}
