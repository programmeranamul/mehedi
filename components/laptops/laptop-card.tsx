import { laptops } from "@/lib/data/mock";
import Image from "next/image";
import Link from "next/link";


export default function LaptopCard({ laptop }: { laptop: (typeof laptops)[number] }) {
  return (
    <article className="min-w-[238px] rounded-2xl border border-blue-100 bg-card p-4 shadow-[0_2px_10px_rgba(37,99,235,.08)] md:min-w-0">
      <div className="relative h-32">
        <Image
          src={laptop.image}
          alt={laptop.name}
          fill
          sizes="240px"
          className="object-contain"
        />
        <span className="absolute right-0 top-0 text-2xl text-slate-400">
          ♡
        </span>
      </div>
      <h3 className="mt-2 text-base font-semibold text-[#0d2b67]">
        {laptop.name}
      </h3>
      <p className="mt-1 text-sm text-[#6680b3]">{laptop.specs}</p>
      <p className="mt-3 text-xl font-bold text-red-600">৳ {laptop.price}</p>
      <Link
        href="/phones/samsung-galaxy-a15"
        className="mt-3 flex h-10 items-center justify-center rounded-lg border border-blue-500 text-sm font-semibold text-blue-600"
      >
        View Details
      </Link>
    </article>
  );
}