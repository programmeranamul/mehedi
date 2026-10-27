import Image from "next/image";
import Link from "next/link";
import React from "react";

 function FeaturesPhone({phones}) {

  return (
    <>
      <section className="w-full border border-gray-200 bg-white p-3">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-gray-200 px-2 pb-2">
          <h2 className="truncate text-lg font-extrabold uppercase tracking-tight text-gray-900 sm:text-xl">
            Most Popular Mobile Phones In...
          </h2>

          <Link
            href="/mobile-phones"
            className="shrink-0 text-lg font-bold text-gray-900 hover:text-blue-700 sm:text-xl"
          >
            View More
          </Link>
        </div>
        <div className="mt-2 flex flex-col gap-1.5">
          {phones.slice(0,3).map((phone) => (
            <Link
              key={phone.id}
              href={`/mobile-phones/${phone.id}`}
              className="flex min-h-[82px] items-center gap-3 border border-gray-200 bg-white px-3 py-2 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-[62px] w-[60px] shrink-0">
                <Image
                  src={phone.image}
                  alt={phone.name}
                  fill
                  sizes="60px"
                  className="object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base font-medium text-gray-700 sm:text-lg">
                  {phone.name}
                </h3>

                <div className="mt-1 flex flex-wrap items-baseline gap-x-1">
                  <span className=" font-bold leading-tight text-blue-700 ">
                    ৳{phone.price}
                  </span>

                  <span className="text-xs text-orange-500">(Official)</span>
                </div>
              </div>

              <div className="flex h-[58px] w-[45px] shrink-0 flex-col items-center justify-center rounded-sm bg-emerald-700 text-center text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)]">
                <span className="text-[10px] font-semibold leading-[11px]">
                  SPEC
                </span>
                <span className="text-[10px] font-semibold leading-[11px]">
                  SCORE
                </span>
                <span className="mt-0.5 text-lg font-extrabold leading-5">
                  82%
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default FeaturesPhone;
