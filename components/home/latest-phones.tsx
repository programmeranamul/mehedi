
"use client";
import PhoneCard from "../shared/phone-card";
import type { LatestHomePhone } from "@/lib/api/products";

export default function LatestPhones({
  phones,
  error,
}: {
  phones: LatestHomePhone[];
  error?: string;
}) {
  if (error) {
    return (
      <p role="alert" className="py-4 text-center text-sm text-red-700">
        {error}
      </p>
    );
  }

  return (
    <div className="w-full">
      {phones.length > 0 ? (
        <div className="grid grid-cols-6 gap-x-2 gap-y-3">
          {phones.map((phone) => (
          <PhoneCard
            key={phone.id}
            phone={phone}
          />
          ))}
        </div>
      ) : (
        <p className="py-4 text-center text-sm text-gray-500">
          No phones found.
        </p>
      )}
    </div>
  );
}
