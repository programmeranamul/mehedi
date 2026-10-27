

"use client";

import { useEffect, useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import {
  readFilterUrlValue,
  readFilterUrlSelections,
  updateFilterUrl,
  FILTERS_CHANGED_EVENT,
} from "./filter-url";
import { PriceRangeSlider } from "@/components/shared/price-range-slider";

const statuses = [
  { label: "Available", count: 204, color: "bg-cyan-500" },
  { label: "Discounts", count: 8, color: "bg-cyan-500" },
  { label: "Not Available", count: 0, color: "bg-rose-400" },
  { label: "Rumored", count: 0, color: "bg-rose-400" },
  { label: "Upcoming", count: 0, color: "bg-rose-400" },
  { label: "Official", count: 106, color: "bg-cyan-500" },
  { label: "Unofficial", count: 116, color: "bg-cyan-500" },
];

const priceRanges = [
  { label: "Under Tk.5,000", min: 0, max: 5000 },
  { label: "Tk.5,000 - Tk.10,000", min: 5000, max: 10000 },
  { label: "Tk.10,000 - Tk.15,000", min: 10000, max: 15000 },
  { label: "Tk.15,000 - Tk.20,000", min: 15000, max: 20000 },
  { label: "Tk.20,001 - Tk.30,000", min: 20001, max: 30000 },
  { label: "Tk.30,001 - Tk.40,000", min: 30001, max: 40000 },
  { label: "Tk.40,001 - Tk.50,000", min: 40001, max: 50000 },
];

type PriceFilterProps = {
  onFilterChange?: (filters: {
    minPrice: number;
    maxPrice: number;
    statuses: string[];
  }) => void;
  hidePriceSlider?: boolean;
};

export default function PriceFilter({
  onFilterChange,
  hidePriceSlider=false
}: PriceFilterProps) {
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(300000);
  const [selectedRanges, setSelectedRanges] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [showAllRanges, setShowAllRanges] = useState(false);

  function updatePriceRange(nextRange: [number, number]) {
    const [nextMin, nextMax] = nextRange;
    setMinPrice(nextMin);
    setMaxPrice(nextMax);
    setSelectedRanges([]);
    updateFilterUrl({
      priceRange: null,
      minPrice: null,
      maxPrice: null,
      price_min: nextMin,
      price_max: nextMax,
    });
    updateFilters(nextMin, nextMax, selectedStatuses);
  }

  useEffect(() => {
    const urlMinPrice = readFilterUrlValue("price_min");
    const urlMaxPrice = readFilterUrlValue("price_max");
    const min = urlMinPrice === undefined ? 1000 : Number(urlMinPrice);
    const max = urlMaxPrice === undefined ? 300000 : Number(urlMaxPrice);

    if (Number.isFinite(min)) setMinPrice(min);
    if (Number.isFinite(max)) setMaxPrice(max);

    const matchingRange = priceRanges.find(
      (range) => range.min === min && range.max === max,
    );
    setSelectedRanges(matchingRange ? [matchingRange.label] : []);
    function syncSelectedStatuses() {
      setSelectedStatuses(
        readFilterUrlSelections(
          "market_status",
          statuses.map((status) => status.label),
        ),
      );
    }

    syncSelectedStatuses();
    window.addEventListener(FILTERS_CHANGED_EVENT, syncSelectedStatuses);
    window.addEventListener("popstate", syncSelectedStatuses);

    return () => {
      window.removeEventListener(FILTERS_CHANGED_EVENT, syncSelectedStatuses);
      window.removeEventListener("popstate", syncSelectedStatuses);
    };
  }, []);

  function updateFilters(
    min: number,
    max: number,
    nextStatuses: string[]
  ) {
    onFilterChange?.({
      minPrice: min,
      maxPrice: max,
      statuses: nextStatuses,
    });
  }

  function toggleStatus(status: string) {
    const next = selectedStatuses.includes(status) ? [] : [status];

    setSelectedStatuses(next);
    updateFilterUrl({ market_status: next });
    updateFilters(minPrice, maxPrice, next);
  }

  function toggleRange(label: string) {
    const next = selectedRanges.includes(label) ? [] : [label];

    setSelectedRanges(next);

    const selectedPriceRanges = next
      .map((selectedLabel) =>
        priceRanges.find((range) => range.label === selectedLabel),
      )
      .filter(
        (range): range is (typeof priceRanges)[number] => range !== undefined,
      );
    const nextMin = selectedPriceRanges.length
      ? Math.min(...selectedPriceRanges.map((range) => range.min))
      : 1000;
    const nextMax = selectedPriceRanges.length
      ? Math.max(...selectedPriceRanges.map((range) => range.max))
      : 300000;

    setMinPrice(nextMin);
    setMaxPrice(nextMax);
    updateFilterUrl({
      priceRange: null,
      minPrice: null,
      maxPrice: null,
      price_min: next.length ? nextMin : null,
      price_max: next.length ? nextMax : null,
    });
    updateFilters(nextMin, nextMax, selectedStatuses);
  }

  const visibleStatuses = statuses.filter((status) =>
    status.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    {!hidePriceSlider && 
      <section>
        <h2 className="border-b border-slate-300 pb-2 text-sm font-bold text-primary">
          Price Range
        </h2>

        <div className="mx-1 mb-4 mt-5">
          <PriceRangeSlider
            min={0}
            max={500000}
            step={1000}
            value={[minPrice, maxPrice]}
            onChange={updatePriceRange}
            // variant="filter"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            aria-label="Minimum price"
            value={minPrice}
            onChange={(event) => {
              const value = Number(event.target.value);
              setMinPrice(value);
              updateFilterUrl({
                priceRange: null,
                minPrice: null,
                price_min: value,
              });
              updateFilters(value, maxPrice, selectedStatuses);
            }}
            className="h-7 w-full min-w-0 rounded border border-neutral-300 px-2 text-sm text-slate-700 outline-none focus:border-blue-500"
          />

          <input
            type="number"
            aria-label="Maximum price"
            value={maxPrice}
            onChange={(event) => {
              const value = Number(event.target.value);
              setMaxPrice(value);
              updateFilterUrl({
                priceRange: null,
                maxPrice: null,
                price_max: value,
              });
              updateFilters(minPrice, value, selectedStatuses);
            }}
            className="h-7 w-full min-w-0 rounded border border-neutral-300 px-2 text-center text-sm text-slate-700 outline-none focus:border-blue-500"
          />
        </div>

        <div className="relative mt-4">
          <div className="max-h-[178px] space-y-1 overflow-y-auto pr-1">
            {priceRanges
              .filter((range, index) =>
                showAllRanges || index < 7
              )
              .map((range) => (
                <label
                  key={range.label}
                  className="flex cursor-pointer items-center gap-2 text-[13px] font-semibold text-neutral-600"
                >
                  <input
                    type="checkbox"
                    checked={selectedRanges.includes(range.label)}
                    onChange={() => toggleRange(range.label)}
                    className="h-4 w-4 shrink-0 accent-blue-600"
                  />
                  {range.label}
                </label>
              ))}
          </div>

          <button
            type="button"
            onClick={() => setShowAllRanges(!showAllRanges)}
            aria-label="Toggle price ranges"
            className="absolute -right-1 top-0 flex h-full flex-col justify-between bg-white/90 text-neutral-500"
          >
            <ChevronUp size={17} />
            <ChevronDown size={17} />
          </button>
        </div>
      </section> }

      <section>
        <h2 className="border-b border-slate-300 pb-2 text-sm font-bold text-primary">
          Market Status
        </h2>

        <div className="relative mt-2">
          <Search
            size={14}
            className="absolute left-2 top-2.5 text-slate-400"
          />
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search Market Status"
            className="h-[31px] w-full rounded border border-slate-300 pl-7 pr-2 text-xs outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-3 space-y-2">
          {visibleStatuses.map((status) => (
            <label
              key={status.label}
              className="flex cursor-pointer items-center gap-2 text-[13px] font-semibold text-neutral-600"
            >
              <input
                type="checkbox"
                checked={selectedStatuses.includes(status.label)}
                onChange={() => toggleStatus(status.label)}
                className="h-4 w-4 shrink-0 accent-blue-600"
              />

              <span>{status.label}</span>

              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none text-white ${status.color}`}
              >
                {status.count}
              </span>
            </label>
          ))}
        </div>
      </section>



    </>
  );
}
