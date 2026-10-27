"use client";

import Image from "next/image";
import type { LatestHomePhone } from "@/lib/api/products";
import { formatPrice } from "@/lib/format";

interface CompetitorsProps {
  phones: LatestHomePhone[];
  selectedPhoneIds: string[];
  error?: string;
  onCompare: (phone: LatestHomePhone) => void;
}

export default function Competitors({
  phones,
  selectedPhoneIds,
  error,
  onCompare,
}: CompetitorsProps) {
  const hasAvailableSlot = selectedPhoneIds.length < 4;

  return (
    <div className="w-full lg:w-80 bg-white border border-gray-200 shadow-sm">
      <div className="border-b border-gray-200 px-4 py-3 bg-gray-50">
        <h2 className="font-bold text-gray-700 uppercase text-sm tracking-wide">
          Competitors
        </h2>
      </div>
      {error ? (
        <p role="status" className="p-4 text-center text-sm text-gray-500">
          {error}
        </p>
      ) : phones.length ? (
        <div className="divide-y divide-gray-200">
          {phones.map((phone) => {
            const isSelected = selectedPhoneIds.includes(phone.id);
            const isDisabled = isSelected || !hasAvailableSlot;

            return (
              <div
                key={phone.id}
                className="p-3 flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-12 flex-shrink-0">
                    <Image
                      src={phone.image}
                      alt={phone.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-800 line-clamp-1">
                      {phone.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-700 mt-0.5">
                      {formatPrice(phone.price)}
                    </p>
                    <p className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          phone.marketStatus === "Upcoming"
                            ? "bg-amber-500"
                            : "bg-emerald-600"
                        }`}
                      />
                      {phone.marketStatus}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  disabled={isDisabled}
                  onClick={() => onCompare(phone)}
                  className="px-3 py-1 text-xs font-medium text-blue-700 border border-blue-300 rounded hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 transition-colors whitespace-nowrap"
                >
                  {isSelected ? "Added" : "+ Compare"}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="p-4 text-center text-sm text-gray-500">
          No competitors available.
        </p>
      )}
    </div>
  );
}
