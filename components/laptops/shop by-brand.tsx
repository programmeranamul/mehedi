import { cn } from '@/lib/utils'
import React from 'react'
import { Section } from './../shared/section';
import Link from 'next/link';

const brands = ["Dell", "HP", "Lenovo", "ASUS", "Acer", "Apple"];

function ShopByBrand() {
  return (
    <>
      <Section title="Shop by Brand" viewAllHref="/brands" className="pt-5">
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-6">
          {brands.map((brand, index) => (
            <Link
              key={brand}
              href="/laptops"
              className="flex flex-col items-center gap-2 text-sm font-semibold"
            >
              <span
                className={cn(
                  "flex size-16 items-center justify-center rounded-full text-lg font-bold text-white",
                  [
                    "bg-blue-700",
                    "bg-sky-500",
                    "bg-red-600",
                    "bg-slate-800",
                    "bg-lime-500",
                    "bg-slate-200 text-slate-900",
                  ][index],
                )}
              >
                {brand === "Apple" ? "●" : brand.slice(0, 2)}
              </span>
              {brand}
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}

export default ShopByBrand
