import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function NewsRow({
  title,
  image,
  type,
  date,
}: {
  title: string;
  image: string;
  type: string;
  date: string;
}) {
  return (
    <article className="flex items-center gap-3 border-b border-blue-50 pb-3 last:border-0 last:pb-0">
      <Image
        src={image}
        alt=""
        width={150}
        height={80}
        className="h-20 w-32 rounded-xl object-cover"
      />
      <div>
        <span className="text-xs font-bold text-blue-500">{type}</span>
        <h3 className="text-sm font-semibold text-[#0d2b67]">{title}</h3>
        <p className="text-xs text-slate-500">{date}</p>
      </div>
      <ArrowRight className="ml-auto size-5 shrink-0 text-slate-400" />
    </article>
  );
}
