

"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type RelatedProduct = {
  name: string;
  price: string;
  status: string;
  image: string;
};

export default function RelatedProducts({
  title,
  products,
}: {
  title: string;
  products: RelatedProduct[];
}) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggleCompare(name: string) {
    setSelected((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  }

  return (
    <section className="border border-slate-300 bg-white">
      <div className="border-b border-slate-300 px-2 py-1.5">
        <h2 className="text-xs font-bold text-slate-700">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.name}
            className="min-w-0 overflow-hidden border border-slate-200 bg-white"
          >
            <div className="relative m-1 h-[118px] overflow-hidden border border-slate-200 bg-white sm:h-[118px]">
              <span className="absolute left-0 top-0 z-10 flex flex-col bg-emerald-700 px-1 py-1 text-center text-[7px] font-bold leading-tight text-white">
                SPEC
                <span>ORDER</span>
                <span>PRICE</span>
              </span>

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain p-1"
              />
            </div>

            <div className="px-1.5 pb-1 text-center">
              <h3 className="truncate text-[11px] text-slate-700">
                {product.name}
              </h3>

              <p className="whitespace-nowrap text-[11px] font-semibold text-blue-600">
                {product.price}{" "}
                <span className="text-[9px] font-normal text-orange-600">
                  ({product.status})
                </span>
              </p>
            </div>

            <label className="flex cursor-pointer items-center justify-center gap-1 border-t border-slate-200 bg-slate-50 px-1 py-1 text-[10px] text-slate-600">
              <input
                type="checkbox"
                checked={selected.includes(product.name)}
                onChange={() => toggleCompare(product.name)}
                className="h-3 w-3 accent-blue-600"
              />
              Add to Compare
            </label>
          </article>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-3 py-2">
          <p className="text-xs text-slate-600">
            {selected.length} product(s) selected
          </p>

          <button
            type="button"
            onClick={() =>
              alert(`Compare: ${selected.join(", ")}`)
            }
            className="inline-flex items-center gap-1 rounded bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
          >
            Compare Now
            <ArrowUpRight size={14} />
          </button>
        </div>
      )}
    </section>
  );
}