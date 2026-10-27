


"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  filterParamName,
  readFilterUrlSelections,
  updateFilterUrl,
} from "./filter-url";

type FilterOption = {
  name: string;
  count: number;
};

type FilterGroup = {
  title: string;
  placeholder: string;
  options: FilterOption[];
  scrollable?: boolean;
};

const filterGroups: FilterGroup[] = [
  {
    title: "RAM",
    placeholder: "Search RAM",
    scrollable: true,
    options: [
      { name: "3 GB", count: 1 },
      { name: "4 GB", count: 38 },
      { name: "6 GB", count: 28 },
      { name: "8 GB", count: 49 },
      { name: "10 GB", count: 0 },
      { name: "12 GB", count: 56 },
      { name: "16 GB", count: 12 },
      { name: "18 GB", count: 4 },
      { name: "24 GB", count: 3 },
    ],
  },
  {
    title: "SIM",
    placeholder: "Search SIM",
    options: [
      { name: "Dual SIM", count: 204 },
      { name: "No", count: 0 },
      { name: "Quad SIM", count: 0 },
      { name: "Single SIM", count: 0 },
      { name: "Triple SIM", count: 0 },
      { name: "eSIM", count: 0 },
    ],
  },
  {
    title: "Storage",
    placeholder: "Search Storage",
    scrollable: true,
    options: [
      { name: "64 GB", count: 20 },
      { name: "128 GB", count: 67 },
      { name: "256 GB", count: 72 },
      { name: "512 GB", count: 26 },
      { name: "Above 512 GB", count: 0 },
      { name: "Under 512 MB", count: 6 },
      { name: "Under 1 GB", count: 1 },
      { name: "1 TB", count: 8 },
    ],
  },
  {
    title: "Battery Type",
    placeholder: "Search Battery Type",
    options: [
      { name: "Lithium-ion (Li-Ion)", count: 135 },
      { name: "Lithium Polymer (Li-Po)", count: 69 },
      { name: "Nickel-cadmium", count: 0 },
      { name: "Nickel-metal hydride", count: 0 },
      { name: "Silicon-Carbon (Si/C)", count: 0 },
    ],
  },
];

type FilterSectionProps = {
  group: FilterGroup;
  selected: string[];
  onToggle: (name: string) => void;
};

function FilterSection({
  group,
  selected,
  onToggle,
}: FilterSectionProps) {
  const [search, setSearch] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const filteredOptions = useMemo(
    () =>
      group.options.filter((option) =>
        option.name.toLowerCase().includes(search.toLowerCase())
      ),
    [group.options, search]
  );

  function scrollList(direction: "up" | "down") {
    listRef.current?.scrollBy({
      top: direction === "up" ? -90 : 90,
      behavior: "smooth",
    });
  }

  return (
    <section className="min-w-0">
      <h2 className="border-b border-slate-300 pb-1 text-[12px] font-bold leading-5 text-primary">
        {group.title}
      </h2>

      <Input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={group.placeholder}
        aria-label={group.placeholder}
        className="mt-2 h-[24px] rounded-[2px] border-slate-300 px-1.5 text-[11px] shadow-none placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-blue-500"
      />

      <div className="relative mt-3">
        <div
          ref={listRef}
          className={`space-y-1 overflow-y-auto pr-5 ${
            group.scrollable ? "max-h-[144px]" : "max-h-none"
          }`}
        >
          {filteredOptions.map((option) => {
            const checked = selected.includes(option.name);
            const unavailable = option.count === 0 && !checked;

            return (
              <label
                key={option.name}
                className={`flex min-h-[20px] cursor-pointer items-center gap-1.5 ${
                  unavailable ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => onToggle(option.name)}
                  className="h-[13px] w-[13px] shrink-0 rounded-[3px] border-slate-300 p-0 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                />

                <span className="min-w-0 text-[11px] font-semibold leading-4">
                  {option.name}
                </span>

                <span
                  className={`shrink-0 rounded-full px-1.5 py-[2px] text-[9px] font-bold leading-none text-white ${
                    option.count === 0 ? "bg-[#f08c9a]" : "bg-cyan-400"
                  }`}
                >
                  {option.count}
                </span>
              </label>
            );
          })}

          {filteredOptions.length === 0 && (
            <p className="py-2 text-[11px] text-slate-500">
              No matching options.
            </p>
          )}
        </div>

        {group.scrollable && (
          <div className="absolute right-0 top-0 flex h-full flex-col justify-between bg-white">
            <button
              type="button"
              aria-label={`Scroll ${group.title} up`}
              onClick={() => scrollList("up")}
              className="text-neutral-500 hover:text-neutral-800"
            >
              <ChevronUp size={17} />
            </button>

            <button
              type="button"
              aria-label={`Scroll ${group.title} down`}
              onClick={() => scrollList("down")}
              className="text-neutral-500 hover:text-neutral-800"
            >
              <ChevronDown size={17} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

type HardwareFiltersProps = {
  onFilterChange?: (filters: Record<string, string[]>) => void;
};

export default function RamFilter({
  onFilterChange,
}: HardwareFiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    setSelectedFilters(
      Object.fromEntries(
        filterGroups.map((group) => [
          group.title,
          readFilterUrlSelections(
            filterParamName(group.title),
            group.options.map((option) => option.name),
          ),
        ]),
      ),
    );
  }, []);

  function toggleOption(group: string, name: string) {
    const current = selectedFilters[group] ?? [];

    const next = current.includes(name) ? [] : [name];

    const updated = {
      ...selectedFilters,
      [group]: next,
    };

    setSelectedFilters(updated);
    updateFilterUrl({ [filterParamName(group)]: next });
    onFilterChange?.(updated);
  }

  return (
    <aside className="w-full max-w-[220px] space-y-3 bg-white p-2">
      {filterGroups.map((group) => (
        <FilterSection
          key={group.title}
          group={group}
          selected={selectedFilters[group.title] ?? []}
          onToggle={(name) => toggleOption(group.title, name)}
        />
      ))}
    </aside>
  );
}
