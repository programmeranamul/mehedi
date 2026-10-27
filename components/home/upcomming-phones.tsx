import type { LatestHomePhone } from "@/lib/api/products";
import { Container } from "../layout/container";
import SectionHeader from "../shared/section-header";
import PhoneCard from "../shared/phone-card";

function UpcommingPhones({
  phones,
  error,
}: {
  phones: LatestHomePhone[];
  error?: string;
}) {
  return (
    <Container className="mt-6">
      <div className="border border-border rounded">
        <SectionHeader text="Upcoming Phones" link="/official-phones" />
        {error ? (
          <p role="alert" className="px-3 py-4 text-center text-sm text-red-700">
            {error}
          </p>
        ) : phones.length === 0 ? (
          <p className="px-3 py-4 text-center text-sm text-gray-500">
            No upcoming phones found.
          </p>
        ) : (
          <div className="grid grid-cols-6 gap-2 px-3 py-3">
            {phones.slice(0, 6).map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export default UpcommingPhones;
