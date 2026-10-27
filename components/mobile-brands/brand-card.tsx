import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import type { Brand } from "@/lib/types";

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link href={`/brand/${brand.slug}`} className="group block min-w-0">
      <Card className="flex h-[97px] flex-col items-center justify-between overflow-hidden rounded-[5px] border border-slate-200 bg-white p-1.5 shadow-none transition-colors hover:border-blue-300">
        <div className="flex min-h-0 flex-1 w-full items-center justify-center p-1">
          <div className="relative h-[54px] w-full">
            <Image
              src={brand.logo ?? "/placeholder.svg"}
              alt={`${brand.name} logo`}
              fill
              sizes="(max-width: 640px) 25vw, 130px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full border-t border-slate-200 pt-1 text-center">
          <span className="text-[12px] font-semibold text-blue-700 group-hover:text-blue-900">
            {brand.name}
          </span>
        </div>
      </Card>
    </Link>
  );
}