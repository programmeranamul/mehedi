


"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type PaginationProps = {
  totalResults?: number;
  pageSize?: number;
  initialPage?: number;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({
  totalResults = 209,
  pageSize = 100,
  initialPage = 1,
  currentPage: controlledPage,
  totalPages: reportedTotalPages,
  onPageChange,
}: PaginationProps) {
  const [internalPage, setInternalPage] = useState(initialPage);
  const currentPage = controlledPage ?? internalPage;

  const totalPages =
    reportedTotalPages ?? Math.ceil(totalResults / pageSize);
  const safeTotalPages = Math.max(1, totalPages);
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), safeTotalPages);
  const startResult =
    totalResults === 0 ? 0 : (safeCurrentPage - 1) * pageSize + 1;
  const endResult = Math.min(safeCurrentPage * pageSize, totalResults);

  function changePage(page: number) {
    const nextPage = Math.max(1, Math.min(page, safeTotalPages));
    if (controlledPage === undefined) {
      setInternalPage(nextPage);
    }
    onPageChange?.(nextPage);
  }

  const firstVisiblePage = Math.max(
    1,
    Math.min(safeCurrentPage - 1, safeTotalPages - 2),
  );
  const visiblePages = Array.from(
    { length: Math.min(3, safeTotalPages) },
    (_, index) => firstVisiblePage + index,
  );

  return (
    <div className="w-full bg-white px-3 py-2">
      <nav
        aria-label="Pagination"
        className="flex items-center justify-center gap-2"
      >
        <Button
          variant="ghost"
          size="icon"
          aria-label="Previous page"
          disabled={safeCurrentPage === 1}
          onClick={() => changePage(safeCurrentPage - 1)}
          className="h-[26px] w-[39px] rounded-none bg-[#f1f2f4] text-slate-600 hover:bg-slate-200 disabled:opacity-50"
        >
          <ChevronLeft size={16} />
        </Button>

        {visiblePages.map((page) => (
          <Button
            key={page}
            variant="ghost"
            aria-current={safeCurrentPage === page ? "page" : undefined}
            onClick={() => changePage(page)}
            className={`h-[26px] min-w-[37px] rounded-none px-3 text-sm font-normal ${
              safeCurrentPage === page
                ? "bg-[#6875f5] text-white hover:bg-[#5966e8] hover:text-white"
                : "bg-[#f1f2f4] text-blue-700 hover:bg-slate-200"
            }`}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="ghost"
          size="icon"
          aria-label="Next page"
          disabled={safeCurrentPage === safeTotalPages}
          onClick={() => changePage(safeCurrentPage + 1)}
          className="h-[26px] w-[39px] rounded-none bg-[#f1f2f4] text-slate-600 hover:bg-slate-200 disabled:opacity-50"
        >
          <ChevronRight size={16} />
        </Button>
      </nav>

      <div className="mt-5 flex justify-end">
        <p className="text-sm text-slate-600">
          Showing{" "}
          <span className="font-normal">{startResult}</span>
          {" "}to{" "}
          <span className="font-normal">{endResult}</span>
          {" "}of{" "}
          <span className="font-normal">{totalResults}</span>
          {" "}results
        </p>
      </div>
    </div>
  );
}
