

"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/shared/pagination";
import type { Brand } from "@/lib/types";
import BrandCard from "./brand-card";

const PAGE_SIZE = 20;

export default function AllMobileBrands({
  brands,
  error,
}: {
  brands: Brand[];
  error?: string;
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredBrands = useMemo(
    () =>
      brands.filter((brand) =>
        brand.name.toLowerCase().includes(search.trim().toLowerCase())
      ),
    [brands, search]
  );

  const visibleBrands = filteredBrands.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  function changeSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  return (
    <section className="w-full overflow-hidden bg-[#eeeeee] p-1.5">
      <h1 className="flex h-[30px] items-center border-b border-slate-300 bg-white px-2 font-serif text-[14px] font-bold uppercase text-[#444]">
        All Mobile Brands
      </h1>

      <div className="relative border-b border-slate-300 bg-white p-1.5">
        <Input
          value={search}
          onChange={(event) => changeSearch(event.target.value)}
          placeholder="Search Brands"
          aria-label="Search mobile brands"
          className="h-[34px] rounded-full border-slate-300 bg-white pl-3 pr-9 text-[12px] shadow-none placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-blue-400"
        />

        <Search
          size={14}
          className="pointer-events-none absolute right-5 top-4.5 text-slate-600"
        />
      </div>

      <div className="grid grid-cols-2 gap-1.5 p-1.5 sm:grid-cols-3 md:grid-cols-4">
        {visibleBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}

        {error && (
          <p className="col-span-full bg-white px-3 py-8 text-center text-sm text-red-600">
            {error}
          </p>
        )}
        {!error && visibleBrands.length === 0 && (
          <p className="col-span-full bg-white px-3 py-8 text-center text-sm text-slate-500">
            No brands found.
          </p>
        )}
      </div>

      <Pagination
        totalResults={filteredBrands.length}
        pageSize={PAGE_SIZE}
        currentPage={page}
        onPageChange={setPage}
      />
    </section>
  );
}
