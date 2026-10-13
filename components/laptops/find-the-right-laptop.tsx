import React from 'react'
import { Container } from '../layout/container'
import Image from 'next/image'
import { ArrowRight, Grid2X2, Search, Tag, Wrench } from 'lucide-react'

function FindTheRightLaptop() {
  return (
    <>
      <Container className="pt-3 md:pt-8">
              <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#071d58] via-[#06448e] to-[#071b57] p-5 text-white md:min-h-[380px] md:p-10">
                <div className="relative z-10 max-w-[470px]">
                  <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold">
                    Find Your Perfect Laptop
                  </span>
                  <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                    Find the Right <span className="text-blue-400">Laptop</span>
                    <br />
                    for You
                  </h1>
                  <p className="mt-3 text-sm leading-6 text-blue-50 md:text-lg">
                    Filter by category, budget and brand to discover the best laptops
                    that fit your needs.
                  </p>
                </div>
                <Image
                  src="/images/laptops/hero-laptop.png"
                  alt="Open laptop"
                  fill
                  priority
                  sizes="(min-width: 768px) 70vw, 100vw"
                  className="object-cover object-right opacity-90"
                />
                <div className="relative z-10 mt-5 grid grid-cols-1 gap-3 md:mt-10 md:grid-cols-3">
                  <Filter icon={Grid2X2} label="Category" value="All Categories" />
                  <Filter icon={Wrench} label="Budget" value="All Budgets" />
                  <Filter icon={Tag} label="Brand" value="All Brands" />
                </div>
                <button className="relative z-10 mt-3 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 font-semibold">
                  <Search className="size-5" /> Find Laptops{" "}
                  <ArrowRight className="size-5" />
                </button>
              </section>
            </Container>
    </>
  )
}

export default FindTheRightLaptop

function Chevron() {
  return <span aria-hidden="true">⌄</span>;
}

function Filter({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Grid2X2;
  label: string;
  value: string;
}) {
  return (
    <button className="flex items-center gap-3 rounded-xl bg-white p-4 text-left text-[#0d2b67]">
      <Icon className="size-6 text-blue-600" />
      <span className="flex-1">
        <strong className="block text-sm">{label}</strong>
        <small className="text-slate-500">{value}</small>
      </span>
      <Chevron />
    </button>
  );
}


