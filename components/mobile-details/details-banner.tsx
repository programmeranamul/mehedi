
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Share2,
  Heart,
  Check,
  ChevronRight,
  Images,
  Palette,
  HardDrive,
  Cpu,
  Camera,
  LockKeyhole,
  Smartphone,
  BatteryFull,
  Fingerprint,
  Zap,
  Droplet,
  Wifi,
  Bluetooth,
  X,
} from "lucide-react";
import type { MobileDetailData } from "@/lib/types/mobile-detail";

const specificationIcons: Record<string, typeof HardDrive> = {
  Storage: HardDrive,
  RAM: Cpu,
  "Main Camera": Camera,
  "Front Camera": LockKeyhole,
  Display: Smartphone,
  Battery: BatteryFull,
};

const featureIcons: Record<string, typeof Fingerprint> = {
  "On-screen": Fingerprint,
  "100W Fast Charging": Zap,
  "Waterproof, IP68/IP69K": Droplet,
  "Wi-Fi 7 (5G)": Wifi,
  "Crystal Shield Glass": Smartphone,
  "Bluetooth 6.0": Bluetooth,
};

const colorStyles: Record<string, string> = {
  Silver: "bg-gray-300 ring-2 ring-blue-500 ring-offset-2",
  Black: "bg-gray-900",
  Blue: "bg-blue-500",
};

const tabs = [
  "Details",
  "Specifications",
  "Overall Review",
  "Discussions",
  "Showrooms",
];

