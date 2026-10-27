


import Link from "next/link";
import type { LatestHomePhone } from "@/lib/api/products";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type LatestPhonesTableProps = {
  phones: LatestHomePhone[];
  title?: string;
};

export default function LatestPhonesTable({ phones, title }: LatestPhonesTableProps) {
  return (
    <section className="w-full bg-white p-4">
      <h1 className="border-b border-slate-300 pb-2 text-lg font-bold leading-6 text-primary">
        {title}
      </h1>

      <Table className="mt-1">
        <TableHeader>
          <TableRow className="border-b border-slate-300 hover:bg-transparent">
            <TableHead className="h-[38px] w-[68px] px-2 text-sm font-semibold text-slate-600">
              #
            </TableHead>

            <TableHead className="h-[38px] px-2 text-sm font-semibold text-slate-600">
              Name
            </TableHead>

            <TableHead className="h-[38px] w-[180px] px-2 text-sm font-semibold text-slate-600">
              Price
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {phones.map((phone, index) => (
            <TableRow
              key={phone.id}
              className="border-b border-slate-300 hover:bg-slate-50"
            >
              <TableCell className="h-[35px] px-2 py-1.5 text-sm text-slate-600">
                {index + 1}
              </TableCell>

              <TableCell className="h-[35px] px-2 py-1.5">
                {phone.slug ? (
                  <Link
                    href={`/mobile/${encodeURIComponent(phone.slug)}`}
                    className="text-sm font-semibold text-[#3164b5] hover:text-blue-800 hover:underline"
                  >
                    {phone.name}
                  </Link>
                ) : (
                  <span className="text-sm font-semibold text-[#3164b5]">
                    {phone.name}
                  </span>
                )}
              </TableCell>

              <TableCell className="h-[35px] whitespace-nowrap px-2 py-1.5 text-sm font-medium text-slate-700">
                {phone.price.toLocaleString("en-US")} ৳
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
