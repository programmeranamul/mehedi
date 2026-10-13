import { Package, ShieldCheck, Smartphone } from "lucide-react";


export default function ProductContinuation() {
  return (
    <>
      <section className="mt-5 overflow-hidden rounded-xl border bg-card p-4 md:p-6">
        <div className="flex items-center gap-3">
          <Package className="size-5" />
          <h2 className="text-base font-semibold">What&apos;s in the box</h2>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["Phone", "1 x Samsung Galaxy A15"],
            ["Cable", "1 x USB Type-C Cable"],
            ["Tool", "1 x SIM Ejector Tool"],
            ["Manual", "1 x User Manual"],
          ].map(([icon, label]) => (
            <div key={label} className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-50 text-primary">
                <Smartphone className="size-6" />
              </div>
              <p className="mt-3 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-6 flex items-center gap-2 rounded-b-xl border border-t-0 bg-card px-4 py-4 text-xs text-muted-foreground md:px-6">
        <ShieldCheck className="size-4 shrink-0 text-primary" /> All information
        is for reference only and may change without notice.
      </div>
    </>
  );
}