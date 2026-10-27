
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/mobile-brands/section-header";
import type { Brand } from "@/lib/types";

export default function SidebarBrands({
  brands,
  error,
}: {
  brands: Brand[];
  error?: string;
}) {
  return (
    <section className="overflow-hidden border border-slate-200 bg-white">
      <SectionHeader
        title="Popular Brands"
        href="/brands"
        action="View More"
      />

      <div className="grid grid-cols-3 gap-1.5 p-1.5">
        {brands.map((brand) => (
          <Button
            key={brand.id}
            asChild
            variant="outline"
            className="h-[30px] min-w-0 rounded-[5px] border-slate-300 bg-white px-1 text-[12px] font-semibold text-blue-700 shadow-none hover:bg-blue-50 hover:text-blue-800"
          >
            <Link href={`/brand/${brand.slug}`}>{brand.name}</Link>
          </Button>
        ))}
        {error && (
          <p className="col-span-3 px-2 py-3 text-center text-xs text-red-600">
            {error}
          </p>
        )}
        {!error && brands.length === 0 && (
          <p className="col-span-3 px-2 py-3 text-center text-xs text-slate-500">
            No brands available.
          </p>
        )}
      </div>

      <div className="px-1.5 pb-1.5">
        <Button
          asChild
          variant="outline"
          className="h-[30px] w-full rounded-[5px] border-slate-300 bg-white text-[12px] font-semibold text-blue-700 shadow-none hover:bg-blue-50"
        >
          <Link href="/brands">
            More Brands
            <ChevronsRight size={15} className="ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}