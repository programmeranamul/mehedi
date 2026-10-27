"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import type { ComparedPhone, LatestHomePhone } from "@/lib/api/products";
import Competitors from "../competitors";
import CompareDetailsBanner from "./compare-details-banner";

const SLOT_COUNT = 4;

interface ComparisonBuilderProps {
  phones: LatestHomePhone[];
  comparedPhones: ComparedPhone[];
  error?: string;
  children: ReactNode;
}

export default function ComparisonBuilder({
  phones,
  comparedPhones,
  error,
  children,
}: ComparisonBuilderProps) {
  const [selectedPhones, setSelectedPhones] = useState<
    (LatestHomePhone | null)[]
  >(() => Array.from({ length: SLOT_COUNT }, () => null));

  function addPhone(phone: LatestHomePhone) {
    setSelectedPhones((current) => {
      if (
        current.some((selected) => selected?.id === phone.id) ||
        current.every((selected) => selected !== null)
      ) {
        return current;
      }

      const emptyIndex = current.findIndex((selected) => selected === null);
      const next = [...current];
      next[emptyIndex] = phone;
      return next;
    });
  }

  function removePhone(index: number) {
    setSelectedPhones((current) =>
      current.map((phone, slotIndex) => (slotIndex === index ? null : phone)),
    );
  }

  const selectedPhoneIds = [
    ...new Set([
      ...comparedPhones.map((phone) => phone.id),
      ...selectedPhones.flatMap((phone) => (phone ? [phone.id] : [])),
    ]),
  ];

  return (
    <>
      {comparedPhones.length > 0 && (
        <CompareDetailsBanner phones={comparedPhones} />
      )}
      <div className="w-full  text-gray-700 bg-white">
        <div className="flex flex-col lg:flex-row gap-6">
          {children}

          <div className="w-full lg:w-80 flex-shrink-0">
            <Competitors
              phones={phones}
              selectedPhoneIds={selectedPhoneIds}
              error={error}
              onCompare={addPhone}
            />

            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Competitors
            </h2>

            {/* <div className="space-y-3">
              {competitors.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-white border border-gray-200 rounded-sm shadow-sm flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-14 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-gray-700">
                        {item.name}
                      </h3>
                      <p className="text-xs font-bold text-blue-600 mt-0.5">
                        {item.price}
                      </p>
                      <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        {item.status}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-500 rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap"
                  >
                    + Compare
                  </button>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
