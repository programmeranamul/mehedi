

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
};

type SpecificationFiltersProps = {
  onFilterChange?: (filters: Record<string, string[]>) => void;
};

const filterGroups: FilterGroup[] = [
  {
    title: "Camera Resolution",
    placeholder: "Search Camera Resolution",
    options: [
      { name: "23MP", count: 0 },
      { name: "32MP", count: 0 },
      { name: "40MP", count: 0 },
      { name: "48MP", count: 5 },
      { name: "50MP", count: 124 },
      { name: "64MP", count: 2 },
      { name: "100MP", count: 0 },
    ],
  },
  {
    title: "Chipset Type",
    placeholder: "Search Chipset Type",
    options: [
      { name: "Bionic", count: 2 },
      { name: "Exynos", count: 6 },
      { name: "Kirin", count: 14 },
      { name: "MediaTek", count: 79 },
      { name: "Others", count: 7 },
      { name: "Qualcomm", count: 54 },
      { name: "Unisoc", count: 26 },
    ],
  },
  {
    title: "Connectivity",
    placeholder: "Search Connectivity",
    options: [
      { name: "Bluetooth", count: 204 },
      { name: "FM Radio", count: 46 },
      { name: "GPS", count: 168 },
      { name: "Infrared", count: 81 },
      { name: "NFC", count: 114 },
      { name: "USB Type-C", count: 192 },
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
      top: direction === "up" ? -100 : 100,
      behavior: "smooth",
    });
  }

  return (
    <section className="min-w-0">
      <h2 className="border-b border-slate-300 pb-2 text-sm font-bold text-primary">
        {group.title}
      </h2>

      <div className="mt-2">
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={group.placeholder}
          aria-label={group.placeholder}
          className="h-[32px] rounded border-slate-300 bg-white px-2 text-xs shadow-none placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-blue-500"
        />
      </div>

      <div className="relative mt-3">
        <div
          ref={listRef}
          className="max-h-[184px] space-y-1 overflow-y-auto pr-5"
        >
          {filteredOptions.map((option) => {
            const isSelected = selected.includes(option.name);
            const isUnavailable = option.count === 0 && !isSelected;

            return (
              <label
                key={option.name}
                className={`flex min-h-[24px] cursor-pointer items-center gap-2 ${
                  isUnavailable ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() => onToggle(option.name)}
                  className="h-4 w-4 shrink-0 rounded-[4px] border-slate-300 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                />

                <span className="text-[14px] font-semibold leading-5">
                  {option.name}
                </span>

                <span
                  className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white ${
                    option.count === 0 ? "bg-[#f08c9a]" : "bg-cyan-400"
                  }`}
                >
                  {option.count}
                </span>
              </label>
            );
          })}

          {filteredOptions.length === 0 && (
            <p className="py-2 text-xs text-slate-500">
              No matching options.
            </p>
          )}
        </div>

        <div className="absolute right-0 top-0 flex h-full flex-col justify-between bg-white">
          <button
            type="button"
            onClick={() => scrollList("up")}
            aria-label={`Scroll ${group.title} up`}
            className="text-neutral-500 hover:text-neutral-800"
          >
            <ChevronUp size={18} />
          </button>

          <button
            type="button"
            onClick={() => scrollList("down")}
            aria-label={`Scroll ${group.title} down`}
            className="text-neutral-500 hover:text-neutral-800"
          >
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function CameraFilter({
  onFilterChange,
}: SpecificationFiltersProps) {
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

  function toggleOption(groupTitle: string, name: string) {
    const current = selectedFilters[groupTitle] ?? [];

    const next = current.includes(name) ? [] : [name];

    const updated = {
      ...selectedFilters,
      [groupTitle]: next,
    };

    setSelectedFilters(updated);
    updateFilterUrl({ [filterParamName(groupTitle)]: next });
    onFilterChange?.(updated);
  }

  return (
    <aside className="w-full max-w-[303px] space-y-4 bg-white p-4">
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
