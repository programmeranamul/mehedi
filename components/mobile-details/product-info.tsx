
import type { MobileDetailData } from "@/lib/types/mobile-detail";

export default function ProductInfo({ data }: { data: MobileDetailData }) {
  const { title, rows } = data.productInfo;

  return (
    <section className="border border-slate-300 bg-white">
      <div className="border-b border-slate-300 px-2 py-1.5">
        <h2 className="text-xs font-bold text-slate-700">
          {title}
        </h2>
      </div>

      <div className="p-1.5 sm:p-2">
        <div className="overflow-hidden rounded-sm border border-slate-200">
          {rows.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[120px_minmax(0,1fr)] border-b border-slate-200 last:border-b-0 sm:grid-cols-[135px_minmax(0,1fr)]"
            >
              <div className="bg-slate-50 px-2 py-1.5 text-[11px] text-slate-700">
                {item.label}
              </div>

              <div className="px-2 py-1.5 text-[11px] text-slate-600">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}