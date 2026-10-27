type FilterQueryValue = string | number | readonly string[] | null | undefined;

export const FILTERS_CHANGED_EVENT = "filterschange";

export function readFilterUrlValues(key: string): string[] {
  return new URLSearchParams(window.location.search)
    .getAll(key)
    .map((value) => normalizeFilterValue(value, key));
}

export function readFilterUrlValue(key: string): string | undefined {
  return readFilterUrlValues(key)[0];
}

export function readFilterUrlSelections(
  key: string,
  options: readonly string[],
): string[] {
  const values = new Set(readFilterUrlValues(key));
  return options.filter((option) =>
    values.has(normalizeFilterValue(option, key)),
  );
}

function normalizeFilterValue(value: string, key: string): string {
  if (key === "battery_type") {
    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export function updateFilterUrl(
  filters: Record<string, FilterQueryValue>,
): void {
  const url = new URL(window.location.href);

  for (const [key, value] of Object.entries(filters)) {
    url.searchParams.delete(key);

    if (Array.isArray(value)) {
      value.forEach((item) => {
        const normalized = normalizeFilterValue(item, key);
        if (normalized) {
          url.searchParams.append(key, normalized);
        }
      });
    } else if (value !== null && value !== undefined && value !== "") {
      url.searchParams.set(
        key,
        typeof value === "string"
          ? normalizeFilterValue(value, key)
          : String(value),
      );
    }
  }

  if (!Object.prototype.hasOwnProperty.call(filters, "page")) {
    url.searchParams.set("page", "1");
  }

  window.history.replaceState(
    window.history.state,
    "",
    `${url.pathname}${url.search}${url.hash}`,
  );

  window.dispatchEvent(new Event(FILTERS_CHANGED_EVENT));
}

export function filterParamName(title: string): string {
  return title
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .replace(/-/g, "_");
}
