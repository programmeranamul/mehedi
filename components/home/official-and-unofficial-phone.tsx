"use client";

import type { LatestHomePhone } from "@/lib/api/products";
import { Container } from "../layout/container";
import PhoneCard from "../shared/phone-card";
import SectionHeader from "../shared/section-header";

interface OfficialAndUnofficialPhoneProps {
  officialPhones: LatestHomePhone[];
  unofficialPhones: LatestHomePhone[];
  officialPhonesError?: string;
  unofficialPhonesError?: string;
}

function OfficialAndUnofficialPhone({
  officialPhones,
  unofficialPhones,
  officialPhonesError,
  unofficialPhonesError,
}: OfficialAndUnofficialPhoneProps) {
  return (
    <Container className="mt-6">
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-border rounded">
          <SectionHeader text="Official Phones" link="/official-phones" />
          <PhoneGrid phones={officialPhones} error={officialPhonesError} />
        </div>

        <div className="border border-border rounded">
          <SectionHeader
            text="Unofficial Mobile Phones"
            link="/official-phones"
          />
          <PhoneGrid phones={unofficialPhones} error={unofficialPhonesError} />
        </div>
      </div>
    </Container>
  );
}

function PhoneGrid({
  phones,
  error,
}: {
  phones: LatestHomePhone[];
  error?: string;
}) {
  if (error) {
    return (
      <p role="alert" className="px-3 py-4 text-center text-sm text-red-700">
        {error}
      </p>
    );
  }

  if (phones.length === 0) {
    return (
      <p className="px-3 py-4 text-center text-sm text-gray-500">
        No phones found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2 px-3 py-3">
      {phones.slice(0, 6).map((phone) => (
        <PhoneCard key={phone.id} phone={phone} />
      ))}
    </div>
  );
}

export default OfficialAndUnofficialPhone;

