

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
  placeholder?: string;
  scrollable?: boolean;
  options: FilterOption[];
};

type DisplayNetworkFiltersProps = {
  onFilterChange?: (filters: Record<string, string[]>) => void;
};

const filterGroups: FilterGroup[] = [
  {
    title: "Display Size",
    options: [
      { name: "4.1 - 5 inches", count: 0 },
      { name: "5.1 - 6 inches", count: 0 },
      { name: "6.1 - 7.0 inches", count: 178 },
      { name: "Above 7 inches", count: 7 },
      { name: "Under 4 inches", count: 19 },
    ],
  },
  {
    title: "Network",
    options: [
      { name: "2G", count: 17 },
      { name: "3G", count: 0 },
      { name: "4G", count: 64 },
      { name: "5G", count: 123 },
    ],
  },
  {
    title: "OS",
    placeholder: "Search OS",
    scrollable: true,
    options: [
      { name: "Android", count: 173 },
      { name: "Featurephone", count: 17 },
      { name: "Java", count: 0 },
      { name: "Symbian", count: 0 },
      { name: "Windows", count: 0 },
      { name: "iOS", count: 2 },
      { name: "Harmony", count: 6 },
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

  const scroll = (direction: "up" | "down") => {
    listRef.current?.scrollBy({
      top: direction === "up" ? -100 : 100,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-w-0">
      <h2 className="border-b border-slate-300 pb-2 text-sm font-bold text-primary">
        {group.title}
      </h2>

      {group.placeholder && (
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={group.placeholder}
          aria-label={group.placeholder}
          className="mt-2 h-[31px] rounded border-slate-300 px-2 text-xs shadow-none focus-visible:ring-1 focus-visible:ring-blue-500"
        />
      )}

      <div className="relative mt-3">
        <div
          ref={listRef}
          className={`space-y-1 overflow-y-auto pr-5 ${
            group.scrollable ? "max-h-[184px]" : "max-h-none"
          }`}
        >
          {filteredOptions.map((option) => {
            const checked = selected.includes(option.name);
            const unavailable = option.count === 0 && !checked;

            return (
              <label
                key={option.name}
                className={`flex min-h-[24px] cursor-pointer items-center gap-2 ${
                  unavailable ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                <Checkbox
                  checked={checked}
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

        {group.scrollable && (
          <div className="absolute right-0 top-0 flex h-full flex-col justify-between bg-white">
            <button
              type="button"
              aria-label="Scroll up"
              onClick={() => scroll("up")}
              className="text-neutral-500 hover:text-neutral-800"
            >
              <ChevronUp size={18} />
            </button>

            <button
              type="button"
              aria-label="Scroll down"
              onClick={() => scroll("down")}
              className="text-neutral-500 hover:text-neutral-800"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function DisplayFilters({
  onFilterChange,
}: DisplayNetworkFiltersProps) {
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

    const updated = { ...selectedFilters, [group]: next };

    setSelectedFilters(updated);
    updateFilterUrl({ [filterParamName(group)]: next });
    onFilterChange?.(updated);
  }

  return (
    <aside className="w-full max-w-[291px] space-y-4 bg-white p-4">
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
