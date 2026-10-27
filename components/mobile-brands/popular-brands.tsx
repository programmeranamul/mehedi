

import type { Brand } from "@/lib/types";
import BrandCard from "./brand-card";

export default function PopularBrands({
  brands,
  error,
}: {
  brands: Brand[];
  error?: string;
}) {
  return (
    <section className="min-w-0 bg-[#f0f0f0]">
      <div className="flex h-[32px] items-center border-b border-slate-200 bg-white px-3">
        <h1 className="font-serif text-[15px] font-bold uppercase text-[#444]">
          Popular Brands
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-1.5 p-2 sm:grid-cols-3 lg:grid-cols-4">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
        {error && (
          <p className="col-span-full bg-white px-3 py-8 text-center text-sm text-red-600">
            {error}
          </p>
        )}
        {!error && brands.length === 0 && (
          <p className="col-span-full bg-white px-3 py-8 text-center text-sm text-slate-500">
            No brands available.
          </p>
        )}
      </div>
    </section>
  );
}
