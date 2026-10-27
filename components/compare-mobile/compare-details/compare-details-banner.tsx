import Image from "next/image";
import type { ComparedPhone } from "@/lib/api/products";
import { formatPrice } from "@/lib/format";

export default function CompareDetailsBanner({
  phones,
}: {
  phones: ComparedPhone[];
}) {
  return (
    <div className="w-full max-w-6xl mx-auto my-6 bg-white border border-gray-200 shadow-sm font-sans text-sm text-gray-700">
      <div className="bg-gray-100/80 px-4 py-3 border-b border-gray-200">
        <h1 className="text-base font-bold text-gray-800 flex flex-wrap items-center gap-1.5">
          {phones.map((phone, index) => (
            <span key={phone.id} className="contents">
              {index > 0 && (
                <span className="text-xs font-normal text-gray-400">vs</span>
              )}
              <span>{phone.name}</span>
            </span>
          ))}
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse">
          <tbody>
            <tr className="border-b border-gray-200">
              <th
                scope="row"
                className="w-36 bg-gray-100/70 font-bold text-gray-700 p-3 text-left border-r border-gray-200"
              >
                Product Image
              </th>
              {phones.map((phone, index) => (
                <td
                  key={phone.id}
                  className="p-4 border-r border-gray-200 relative align-middle"
                >
                  {index < phones.length - 1 && (
                    <div className="hidden sm:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-10 items-center justify-center w-7 h-7 bg-gray-100 rounded-full border border-gray-200 text-gray-400 text-[11px] font-semibold">
                      VS
                    </div>
                  )}
                  <div className="relative w-36 h-40 mx-auto">
                    <Image
                      src={phone.image}
                      alt={phone.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </td>
              ))}
            </tr>
            {[
              {
                label: "Product Name",
                value: (phone: ComparedPhone) => phone.name,
              },
              {
                label: "Price",
                value: (phone: ComparedPhone) =>
                  phone.price === null
                    ? phone.priceStatus
                    : `${formatPrice(phone.price)} (${phone.priceStatus})`,
              },
              {
                label: "Score",
                value: (phone: ComparedPhone) => `${phone.score}%`,
              },
              {
                label: "Brand",
                value: (phone: ComparedPhone) => phone.brand,
              },
              {
                label: "Variant",
                value: (phone: ComparedPhone) => phone.variant,
              },
              {
                label: "Market Status",
                value: (phone: ComparedPhone) => phone.marketStatus,
              },
            ].map((row) => (
              <tr key={row.label} className="border-b border-gray-200 last:border-b-0">
                <th
                  scope="row"
                  className="bg-gray-100/70 font-bold text-gray-700 p-3 text-left border-r border-gray-200"
                >
                  {row.label}
                </th>
                {phones.map((phone) => (
                  <td
                    key={phone.id}
                    className="p-3 border-r border-gray-200 text-gray-600 font-medium"
                  >
                    {row.value(phone)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
