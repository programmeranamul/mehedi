import { ChevronDown } from "lucide-react";
import React from "react";

function Description() {
  return (
    <>
      <section className="mt-5 rounded-xl border bg-card p-4 md:p-6">
        <h2 className="text-base font-semibold">Product Description</h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Samsung Galaxy A15 (4G) features a 6.5-inch Super AMOLED display, 50MP
          triple rear camera, 5000mAh battery with 25W fast charging and
          powerful performance with MediaTek Helio G99 processor.
        </p>
        <button className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
          View More <ChevronDown className="size-4" />
        </button>
      </section>
    </>
  );
}

export default Description;
