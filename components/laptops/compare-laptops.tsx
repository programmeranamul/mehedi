import Image from 'next/image'
import React from 'react'
import { Section } from './../shared/section';
import { laptops } from '@/lib/data/mock';

function CompareLaptops() {
  return (
    <>
      <Section title="Compare Laptops" viewAllHref="/compare" className="pt-7">
        <div className="grid gap-4 md:grid-cols-3">
          {laptops.map((laptop, index) => (
            <div
              key={laptop.name}
              className="rounded-2xl border border-blue-100 bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <Image
                  src={laptop.image}
                  alt=""
                  width={105}
                  height={62}
                  className="object-contain"
                />
                <span className="font-bold text-blue-600">VS</span>
                <Image
                  src={laptops[(index + 1) % laptops.length].image}
                  alt=""
                  width={105}
                  height={62}
                  className="object-contain"
                />
              </div>
              <button className="mt-4 h-10 w-full rounded-lg border border-blue-500 font-semibold text-blue-600">
                Compare
              </button>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default CompareLaptops
