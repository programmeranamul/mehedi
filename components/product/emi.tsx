
import { CreditCard, Headphones, RotateCcw, ShieldCheck } from 'lucide-react'
import React from 'react'

function Emi() {
  return (
    <>
      <section className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-4">
            {[
              [ShieldCheck, "100% Authentic", "Official Products"],
              [RotateCcw, "7 Days Return", "Easy Return Policy"],
              [Headphones, "Fast Support", "24/7 Customer Support"],
              [CreditCard, "EMI Available", "Easy Installments"],
            ].map(([Icon, title, sub]) => (
              <div
                key={title as string}
                className="bg-card px-2 py-5 text-center"
              >
                <Icon className="mx-auto size-7 text-primary" />
                <p className="mt-2 text-xs font-semibold">{title as string}</p>
                <p className="text-[11px] text-muted-foreground">
                  {sub as string}
                </p>
              </div>
            ))}
          </section>
    </>
  )
}

export default Emi
