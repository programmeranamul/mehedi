import React from 'react'
import { Section } from '../shared/section'
import { laptops } from '@/lib/data/mock'
import LaptopCard from './laptop-card'

function PopularLaptops() {
  return (
    <>
      <Section title="Popular Laptops" viewAllHref="/laptops" className="pt-6">
        <div className="flex snap-x gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3">
          {laptops.map((laptop) => (
            <LaptopCard key={laptop.name} laptop={laptop} />
          ))}
        </div>
      </Section>
    </>
  )
}

export default PopularLaptops
