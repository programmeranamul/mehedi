

"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { readFilterUrlSelections, updateFilterUrl } from "./filter-url";

const brands = [
  { name: "5Star", count: 0 },
  { name: "Acer", count: 0 },
  { name: "Alcatel", count: 0 },
  { name: "Allview", count: 0 },
  { name: "Apple", count: 2 },
  { name: "Asus", count: 0 },
  { name: "Benco", count: 0 },
  { name: "Blackview", count: 0 },
  { name: "Google", count: 12 },
  { name: "Huawei", count: 8 },
  { name: "Infinix", count: 24 },
  { name: "OnePlus", count: 16 },
  { name: "Realme", count: 18 },
  { name: "Samsung", count: 32 },
  { name: "Xiaomi", count: 25 },
];

const batteries = [
  { name: "1001 - 1500 mAh", count: 2 },
  { name: "1501 - 2000 mAh", count: 6 },
  { name: "2001 - 3000 mAh", count: 3 },
  { name: "3001 - 4000 mAh", count: 2 },
  { name: "4001 - 5000 mAh", count: 34 },
  { name: "Above 5000 mAh", count: 151 },
  { name: "Under 1000 mAh", count: 6 },
];

type PhoneFiltersProps = {
  onFilterChange?: (filters: {
    brands: string[];
    batteries: string[];
  }) => void;
};

export default function BrandFilter({
  onFilterChange,
}: PhoneFiltersProps) {
  const [brandSearch, setBrandSearch] = useState("");
  const [batterySearch, setBatterySearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedBatteries, setSelectedBatteries] = useState<string[]>([]);
  const [showAllBrands, setShowAllBrands] = useState(false);

  useEffect(() => {
    setSelectedBrands(
      readFilterUrlSelections(
        "brand",
        brands.map((brand) => brand.name),
      ),
    );
    setSelectedBatteries(
      readFilterUrlSelections(
        "battery",
        batteries.map((battery) => battery.name),
      ),
    );
  }, []);

  const filteredBrands = useMemo(
    () =>
      brands.filter((brand) =>
        brand.name.toLowerCase().includes(brandSearch.toLowerCase())
      ),
    [brandSearch]
  );

  const filteredBatteries = useMemo(
    () =>
      batteries.filter((battery) =>
        battery.name.toLowerCase().includes(batterySearch.toLowerCase())
      ),
    [batterySearch]
  );

  function toggleBrand(name: string) {
    const next = selectedBrands.includes(name) ? [] : [name];

    setSelectedBrands(next);
    updateFilterUrl({ brand: next });
    onFilterChange?.({ brands: next, batteries: selectedBatteries });
  }

  function toggleBattery(name: string) {
    const next = selectedBatteries.includes(name) ? [] : [name];

    setSelectedBatteries(next);
    updateFilterUrl({ battery: next });
    onFilterChange?.({ brands: selectedBrands, batteries: next });
  }

  return (
    <>
      {/* Brands */}
      <section>
        <h2 className="border-b border-slate-300 pb-2 text-sm font-bold text-primary">
          Brands
        </h2>

        <div className="relative mt-2">
          <Input
            value={brandSearch}
            onChange={(event) => setBrandSearch(event.target.value)}
            placeholder="Search Brands"
            aria-label="Search brands"
            className="h-[31px] rounded border-slate-300 pr-8 text-xs shadow-none focus-visible:ring-1 focus-visible:ring-blue-500"
          />
          <Search
            size={14}
            className="pointer-events-none absolute right-2.5 top-2 text-slate-400"
          />
        </div>

        <div className="relative mt-3">
          <div className="max-h-[192px] space-y-1 overflow-y-auto pr-4">
            {filteredBrands
              .filter((brand, index) => showAllBrands || index < 7)
              .map((brand) => {
                const selected = selectedBrands.includes(brand.name);

                return (
                  <label
                    key={brand.name}
                    className={`flex cursor-pointer items-center gap-2 text-[14px] font-semibold ${
                      brand.count === 0 && !selected
                        ? "text-neutral-400"
                        : "text-neutral-600"
                    }`}
                  >
                    <Checkbox
                      checked={selected}
                      onCheckedChange={() => toggleBrand(brand.name)}
                      className="h-4 w-4 rounded-[4px] border-slate-300 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                    />

                    <span>{brand.name}</span>

                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none text-white ${
                        brand.count === 0 ? "bg-rose-400" : "bg-cyan-500"
                      }`}
                    >
                      {brand.count}
                    </span>
                  </label>
                );
              })}
          </div>

          <div className="absolute -right-1 top-0 flex h-full flex-col justify-between bg-white/90">
            <button
              type="button"
              onClick={() => setShowAllBrands(false)}
              aria-label="Scroll brand list up"
              className="text-neutral-500"
            >
              <ChevronUp size={18} />
            </button>

            <button
              type="button"
              onClick={() => setShowAllBrands(true)}
              aria-label="Show all brands"
              className="text-neutral-500"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Battery */}
      <section>
        <h2 className="border-b border-slate-300 pb-2 text-sm font-bold text-primary">
          Battery
        </h2>

        <div className="relative mt-2">
          <Input
            value={batterySearch}
            onChange={(event) => setBatterySearch(event.target.value)}
            placeholder="Search Battery"
            aria-label="Search battery capacity"
            className="h-[31px] rounded border-slate-300 text-xs shadow-none focus-visible:ring-1 focus-visible:ring-blue-500"
          />
        </div>

        <div className="mt-3 space-y-1.5">
          {filteredBatteries.map((battery) => {
            const selected = selectedBatteries.includes(battery.name);

            return (
              <label
                key={battery.name}
                className="flex cursor-pointer items-center gap-2 text-[14px] font-semibold text-neutral-600"
              >
                <Checkbox
                  checked={selected}
                  onCheckedChange={() => toggleBattery(battery.name)}
                  className="h-4 w-4 rounded-[4px] border-slate-300 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                />

                <span>{battery.name}</span>

                <span className="rounded-full bg-cyan-500 px-1.5 py-0.5 text-[10px] leading-none text-white">
                  {battery.count}
                </span>
              </label>
            );
          })}
        </div>
      </section>
    </>
  );
}
