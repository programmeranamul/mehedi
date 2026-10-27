"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const formatPrice = (price: number) => `৳${price.toLocaleString("en-US")}`;

interface Phone {
  id: string | number;
  name: string;
  image: string;
  score: number;
  oldPrice?: number;
  price: number;
  official: boolean;
  status?: string;
}

interface PhoneCardProps {
  phone: Phone;
}

export default function PhoneCard({ phone }: PhoneCardProps) {
  const [isSelected, setIsSelected] = useState(false);

  // Load the initial compare state from sessionStorage on mount
  useEffect(() => {
    const savedSession = sessionStorage.getItem(`compare-${phone.id}`);
    if (savedSession) {
      setIsSelected(JSON.parse(savedSession));
    }
  }, [phone.id]);

  const handleToggleCompare = () => {
    const newState = !isSelected;
    setIsSelected(newState);
    // Save state to sessionStorage
    sessionStorage.setItem(`compare-${phone.id}`, JSON.stringify(newState));
  };

  return (
    <article className="relative flex min-w-0 flex-col border border-gray-200 bg-white shadow-sm">
      {/* Spec Score Badge */}
      <div
        className={`absolute left-0 top-0 z-10 border-b-4 rounded-br-[5px] flex w-9 flex-col items-center px-0.5 py-0.5 ${
          phone.score < 72
            ? "bg-[#ffc107] text-black border-[#c99700]"
            : "bg-emerald-700 border-[#004a28] text-white"
        }`}
      >
        <span className="text-[9px] leading-[10px]">SPEC</span>
        <span className="text-[9px] leading-[10px]">SCORE</span>
        <span className="text-sm font-bold leading-5">{phone.score}%</span>
      </div>

      {/* Product Image */}
      <div className="relative mx-auto mt-2 h-44 w-full max-w-[150px]">
        <Image
          src={phone.image}
          alt={phone.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1280px) 25vw, 16vw"
          className="object-contain"
        />
      </div>

      {/* Product Name */}
      <h3 className="mt-1 flex min-h-12 items-start justify-center px-2 text-center text-sm font-medium leading-5 text-gray-700">
        {phone.name}
      </h3>

      {/* Pricing */}
      <div className="mt-auto flex min-h-10 flex-wrap items-baseline justify-center gap-x-1 px-1 pb-2 text-center">
        {phone.price > 0 && (
          <>
            {phone.oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(phone.oldPrice)}
              </span>
            )}
            <span className="text-base font-bold text-blue-700">
              {formatPrice(phone.price)}
            </span>
          </>
        )}
        <span className="text-[10px] text-orange-600">
          ({phone.status ?? (phone.official ? "Official" : "Unofficial")})
        </span>
      </div>

      {/* Compare Checkbox */}
      <label className="flex min-h-[30px] cursor-pointer items-center justify-center gap-1 border-t border-gray-200 bg-gray-100 px-1 text-center">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleToggleCompare}
          className="h-3.5 w-3.5 shrink-0 accent-blue-600"
        />

        <span
          className={`text-xs ${
            isSelected ? "text-red-600" : "text-gray-700"
          }`}
        >
          {isSelected ? "Remove from Compare" : "Add to Compare"}
        </span>
      </label>
    </article>
  );
}