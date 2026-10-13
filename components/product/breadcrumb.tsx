import { ChevronRight } from "lucide-react";
import Link from "next/link";


export default function Breadcrumb(){
  return <>
  <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 overflow-hidden whitespace-nowrap text-[12px] text-muted-foreground md:text-sm"
          >
            <Link href="/">Home</Link>
            <ChevronRight className="size-3" />
            <span>Smartphones</span>
            <ChevronRight className="size-3" />
            <span>Samsung</span>
            <ChevronRight className="size-3" />
            <b className="truncate text-foreground">Samsung Galaxy A15 (4G)</b>
          </nav>
  </>
}