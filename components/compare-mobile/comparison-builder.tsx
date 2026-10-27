"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import type { LatestHomePhone } from "@/lib/api/products";
import AddMobile from "./add-mobile";
import Competitors from "./competitors";

const SLOT_COUNT = 4;

interface ComparisonBuilderProps {
  phones: LatestHomePhone[];
  error?: string;
  children: ReactNode;
}

export default function ComparisonBuilder({
  phones,
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

  const selectedPhoneIds = selectedPhones.flatMap((phone) =>
    phone ? [phone.id] : [],
  );

  return (
    <>
      <AddMobile selectedPhones={selectedPhones} onRemove={removePhone} />
      <div className="w-full bg-gray-50/50">
        <div className="flex flex-col lg:flex-row gap-6">
          <Competitors
            phones={phones}
            selectedPhoneIds={selectedPhoneIds}
            error={error}
            onCompare={addPhone}
          /> 
          {children}
        </div>
      </div>
    </>
  );
}
