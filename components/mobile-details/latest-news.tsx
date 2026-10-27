

import { UserRound, CalendarCheck, ChevronRight } from "lucide-react";

const newsItems = [
  {
    title: "itel A300 Plus Launched on 18 October in Banglades...",
    image: "/images/news/poco-review.png",
    date: "Oct 19, 2026",
  },
  {
    title: "Samsung Galaxy A08 in Bangladesh on 19 October Wit...",
    image: "/images/news/poco-review.png",
    date: "Oct 19, 2026",
  },
  {
    title: "Realme Note 80 Launched on 19 October in Banglades...",
    image: "/images/news/poco-review.png",
    date: "Oct 19, 2026",
  },
  {
    title: "Samsung Galaxy S26 FE Debut On 11 October in Bangl...",
    image: "/images/news/poco-review.png",
    date: "Oct 18, 2026",
  },
  {
    title: "OnePlus 16 Launched on 12 October in China With Sn...",
    image: "/images/news/poco-review.png",
    date: "Oct 14, 2026",
  },
];

export default function LatestNews() {
  return (
    <section className="border border-slate-300 bg-white">
      <div className="flex h-[30px] items-center justify-between border-b border-slate-300 px-2">
        <h2 className="text-xs font-medium text-slate-700">
          Latest News
        </h2>

        <a
          href="/news"
          className="flex items-center text-[10px] text-blue-600 hover:underline"
        >
          See News
          <ChevronRight size={12} />
        </a>
      </div>

      <div className="px-1.5">
        {newsItems.map((news) => (
          <article
            key={news.title}
            className="flex gap-1.5 border-b border-slate-300 py-2 last:border-b-0"
          >
            <a
              href="/news"
              className="block h-[48px] w-[82px] shrink-0 overflow-hidden bg-slate-100"
            >
              <img
                src={news.image}
                alt={news.title}
                className="h-full w-full object-cover"
              />
            </a>

            <div className="min-w-0 flex-1">
              <a
                href="/news"
                className="line-clamp-2 block text-[12px] font-semibold leading-[15px] text-slate-900 hover:text-blue-600"
              >
                {news.title}
              </a>

              <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] text-slate-600">
                <span className="inline-flex items-center gap-1">
                  <UserRound
                    size={12}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                  <span className="text-blue-700">Admin</span>
                </span>

                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                  <CalendarCheck
                    size={12}
                    fill="currentColor"
                    className="text-slate-800"
                    stroke="white"
                  />
                  {news.date}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
