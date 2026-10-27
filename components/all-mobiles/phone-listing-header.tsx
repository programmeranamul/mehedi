"use client";

import { ArrowDownWideNarrow } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FILTERS_CHANGED_EVENT,
  readFilterUrlValue,
  updateFilterUrl,
} from "./filter-url";

export default function PhoneListingHeader({title}:{title:string}) {
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    function syncSortBy() {
      const sort = readFilterUrlValue("sort");
      setSortBy(
        sort === "price_high_to_low" || sort === "price_low_to_high"
          ? sort
          : "default",
      );
    }

    syncSortBy();
    window.addEventListener(FILTERS_CHANGED_EVENT, syncSortBy);
    window.addEventListener("popstate", syncSortBy);

    return () => {
      window.removeEventListener(FILTERS_CHANGED_EVENT, syncSortBy);
      window.removeEventListener("popstate", syncSortBy);
    };
  }, []);

  function handleSortChange(sort: string) {
    setSortBy(sort);
    updateFilterUrl({
      sort: sort === "default" ? null : sort,
    });
  }

  return (
    <header className="flex min-h-[70px] items-center justify-between gap-3 border-b border-slate-300 bg-white px-2 py-2">
      <h1 className="text-[13px] font-medium uppercase text-slate-700">
         {title}
      </h1>

      <label className="flex shrink-0 flex-col gap-1 text-xs text-slate-600">
        <span>Sort by</span>

        <span className="relative">
          <ArrowDownWideNarrow
            size={14}
            className="pointer-events-none absolute right-2 top-2.5 text-slate-500"
          />

          <select
            value={sortBy}
            onChange={(event) => handleSortChange(event.target.value)}
            className="h-[31px] w-[121px] appearance-none rounded-md border border-slate-300 bg-white px-2 pr-7 text-xs text-slate-700 outline-none focus:border-blue-500"
          >
            <option value="default">Default</option>
            <option value="price_low_to_high">Low to High</option>
            <option value="price_high_to_low">High to Low</option>
          </select>
        </span>
      </label>
    </header>
  );
}