export default function DetailsBanner({ data }) {
  const { phone } = data;
  const [shortlisted, setShortlisted] = useState(false);
  const [compared, setCompared] = useState(false);
  const [activeTab, setActiveTab] = useState("Details");
  const [showImages, setShowImages] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const [shared, setShared] = useState(false);

  async function sharePhone() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: phone.name,
          url,
        });
      } catch {
        // Sharing was cancelled or is unavailable.
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setShared(true);
      } catch {
        setShared(false);
      }
    }
  }

  return (
    <section className="mx-auto w-full max-w-[1280px] bg-gray-100 p-1.5 text-gray-700 sm:p-2">
      {/* Main product card */}
      <div className="border border-gray-300 bg-white">
        {/* Header */}
        <header className="flex min-h-[52px] flex-wrap items-center justify-between gap-2 border-b border-gray-300 px-2.5 py-2 sm:px-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-gray-600 sm:text-2xl">
              {phone.name}
            </h1>

            <button
              type="button"
              onClick={sharePhone}
              aria-label="Share phone"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              <Share2 size={20} />
            </button>

            {shared && (
              <span className="text-xs text-green-700">
                Link copied
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShortlisted(!shortlisted)}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-sm sm:text-base ${
                shortlisted
                  ? "border-pink-300 bg-pink-50 text-pink-600"
                  : "border-gray-200 bg-gray-100 text-blue-600 hover:bg-gray-200"
              }`}
            >
              <Heart
                size={18}
                fill={shortlisted ? "currentColor" : "none"}
              />
              {shortlisted ? "Shortlisted" : "Shortlist"}
            </button>

            <button
              type="button"
              onClick={() => setCompared(!compared)}
              className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-sm sm:text-base ${
                compared
                  ? "border-green-300 bg-green-50 text-green-700"
                  : "border-gray-200 bg-gray-100 text-orange-500 hover:bg-gray-200"
              }`}
            >
              {compared ? <Check size={17} /> : <Check size={17} />}
              {compared ? "Added" : "Compare"}
            </button>
          </div>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-[33.5%_66.5%]">
          {/* Left: Product image */}
          <div className="relative flex flex-col border-b border-gray-300 p-2 sm:p-3 md:border-b-0 md:border-r">
            <div className="relative mx-auto h-[300px] w-full max-w-[390px] sm:h-[390px] md:h-[390px]">
              <Image
                src={phone.image}
                alt={phone.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 34vw"
                className="object-contain"
              />
            </div>

            {/* Score badge */}
            <div className="absolute left-0 top-0 flex w-12 flex-col items-center bg-emerald-800 px-1 py-1 text-white">
              <span className="text-[9px] leading-3">SPEC</span>
              <span className="text-[9px] leading-3">SCORE</span>
              <span className="mt-0.5 text-xl font-bold leading-6">
                {phone.score}%
              </span>
            </div>

            {/* Gallery buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setShowImages(!showImages)}
                className="flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-100"
              >
                {showImages ? <X size={16} /> : <Images size={16} />}
                {phone.imageCount} Images
              </button>

              <button
                type="button"
                onClick={() => setShowColors(!showColors)}
                className="flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-100"
              >
                <Palette size={16} />
                {phone.colorCount} Colors
              </button>
            </div>

            {showImages && (
              <p className="mt-2 text-center text-sm text-gray-500">
                Add your phone gallery images here.
              </p>
            )}

            {showColors && (
              <div className="mt-3 flex justify-center gap-3">
                {data.bannerColorOptions.map((color) => (
                  <button
                    key={color}
                    aria-label={`${color} color`}
                    className={`h-7 w-7 rounded-full border border-gray-400 ${
                      colorStyles[color] ?? "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Phone information */}
          <div className="min-w-0 p-3 sm:p-4">
            {/* Meta information */}
            <div className="grid grid-cols-1 gap-2 border-b border-gray-200 pb-2 text-sm text-gray-500 sm:grid-cols-3 sm:gap-0">
              <p className="sm:border-r sm:border-gray-200 sm:px-1">
                Market Status: {phone.marketStatus}
              </p>
              <p className="sm:border-r sm:border-gray-200 sm:px-3">
                Release Date: {phone.releaseDate}
              </p>
              <p className="sm:px-3">
                Brand: {phone.brand}
              </p>
            </div>

            {/* Price and variant */}
            <div className="grid grid-cols-1 gap-4 border-b border-gray-200 py-2 sm:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold text-gray-600">
                  Price in Bangladesh
                </h2>

                <p className="text-lg font-bold text-blue-700">
                  ৳{phone.price.toLocaleString("en-US")}{" "}
                  <span className="text-sm font-normal text-orange-500">
                    ({phone.priceStatus})
                  </span>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-600">
                  Variants:
                </h2>

                <button
                  type="button"
                  className="rounded-lg border-2 border-blue-600 px-4 py-1 text-center text-sm text-blue-700 shadow-sm hover:bg-blue-50"
                >
                  <span className="block font-semibold">
                    {phone.variant}
                  </span>
                  <span className="block">
                    {phone.variantRegion} ৳
                    {phone.variantPrice.toLocaleString("en-US")}
                  </span>
                </button>
              </div>

              <p className="text-right text-xs text-gray-500 sm:col-span-2">
                Updated on {phone.updatedAt}
              </p>
            </div>

            {/* Specification heading */}
            <div className="flex items-center justify-between gap-2 py-2">
              <h2 className="font-bold text-gray-600">
                Key Specifications
              </h2>

              <button
                type="button"
                onClick={() => setShowSpecs(!showSpecs)}
                className="flex shrink-0 items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
              >
                {showSpecs ? "Hide Full Specs" : "See Full Specs"}
                <ChevronRight
                  size={17}
                  className={showSpecs ? "rotate-90" : ""}
                />
              </button>
            </div>

            {/* Operating system */}
            <div className="flex items-center gap-2 py-2 text-gray-500">
              <Smartphone size={23} className="text-green-600" />
              <span className="text-base">{data.operatingSystem}</span>
            </div>

            {/* Key specifications grid */}
            <div className="grid grid-cols-1 gap-x-3 gap-y-4 py-2 sm:grid-cols-2 lg:grid-cols-3">
              {data.quickSpecifications.map(({ label, value }) => {
                const Icon = specificationIcons[label] ?? Smartphone;

                return (
                  <div key={label} className="flex min-w-0 items-center gap-2">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                      <Icon size={23} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-base text-gray-400">
                        {label}
                      </p>
                      <p className="break-words text-sm font-semibold text-gray-600">
                        {value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Extra features */}
            <div className="mt-2 grid grid-cols-1 gap-x-3 gap-y-2 border-t border-gray-200 pt-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.features.map((label) => {
                const Icon = featureIcons[label] ?? Smartphone;

                return (
                  <div
                    key={label}
                    className="flex min-w-0 items-center gap-2 text-gray-500"
                  >
                    <Icon size={17} className="shrink-0 text-gray-500" />
                    <span className="text-sm sm:text-base">{label}</span>
                  </div>
                );
              })}
            </div>

            {/* Expandable specs */}
            {showSpecs && (
              <div className="mt-4 border-t border-gray-200 pt-3">
                <h3 className="mb-2 font-semibold text-gray-700">
                  Full Specifications
                </h3>

                <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                  {data.fullSpecificationPreview.map(
                    ({ label, value }) => (
                      <div
                        key={label}
                        className="flex justify-between gap-3 border-b border-gray-100 py-2"
                      >
                        <span className="text-gray-500">{label}</span>
                        <span className="text-right font-medium text-gray-700">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <nav className="mt-2 flex flex-wrap gap-2 border border-gray-200 bg-white p-2.5 sm:p-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors sm:px-4 sm:text-base ${
              activeTab === tab
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-blue-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Active tab content */}
      <div className="mt-2 border border-gray-200 bg-white p-4">
        <h2 className="font-semibold text-gray-700">{activeTab}</h2>
        <p className="mt-1 text-sm text-gray-500">
          {activeTab === "Details" &&
            `Explore the ${phone.name} details, price, variants and features.`}
          {activeTab === "Specifications" &&
            "Review the phone's technical specifications above."}
          {activeTab === "Overall Review" &&
            "Reviews and ratings can be displayed in this section."}
          {activeTab === "Discussions" &&
            "Phone-related questions and community discussions can appear here."}
          {activeTab === "Showrooms" &&
            "Add showroom locations and availability information here."}
        </p>
      </div>
    </section>
  );
}
