"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BrandMobileHeader() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-white px-4 py-4 text-[#555] sm:px-4 sm:py-4">
      <h1 className="mb-4 text-[22px] font-medium leading-tight text-[#222]">
        Brand Mobile Price in Bangladesh 2026{" "}
      </h1>

      <div
        className={`relative overflow-hidden text-[16px] leading-[18px] ${
          expanded ? "" : "max-h-[240px]"
        }`}
      >
        <p className="mb-4">
          <strong>Official Mobile Phones:</strong> The MobileDokan official
          phone page is a platform where you can get all the details about all
          the official Mobile price in Bangladesh. Are you searching for an
          official mobile phone in Bangladesh to purchase? This page is your
          ultimate guide to discovering the best deals in the official Mobile
          market. From this page, you can check out these phones with a simple
          click. It will not just save you time but also help you to find the
          best official phone for you.
        </p>

        <h2 className="mb-2 text-[23px] font-medium leading-tight">
          What is an Official Phone in Bangladesh
        </h2>

        <p className="mb-4">
          An official phone in Bangladesh is one that has been approved by the
          Bangladesh Telecommunication Regulatory Commission (BTRC). These
          phones come with a valid International Mobile Equipment Identity
          (IMEI) number, ensuring they are not counterfeit.
        </p>

        <p className="mb-4">
          Official phones have passed all compliance tests, including safety,
          network compatibility, and consumer protection standards. They are
          sold by authorized dealers who provide valid warranties and
          after-sales services, ensuring consumers’ peace of mind. Click here to
          know more about official phones.
        </p>

        <h2 className="mb-2 text-[23px] font-medium leading-tight">
          Why You Should Purchase an Official Phone
        </h2>

        <p className="mb-4">
          Purchasing an official phone in Bangladesh is synonymous with
          reliability. These phones guarantee access to nationwide service
          centers and customer care. They come with a manufacturer’s warranty,
          ensuring repair or replacement in case of defects.
        </p>

        <p className="mb-4">
          Official phones also ensure compliance with local network frequencies,
          providing optimal connectivity and performance. Moreover, they uphold
          the resale value and are a testament to the buyer’s support for
          legitimate business practices.
        </p>

        <h2 className="mb-2 text-[23px] font-medium leading-tight">
          Why Check Mobiledokan Official Phone Price Page
        </h2>

        <p className="mb-4">
          Mobiledokan.com stands out as the premier platform for finding
          official phones in Bangladesh. It offers an up-to-date and
          meticulously curated price list, reflecting the latest market trends.
          The website provides detailed specifications and user reviews,
          empowering consumers to make informed decisions.
        </p>

        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          className="inline-flex items-center gap-1 py-1 text-[14px] text-blue-600 hover:text-blue-800"
        >
          {expanded ? "See Less" : "See More"}
          {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>
      </div>
    </section>
  );
}
