import { Fragment } from "react";
import ComparisonBuilder from "@/components/compare-mobile/compare-details/ComparisonBuilder";
import { Container } from "@/components/layout/container";
import {
  getPhoneComparison,
  getProductsPage,
  type LatestHomePhone,
  type PhoneComparison,
} from "@/lib/api/products";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

// function parseSlugs(value: string | string[] | undefined): string[] {
//   const rawValue = Array.isArray(value) ? value.join(",") : value ?? "";
//   return [...new Set(rawValue.split(",").map((slug) => slug.trim()).filter(Boolean))];
// }


function parseSlugs(input) {
  if (!input) return [];

  // If it's an array, handle each item (e.g., catch-all routes or multi-value query params)
  if (Array.isArray(input)) {
    return input.flatMap((item) => (typeof item === 'string' ? item.split('-vs-') : item));
  }

  // If it's a string, split by '-vs-'
  if (typeof input === 'string') {
    return input.split('-vs-');
  }

  return [];
}
export default async function Page({ params, searchParams }: PageProps) {
  const [routeParams, query] = await Promise.all([params, searchParams]);
  const slugs = parseSlugs(query.slugs || routeParams.slug);

  console.log("slugs", slugs)

  let comparison: PhoneComparison | null = null;
  let comparisonError: string | undefined;
  let phones: LatestHomePhone[] = [];
  let productsError: string | undefined;

  const [comparisonResult, productsResult] = await Promise.allSettled([
    slugs.length >= 2 && slugs.length <= 4
      ? getPhoneComparison(slugs)
      : Promise.resolve(null),
    getProductsPage(1, 10),
  ]);

  

  if (comparisonResult.status === "fulfilled") {
    comparison = comparisonResult.value;
    if (!comparison) {
      comparisonError =
        "Provide between two and four phone slugs in the comparison URL.";
    }
  } else {
    console.error("Failed to load phone comparison.", comparisonResult.reason);
    comparisonError = "Unable to load this comparison right now.";
  }

  if (productsResult.status === "fulfilled") {
    phones = productsResult.value.phones;
  } else {
    console.error("Failed to load competitor products.", productsResult.reason);
    productsError = "Unable to load competitors right now.";
  }

  return (
    <Container>
      <ComparisonBuilder
        phones={phones}
        comparedPhones={comparison?.phones ?? []}
        error={productsError}
      >
        {comparison ? (
          <div className="min-w-0 flex-1 overflow-hidden rounded-sm border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-100/70">
                    <th
                      scope="col"
                      className="w-1/4 p-3.5 text-sm font-bold text-gray-600"
                    >
                      Specification
                    </th>
                    {comparison.phones.map((phone) => (
                      <th
                        key={phone.id}
                        scope="col"
                        className="min-w-40 border-l border-gray-200 p-3.5 text-center text-sm font-bold text-gray-700"
                      >
                        {phone.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.specificationGroups.map((group) => (
                    <Fragment key={group.key}>
                      <tr
                        key={`${group.key}-heading`}
                        className="border-b-2 border-red-500/80 bg-white"
                      >
                        <th
                          scope="colgroup"
                          colSpan={comparison.phones.length + 1}
                          className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wide text-red-600"
                        >
                          {group.title}
                        </th>
                      </tr>
                      {group.items.map((item) => (
                        <tr
                          key={`${group.key}-${item.key}`}
                          className="border-b border-gray-200 last:border-b-0"
                        >
                          <th
                            scope="row"
                            className="w-1/4 bg-gray-100/70 p-3.5 text-sm font-bold text-gray-600"
                          >
                            {item.label}
                          </th>
                          {comparison.phones.map((phone, index) => (
                            <td
                              key={phone.id}
                              className="min-w-40 border-l border-gray-200 p-3.5 text-sm text-gray-600"
                            >
                              {item.values[index] || "Not specified"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p
            role="alert"
            className="min-w-0 flex-1 p-4 text-center text-sm text-red-700"
          >
            {comparisonError}
          </p>
        )}
      </ComparisonBuilder>
    </Container>
  );
}
