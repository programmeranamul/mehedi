
"use client"
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


const brands = [
  { no: "01.", name: "Xiaomi", share: "16.72%", slug: "xiaomi" },
  { no: "02.", name: "Samsung", share: "14.55%", slug: "samsung" },
  { no: "03.", name: "Vivo", share: "11.02%", slug: "vivo" },
  { no: "04.", name: "Realme", share: "9.27%", slug: "realme" },
  { no: "05.", name: "Oppo", share: "8.58%", slug: "oppo" },
  { no: "06.", name: "Apple", share: "5.81%", slug: "apple" },
  { no: "07.", name: "Tecno", share: "3.5%", slug: "tecno" },
  { no: "08.", name: "Infinix", share: "3.5%", slug: "infinix" },
  { no: "09.", name: "Itel", share: "2.33%", slug: "itel" },
  { no: "10.", name: "Symphony", share: "Exp. 2.00", slug: "symphony" },
];

export default function MobileBrandsHeader() {
    const [expanded, setExpanded] = useState(false);

  return (
    <article className="w-full border border-slate-300 bg-white p-2 sm:p-3">
      <h1 className="border-b border-slate-300 pb-1 text-[20px] font-normal leading-6 text-[#555]">
        Mobile Phone Brands
      </h1>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${
          expanded ? "max-h-[10000px]" : "max-h-[20vh]"
        }`}
      >
      <div className="space-y-2 pt-1.5 text-[12px] leading-[15px] text-[#555]">
        <p>
          The smartphone market in the world is saturated with various mobile
          brands that have various features, designs and price ranges. Starting
          with affordable smartphones and high-end flagships, each company
          strives to provide superior performance, high-quality technology, and
          innovative features.
        </p>

        <p>
          MobileDokan.com's Mobile Brands section assists the user to search and
          find smartphones of the most reputable and popular manufacturers
          worldwide.
        </p>

        <p>
          You can find a phone that fits your budget or one that is of the best
          quality and with the latest technology, and this is the category
          where you can browse through the phones by brand and compare their
          specifications, features and their prices with ease.
        </p>
      </div>

      <section className="mt-3">
        <h2 className="text-[20px] font-semibold leading-6 text-[#555]">
          Find the Most Popular Mobile Brands
        </h2>

        <p className="mt-1 text-[12px] leading-[15px] text-[#555]">
          There is a continuous innovation of smartphone manufacturers to
          enhance performance, camera quality, battery life, and user
          experience. There are those brands that deal with high-end flagship
          smartphones and there are those that deal with low-end and mid-range
          smartphones.
        </p>

        <p className="mt-3 text-[12px] leading-[15px] text-[#555]">
          Under the Mobile Brands category of MobileDokan.com, users have the
          opportunity to browse phones of the major manufacturers in the world
          like:
        </p>

        <div className="mt-3">
          <Table className="border-collapse text-[12px]">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="h-[27px] w-[16%] border border-slate-300 px-1.5 py-1 font-bold text-black">
                  No
                </TableHead>

                <TableHead className="h-[27px] w-[38%] border border-slate-300 px-1.5 py-1 font-bold text-black">
                  Name
                </TableHead>

                <TableHead className="h-[27px] border border-slate-300 px-1.5 py-1 font-bold text-black">
                  Market Share
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {brands.map((brand) => (
                <TableRow
                  key={brand.no}
                  className="hover:bg-slate-50"
                >
                  <TableCell className="h-[26px] border border-slate-300 px-1.5 py-1 text-black">
                    {brand.no}
                  </TableCell>

                  <TableCell className="h-[26px] border border-slate-300 px-1.5 py-1">
                    <Link
                      href={`/brand/${brand.slug}`}
                      className="font-semibold text-[#2860b7] hover:underline"
                    >
                      {brand.name}
                    </Link>
                  </TableCell>

                  <TableCell className="h-[26px] border border-slate-300 px-1.5 py-1 text-black">
                    {brand.share}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="mt-3 text-[12px] leading-[15px] text-[#555]">
          Every brand possesses unique strengths, design philosophy and
          technology. The phone brand exploration enables users to easily
          identify the devices that suit their needs and wants.
        </p>
      </section>

      <section className="mt-4">
        <h2 className="text-[20px] font-semibold leading-6 text-[#555]">
          Explore Smartphones by Brand Category
        </h2>

        <p className="mt-1 text-[12px] leading-[15px] text-[#555]">
          Various brands of smartphones have different users. Others specialize
          in flagship performance, whereas others offer low-end devices with
          powerful features to use in their daily lives. For example:
        </p>

        <ul className="mt-2 list-disc space-y-0.5 pl-6 text-[12px] leading-[15px] text-[#555]">
          <li>
            Premium brands are concentrated on the powerful processors,
            high-end cameras and advanced displays.
          </li>
          <li>
            Mid-range brands are moderate in terms of performance and price,
            and they are widely used by ordinary users.
          </li>
          <li>
            Budget phones offer the necessary smartphone capabilities at low
            costs.
          </li>
        </ul>

        <p className="mt-3 text-[12px] leading-[15px] text-[#555]">
          Through the Mobile Brands section of MobileDokan.com, the user is able
          to easily determine which brand best suits his budget and usage
          requirements.
        </p>
      </section>
       <section>
        <h2 className="text-[20px] font-bold leading-6">
          Explore Smartphones by Brand Category
        </h2>

        <p className="mt-1 text-[12px] leading-[15px]">
          Various brands of smartphones have different users. Others specialize
          in flagship performance, whereas others offer low-end devices with
          powerful features to use in their daily lives. For example:
        </p>

        <ul className="mt-2 list-disc pl-6 text-[12px] leading-[15px]">
          <li>
            Premium brands are concentrated on the powerful processors,
            high-end cameras and advanced displays.
          </li>
          <li>
            Mid-range brands are moderate in terms of performance and price,
            and they are widely used by ordinary users.
          </li>
          <li>
            Budget phones offer the necessary smartphone capabilities at low
            costs.
          </li>
        </ul>

        <p className="mt-2 text-[12px] leading-[15px]">
          Through the Mobile Brands section of MobileDokan.com, the user is
          able to easily determine which brand best suits his budget and usage
          requirements.
        </p>
      </section>

        <section className="mt-3">
          <h2 className="text-[20px] font-bold leading-6">
            Compare Devices from Different Brands
          </h2>

          <p className="mt-1 text-[12px] leading-[15px]">
            When it comes to selecting an appropriate smartphone, one may have
            to compare the phones of various brands. Most of the brands have
            similar specifications but vary in software experience, camera
            performance, and design. MobileDokan.com enables one to view phones
            of other brands and compare them conveniently. Through
            specifications like processor speed, RAM, camera, battery life and
            display capabilities, users are able to decide on which brand is
            the best value. This will assist the visitors to make informed
            decisions and not to be confused before they buy a smartphone.
          </p>
        </section>

        <section className="mt-3">
          <h2 className="text-[20px] font-bold leading-6">
            Latest Smartphone Releases from Top Brands
          </h2>

          <p className="mt-1 text-[12px] leading-[15px]">
            The smartphone market is dynamic and new models are released on a
            regular basis. Large brands also release updated devices with
            faster processors, better cameras, and better software experiences
            on a regular basis.
          </p>

          <p className="mt-3 text-[12px] leading-[15px]">
            MobileDokan.com Mobile Brands category will inform users about the
            latest smartphones of the major manufacturers. Every brand page has
            specifications, price, and features highlighted to ensure that the
            users are updated on new releases.
          </p>

          <p className="mt-3 text-[12px] leading-[15px]">
            It could be the newest flagship or a new low-end phone,
            MobileDokan.com will have the correct and updated data of each
            brand.
          </p>
        </section>

        <section className="mt-3">
          <h2 className="text-[20px] font-bold leading-6">
            Why Explore Mobile Brands on MobileDokan.com
          </h2>

          <p className="mt-1 text-[12px] leading-[15px]">
            MobileDokan.com will be created to enable smartphone users to easily
            find and research mobile devices. The Mobile Brands category is
            also arranged in a simple and easy to use manner, where one can
            browse smartphones based on their preferred brands. Visiting this
            category, one can:
          </p>

          <ul className="mt-2 list-disc pl-6 text-[12px] leading-[15px]">
            <li>Explore smart phones of well-known international manufacturers.</li>
            <li>See specifications and features in detail.</li>
            <li>Compare the current mobile phone prices.</li>
            <li>Compare between devices of various brands.</li>
            <li>Keep abreast with new smartphones.</li>
          </ul>

          <p className="mt-3 text-[12px] leading-[15px]">
            This systematic simplifies the process of users locating the ideal
            smartphone without having to spend hours browsing through various
            websites.
          </p>
        </section>

        <section className="mt-3">
          <h2 className="text-[20px] font-bold leading-6">
            Find the Perfect Smartphone Brand for Your Needs
          </h2>

          <p className="mt-1 text-[12px] leading-[15px]">
            Each smartphone brand has something different. Others are camera
            innovation, others are gaming performance, battery life or high-end
            design. The knowledge of the strength of other manufacturers can
            assist you in making the correct choice of the device.
            MobileDokan.com has a Mobile Brands category that simplifies and
            makes smartphone discovery easy and convenient. Whether it is
            flagship phones, mid-range phones, or affordable phones, this
            section has a full list of the most popular brands in the
            smartphone market. Using the brand search, the user can easily
            discover the smartphone that meets his/her lifestyle, usage needs,
            and budget.
          </p>
        </section>

        <section className="mt-1">
          <h2 className="text-[20px] font-bold leading-6">
            Final Thought
          </h2>

          <p className="mt-1 text-[12px] leading-[15px]">
            The Mobile Brands section of MobileDokan.com assists the users in
            browsing smartphones of the biggest manufacturers of the world in
            a single location. The visitors can easily compare features,
            prices, and specifications by browsing devices by brand. It becomes
            easier to find the most appropriate smartphones and select the
            brand that fits their needs and budget perfectly.
          </p>
        </section>
      </div>

      <div className="flex justify-end pt-1">
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          className="inline-flex items-center gap-1 text-[12px] text-blue-600 hover:text-blue-800 hover:underline"
        >
          {expanded ? (
            <>
              Read Less <ChevronUp size={13} />
            </>
          ) : (
            <>
              Read More <ChevronDown size={13} />
            </>
          )}
        </button>
      </div>
    </article>
  );
}
