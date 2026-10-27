import Link from "next/link";


export default function SectionHeader({ text, link }: { text: string; link: string }) {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[#dee2e6]   px-3 py-2">
        <h2 className="text-[#333333] font-bold text-base md:text-lg uppercase tracking-wide">
          {text}
        </h2>
        <Link
          href={link}
          className="text-blue-600 hover:underline text-sm font-semibold flex items-center gap-1"
        >
          View More <span className="text-xs">&gt;</span>
        </Link>
      </div>
    </>
  );
}