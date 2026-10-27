
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  Smartphone,
} from "lucide-react";

type Phone = {
  name: string;
  image: string;
  price: string;
  status?: string;
  official?: boolean;
  href?: string;
};

type PhoneSidebarSectionProps = {
  title: string;
  actionLabel?: string;
  actionHref?: string;
  phones: Phone[];
  error?: string;
};

export default function PhoneSidebarSection({
  title,
  actionLabel = "View More",
  actionHref = "/mobile-phones",
  phones,
  error,
}: PhoneSidebarSectionProps) {
  return (
    <section className="border border-gray-300 bg-white">
      <header className="flex items-center justify-between gap-2 border-b border-gray-300 px-3 py-2">
        <h2 className="text-base font-bold text-gray-600">{title}</h2>

        <Link
          href={actionHref}
          className="flex shrink-0 items-center gap-0.5 text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          {actionLabel}
          <ChevronRight size={16} />
        </Link>
      </header>

      {error ? (
        <p role="alert" className="p-3 text-sm text-red-700">
          {error}
        </p>
      ) : phones.length > 0 ? (
        <div className="grid grid-cols-3 gap-x-2 gap-y-4 p-2">
          {phones.map((phone) => (
            <Link
              href={phone.href ?? "/mobile-phones"}
              key={phone.href ?? phone.name}
              className="flex min-w-0 flex-col items-center text-center"
            >
              <div className="relative h-[100px] w-full max-w-[100px]">
                <Image
                  src={phone.image}
                  alt={phone.name}
                  fill
                  sizes="100px"
                  className="object-contain"
                />
              </div>

              <h3 className="mt-1 line-clamp-2 min-h-8 text-xs leading-4 text-gray-600">
                {phone.name}
              </h3>

              <p className="text-sm font-medium text-blue-600">
                ৳{phone.price}
              </p>

              <p className="text-[10px] text-orange-600">
                ({phone.status ?? (phone.official ? "Official" : "Unofficial")})
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="p-3 text-sm text-gray-500">No phones found.</p>
      )}
    </section>
  );
}