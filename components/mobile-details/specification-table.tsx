import { CheckCircle2 } from "lucide-react"; // assuming lucide-react is used

export interface SpecificationItem {
  label: string;
  value: string;
  status?: boolean;
}

export interface SpecificationSubGroup {
  title: string;
  items: readonly SpecificationItem[];
}

export interface SpecificationGroup {
  title: string;
  score?: number;
  items?: readonly SpecificationItem[];
  subgroups?: readonly SpecificationSubGroup[];
}

export function SpecificationTable({
  title,
  groups,
}: {
  title: string;
  groups: readonly SpecificationGroup[];
}) {
  return (
    <section className="border border-gray-300 bg-white">
      <h2 className="border-b border-gray-300 px-2 py-2 text-base font-bold text-gray-600">
        {title}
      </h2>

      <div>
        {groups.map((group) => (
          <div
            key={group.title}
            className="grid grid-cols-1 border-b border-gray-300 last:border-b-0 sm:grid-cols-[130px_minmax(0,1fr)]"
          >
            {/* Group heading and score */}
            <div className="flex flex-row items-center justify-between gap-3 px-3 py-2 sm:flex-col sm:items-center sm:justify-start">
              <h3 className="text-center text-sm font-semibold text-blue-700">
                {group.title}
              </h3>

              {group.score !== undefined && (
                <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full border-[7px] border-emerald-700 text-2xl text-emerald-700">
                  {group.score}
                </div>
              )}
            </div>

            {/* Specification rows or Subgroups */}
            <div className="min-w-0 p-1.5 sm:pr-2">
              {group.subgroups ? (
                // Render nested subgroups (e.g., Primary & Selfie Cameras)
                <div className="space-y-4">
                  {group.subgroups.map((subgroup, idx) => (
                    <div key={subgroup.title} className={idx > 0 ? "pt-2" : ""}>
                      <h4 className="border-b border-gray-200 pb-1 text-sm font-semibold text-gray-700">
                        {subgroup.title}
                      </h4>
                      <div className="mt-1 border-l border-gray-200">
                        {subgroup.items.map((item) => (
                          <SpecRow key={item.label} item={item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Render standard flat items
                <div className="border-l border-gray-200">
                  {group.items?.map((item) => (
                    <SpecRow key={item.label} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Helper sub-component to keep code DRY
function SpecRow({ item }: { item: SpecificationItem }) {
  return (
    <div className="grid grid-cols-[38%_minmax(0,1fr)] border-b border-gray-200 last:border-b-0">
      <div className="bg-gray-50 px-2.5 py-2 text-sm font-semibold text-gray-600">
        {item.label}
      </div>
      <div className="flex min-w-0 items-center gap-1.5 px-2.5 py-2 text-sm text-gray-500">
        {item.status && (
          <CheckCircle2
            size={16}
            className="shrink-0 fill-emerald-600 text-white"
          />
        )}
        <span className="break-words">{item.value}</span>
      </div>
    </div>
  );
}