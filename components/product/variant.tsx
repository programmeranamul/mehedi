import React from 'react'

function Variant() {
  return (
    <>
      <section className="mt-5 rounded-xl border bg-card p-4 md:p-6">
            <h2 className="text-sm font-semibold">Select Variant</h2>
            <p className="mt-4 text-xs font-medium">RAM</p>
            <div className="mt-2 flex gap-3">
              {["4GB", "6GB", "8GB"].map((item, i) => (
                <button
                  key={item}
                  className={`rounded-md border px-4 py-2 text-sm ${i === 0 ? "border-primary text-primary" : "text-muted-foreground"}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs font-medium">Storage</p>
            <div className="mt-2 flex gap-3">
              <button className="rounded-md border border-primary px-4 py-2 text-sm text-primary">
                128GB
              </button>
              <button className="rounded-md border px-4 py-2 text-sm text-muted-foreground">
                256GB
              </button>
            </div>
            <p className="mt-5 text-xs font-medium">Color: Light Blue</p>
            <div className="mt-2 flex gap-5">
              {[
                ["Light Blue", "bg-sky-100"],
                ["Dark Blue", "bg-blue-950"],
                ["Yellow", "bg-yellow-300"],
                ["Black", "bg-black"],
              ].map(([name, color], i) => (
                <button
                  key={name}
                  className={`flex flex-col items-center gap-1 rounded-md p-2 text-[11px] ${i === 0 ? "border border-primary" : ""}`}
                >
                  <span className={`size-7 rounded-full ${color}`} />
                  {name}
                </button>
              ))}
            </div>
          </section>
    </>
  )
}

export default Variant
