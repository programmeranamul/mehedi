

import { ChevronRight } from "lucide-react";

const comparisons = [
  ["Apple iPhone 16 Pro Max", "Apple iPhone 17 Pro Max"],
  ["Oppo A5 Pro", "Realme C75"],
  ["Realme Note 50", "Realme Note 60"],
  ["Samsung Galaxy S24 Ultra", "Apple iPhone 16 Pro Max"],
  ["Apple iPhone 15 Pro Max", "Apple iPhone 16 Pro Max"],
];

export default function LatestCompare() {
  return (
    <section className="border border-slate-300 bg-white">
      <div className="flex h-[30px] items-center justify-between border-b border-slate-300 px-2">
        <h2 className="text-xs font-medium text-slate-700">
          Latest Compare
        </h2>

        <a
          href="/compare"
          className="flex items-center whitespace-nowrap text-[10px] text-blue-600 hover:underline"
        >
          See all compare
          <ChevronRight size={12} />
        </a>
      </div>

      <div className="space-y-2.5 p-3">
        {comparisons.map(([first, second]) => (
          <div
            key={`${first}-${second}`}
            className="grid grid-cols-[minmax(0,1fr)_24px_minmax(0,1fr)] items-center bg-[#dedede] px-1.5 py-1"
          >
            <a
              href="/compare"
              className="line-clamp-2 text-[12px] leading-[14px] text-blue-600 hover:underline"
            >
              {first}
            </a>

            <span className="mx-auto flex h-[18px] w-[18px] items-center justify-center rounded-full border border-slate-300 bg-white text-[9px] font-medium text-slate-500">
              VS
            </span>

            <a
              href="/compare"
              className="line-clamp-2 text-[12px] leading-[14px] text-blue-600 hover:underline"
            >
              {second}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
