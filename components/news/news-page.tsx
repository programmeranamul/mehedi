"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Bookmark,
  CalendarDays,
  ChevronRight,
  Clock3,
  Mail,
  Menu,
  Play,
  Search,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { articles } from "@/lib/data/mock";
import { cn } from "@/lib/utils";

const categories = [
  "All News",
  "Smartphones",
  "Gadgets",
  "Reviews",
  "Apps",
  "Technology",
];
const latest = [
  {
    ...articles[0],
    title: "Xiaomi 14 Ultra is Official with Powerful Camera Setup",
    category: "smartphones",
    image: "/images/news/galaxy-m15.png",
    publishedAt: "2024-05-23",
    minutes: 4,
  },
  {
    ...articles[1],
    title: "WhatsApp New Feature Allows Users to Edit Sent Messages",
    category: "apps",
    image: "/images/news/battery-tips.png",
    publishedAt: "2024-05-22",
    minutes: 3,
  },
  {
    ...articles[2],
    title: "Qualcomm Unveils Snapdragon 8s Gen 3 Chipset",
    category: "technology",
    image: "/images/news/poco-review.png",
    publishedAt: "2024-05-21",
    minutes: 4,
  },
  {
    ...articles[3],
    title: "Apple Watch Series 10 May Get Bigger Display",
    category: "gadgets",
    image: "/images/news/oneplus-nord.png",
    publishedAt: "2024-05-20",
    minutes: 3,
  },
];
const editorPicks = [
  [
    "smartphones",
    "iPhone 16 Pro Leaks: What to Expect?",
    "/images/phones/iphone-15.png",
    "May 19, 2024",
    "3 min read",
  ],
  [
    "technology",
    "Windows 12: Release Date, Features & Rumors",
    "/images/news/oneplus-nord.png",
    "May 18, 2024",
    "4 min read",
  ],
  [
    "gadgets",
    "Best Wireless Earbuds Under ৳5,000 in 2024",
    "/images/news/poco-review.png",
    "May 17, 2024",
    "3 min read",
  ],
  [
    "technology",
    "How AI Is Changing the Future of Technology",
    "/images/news/galaxy-m15.png",
    "May 16, 2024",
    "5 min read",
  ],
];

function Meta({ date, minutes }: { date: string; minutes: number }) {
  return (
    <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
      <CalendarDays className="size-3.5" />
      {date}
      <span>•</span>
      <Clock3 className="size-3.5" />
      {minutes} min read
    </div>
  );
}

export function NewsPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <main>
        <Container className="px-5 md:px-8">
          <nav
            aria-label="News categories"
            className="-mx-5 flex gap-7 overflow-x-auto border-b border-border px-5 py-3 text-sm font-medium whitespace-nowrap md:mx-0 md:justify-center md:gap-12 md:border-0"
          >
            {categories.map((category, index) => (
              <Link
                key={category}
                href="#"
                className={cn(
                  "py-1.5",
                  index === 0
                    ? "rounded-full bg-primary px-5 text-primary-foreground"
                    : "text-muted-foreground",
                )}
              >
                {category}
              </Link>
            ))}
            <Menu className="ml-auto size-6 shrink-0 md:hidden" />
          </nav>

          <section className="relative mt-4 overflow-hidden rounded-xl bg-[#06192d] text-white md:mt-6 md:min-h-[340px]">
            <Image
              src="/images/news/oneplus-nord.png"
              alt="OnePlus Nord CE 4 Lite"
              width={380}
              height={300}
              className="absolute right-0 top-0 h-full w-[48%] object-cover opacity-90 mix-blend-screen md:w-[45%]"
            />
            <div className="relative z-10 max-w-[62%] px-5 py-7 md:max-w-[560px] md:px-10 md:py-12">
              <span className="rounded bg-primary px-2 py-1 text-[10px] font-semibold">
                FEATURED
              </span>
              <p className="mt-5 text-[11px]">
                May 24, 2024 <span className="mx-2">•</span> 5 min read
              </p>
              <h1 className="mt-3 text-[25px] font-semibold leading-[1.15] md:text-4xl">
                OnePlus Nord CE 4 Lite Launched in Bangladesh
              </h1>
              <p className="mt-3 text-sm leading-6 text-white/85 md:text-base">
                OnePlus has officially launched the Nord CE 4 Lite in Bangladesh
                with powerful features and stylish design.
              </p>
              <Link
                href="#"
                className="mt-5 inline-flex items-center gap-4 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary"
              >
                Read Full Story <ChevronRight className="size-5" />
              </Link>
            </div>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              <i className="size-2.5 rounded-full bg-primary" />
              <i className="size-2.5 rounded-full bg-white/80" />
              <i className="size-2.5 rounded-full bg-white/80" />
            </div>
          </section>

          <SectionHeading title="Latest News" />
          <section className="divide-y divide-border">
            {latest.map((article) => (
              <article
                key={article.title}
                className="flex gap-4 py-2.5 md:gap-6 md:py-4"
              >
                <Image
                  src={article.image}
                  alt=""
                  width={212}
                  height={108}
                  className="h-[108px] w-[32%] shrink-0 rounded-lg object-cover md:h-32 md:w-56"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase text-primary">
                    {article.category}
                  </p>
                  <h2 className="mt-1 line-clamp-2 text-base font-semibold leading-5 md:text-xl">
                    {article.title}
                  </h2>
                  <Meta
                    date={article.publishedAt.replace("2024-", "May ")}
                    minutes={article.minutes}
                  />
                </div>
                <Bookmark className="mt-auto mb-2 hidden size-5 text-muted-foreground md:block" />
              </article>
            ))}
          </section>

          <SectionHeading title="Editor's Pick" />
          <section className="grid grid-cols-2 gap-4 overflow-hidden md:grid-cols-4">
            <div className="contents md:contents">
              {editorPicks.map(([category, title, image, date, time]) => (
                <article key={title} className="min-w-0">
                  <div className="relative">
                    <Image
                      src={image}
                      alt=""
                      width={220}
                      height={120}
                      className="h-[105px] w-full rounded-lg object-cover md:h-36"
                    />
                    <Bookmark className="absolute right-2 top-2 size-4 text-white" />
                  </div>
                  <p className="mt-3 text-[10px] font-bold uppercase text-primary">
                    {category}
                  </p>
                  <h3 className="mt-1 line-clamp-3 text-sm font-semibold leading-5">
                    {title}
                  </h3>
                  <p className="mt-2 text-[10px] text-muted-foreground">
                    {date} <span className="mx-1">•</span> {time}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 flex items-center gap-4 rounded-lg bg-[#eef4ff] px-4 py-5 md:px-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#d7e8ff] text-primary">
              <Mail />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold md:text-lg">
                Stay Updated with Tech News
              </h2>
              <p className="text-xs text-muted-foreground">
                Subscribe to our newsletter and never miss an update.
              </p>
            </div>
            <button className="rounded-md bg-primary px-4 py-3 text-xs font-semibold text-primary-foreground md:px-7 md:text-sm">
              Subscribe Now
            </button>
          </section>
        </Container>
      </main>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mt-7 mb-2 flex items-center justify-between">
      <h2 className="text-xl font-semibold">{title}</h2>
      <Link
        href="#"
        className="flex items-center text-sm font-medium text-primary"
      >
        View All <ChevronRight className="size-4" />
      </Link>
    </div>
  );
}
