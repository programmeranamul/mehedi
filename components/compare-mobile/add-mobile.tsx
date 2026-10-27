"use client";

import Image from "next/image";
import type { LatestHomePhone } from "@/lib/api/products";
import { formatPrice } from "@/lib/format";

const SLOT_COUNT = 4;

interface AddMobileProps {
  selectedPhones: (LatestHomePhone | null)[];
  onRemove: (index: number) => void;
}

export default function AddMobile({
  selectedPhones,
  onRemove,
}: AddMobileProps) {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white border border-gray-200 shadow-sm font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b border-gray-200 divide-y sm:divide-y-0 md:divide-x divide-gray-200">
        {Array.from({ length: SLOT_COUNT }, (_, index) => {
          const phone = selectedPhones[index];

          return (
            <div
              key={index}
              className="relative flex flex-col items-center justify-between p-4 min-h-[260px]"
            >
              {phone ? (
                <>
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-emerald-100/70 text-emerald-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                    <span>{phone.score}%</span>
                    <span className="text-[10px]">★</span>
                  </div>
                  <button
                    type="button"
                    aria-label={`Remove ${phone.name}`}
                    onClick={() => onRemove(index)}
                    className="absolute top-3 right-3 text-pink-300 hover:text-pink-500 transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="relative w-32 h-44 my-2">
                    <Image
                      src={phone.image}
                      alt={phone.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <h3 className="font-bold text-gray-700 text-sm leading-tight">
                      {phone.name}
                    </h3>
                    <p className="text-xs text-blue-600 mt-1">
                      {formatPrice(phone.price)}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex flex-1 items-center justify-center p-6">
                  <span className="w-full py-2.5 px-4 bg-blue-50/70 text-blue-800 rounded-full flex items-center justify-center gap-2 text-sm">
                    <svg
                      className="w-4 h-4 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" d="M12 8v8m-4-4h8" />
                    </svg>
                    <span>Add Mobile</span>
                  </span>
                </div>
              )}
              {index < SLOT_COUNT - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-10 items-center justify-center w-7 h-7 bg-gray-100 rounded-full border border-gray-200 text-gray-500 text-xs font-semibold tracking-tighter">
                  VS
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center p-4 bg-white">
        <button
          type="button"
          className="bg-amber-400/90 hover:bg-amber-500 text-white font-bold text-sm px-6 py-2.5 rounded shadow-sm tracking-wide transition-colors uppercase"
        >
          Compare Now
        </button>
      </div>
    </div>
  );
}
