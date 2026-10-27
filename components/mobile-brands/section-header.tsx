import Link from "next/link";
import { ChevronRight, ChevronsRight } from "lucide-react";

export default function SectionHeader({
  title,
  href,
  action,
}: {
  title: string;
  href: string;
  action: string;
}) {
  return (
    <div className="flex h-[34px] items-center justify-between border-b border-slate-300 bg-white px-2">
      <h2 className="font-serif text-[14px] font-bold uppercase text-[#444]">
        {title}
      </h2>

      <Link
        href={href}
        className="inline-flex items-center gap-0.5 whitespace-nowrap text-[10px] font-semibold text-blue-600 hover:text-blue-800"
      >
        {action}
        <ChevronRight size={13} />
      </Link>
    </div>
  );
}
