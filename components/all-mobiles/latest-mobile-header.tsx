


"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  FILTERS_CHANGED_EVENT,
  readFilterUrlSelections,
  updateFilterUrl,
} from "./filter-url";

export default function LatestMobileHeader() {
  const [expanded, setExpanded] = useState(false);
  const [phoneType, setPhoneType] = useState<"official" | "unofficial" | null>(
    null,
  );

  useEffect(() => {
    function syncPhoneType() {
      const selectedStatuses = readFilterUrlSelections("market_status", [
        "Official",
        "Unofficial",
      ]);
      const selectedStatus = selectedStatuses[0]?.toLowerCase();
      setPhoneType(
        selectedStatus === "official" || selectedStatus === "unofficial"
          ? selectedStatus
          : null,
      );
    }

    syncPhoneType();
    window.addEventListener(FILTERS_CHANGED_EVENT, syncPhoneType);
    window.addEventListener("popstate", syncPhoneType);

    return () => {
      window.removeEventListener(FILTERS_CHANGED_EVENT, syncPhoneType);
      window.removeEventListener("popstate", syncPhoneType);
    };
  }, []);

  function togglePhoneType(type: "official" | "unofficial") {
    const selected = phoneType === type ? null : type;
    setPhoneType(selected);
    updateFilterUrl({ market_status: selected ? [selected] : [] });
  }

  return (
    <section className="w-full bg-white px-4 py-4 text-[#555] sm:px-4 sm:py-4">
      <h1 className="mb-4 text-[22px] font-medium leading-tight text-[#222]">
        Latest Mobile Phones in Bangladesh 2026
      </h1>

      <div
        className={`relative overflow-hidden text-[16px] leading-[18px] ${
          expanded ? "" : "max-h-[240px]"
        }`}
      >
        <p className="mb-4">
          <strong>
            Latest Mobile Phone Prices in Bangladesh:
          </strong>{" "}
          The demand for the latest mobile phones has been very high recently.
          Are you that person who is also looking for the latest mobile phone
          price in Bangladesh 2026? Good news for you! You are at the right
          place and at the right time. This page is made only for you so that
          you can get a complete idea about the latest smartphones that are
          available in the market.
        </p>

        <p className="mb-4">
          We try to share the latest smartphones that are released in between
          6 months. You can also sort those phones by their Popularity, High
          Price, Low Price, or Name using the tabs at the top of the page.
        </p>

        <p className="mb-4">
          We have something more important to announce. If you want, you can
          also select the latest phones by filtering the price range and
          features according to your choice. It will not just reduce your
          time, you can also buy your favorite smartphone very easily as well.
        </p>

        <h2 className="mb-2 text-[23px] font-medium leading-tight">
          Mobile Price Comparison in Bangladesh 2026
        </h2>

        <p className="mb-4">
          We have mentioned in the beginning that you can know the prices of
          all the latest smartphones here. This is why you'll be able to
          compare the prices of the latest smartphones of different brands
          very easily.
        </p>

        <p className="mb-4">
          Not only that, along with the price, you can also know the full
          specifications of the smartphone here. By selecting your favorite
          smartphone and just clicking on it, you will know everything about
          that phone.
        </p>

        <h2 className="mb-2 text-[20px] font-medium leading-tight">
          Mobile Phone Brands We Cover
        </h2>

        <p className="mb-4">
          This is the most important thing for all of you to know. We are
          always ready to cover all the brands in the market on our page.
          We'll cover all the brands with their latest smartphones, including
          Samsung, Xiaomi, Realme, Apple, Oppo, Tecno, Infinix, OnePlus, Vivo,
          Google, and Walton. You will get the news and prices of all the
          latest smartphones released by all brands here. Another good feature
          is that you will get official prices here as well as unofficial
          prices.
        </p>

        <h2 className="mb-2 text-[20px] font-medium leading-tight">
          Specifications Comparison of Smartphone 2026
        </h2>

        <p className="mb-4">
          Usually, each person has their own preferences. And for your
          convenience, we have tried to put together all the specifications,
          like display size, camera, battery, chipset, connectivity, network,
          etc. in this page. Through this, you can easily select your favorite
          device among the latest smartphones.
        </p>

        <h2 className="mb-2 text-[23px] font-medium leading-tight">
          More at Mobiledokan.com
        </h2>

        <p className="mb-4">
          Despite all this, you can know more things here, including official
          or non-official smartphones, upcoming, available in Bangladesh, and
          discounts. We have tried to put all these together, keeping in mind
          your convenience so that you can easily find everything on our site.
          It will save your valuable time as well.
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
          {expanded ? (
            <ChevronUp size={15} />
          ) : (
            <ChevronDown size={15} />
          )}
        </button>
      </div>

      <div className="mt-2 flex justify-center gap-4">
        <button
          type="button"
          onClick={() => togglePhoneType("official")}
          aria-pressed={phoneType === "official"}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
            phoneType === "official"
              ? "bg-[#ededed] text-[#555]"
              : "bg-[#f7f7f7] text-[#777] hover:bg-[#e8e8e8]"
          }`}
        >
          Official
        </button>

        <button
          type="button"
          onClick={() => togglePhoneType("unofficial")}
          aria-pressed={phoneType === "unofficial"}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
            phoneType === "unofficial"
              ? "bg-[#ededed] text-[#555]"
              : "bg-[#f7f7f7] text-[#777] hover:bg-[#e8e8e8]"
          }`}
        >
          Unofficial
        </button>
      </div>
    </section>
  );
}
