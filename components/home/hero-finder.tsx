'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Container } from '@/components/layout/container'
import { HeroSelect } from '@/components/home/hero-select'
import { PriceRangeSlider } from '@/components/home/price-range-slider'

const PRICE_MIN = 1000
const PRICE_MAX = 100000

type Option = { label: string; value: string }

type HeroFinderProps = {
  typeOptions: Option[]
  categoryOptions: Option[]
  brandOptions: Option[]
}

export function HeroFinder({ typeOptions, categoryOptions, brandOptions }: HeroFinderProps) {
  const router = useRouter()
  const [range, setRange] = useState<[number, number]>([PRICE_MIN, PRICE_MAX])
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')

  function updatePrice(index: 0 | 1, raw: string) {
    const parsed = Number(raw.replace(/\D/g, ''))
    const next: [number, number] = [...range]
    next[index] = Math.min(Math.max(parsed || 0, 0), PRICE_MAX * 10)
    setRange(next)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const params = new URLSearchParams({ min: String(range[0]), max: String(range[1]) })
    if (type) params.set('type', type)
    if (category) params.set('category', category)
    if (brand) params.set('brand', brand)
    router.push(`/phone-finder?${params.toString()}`)
  }

  return (
    <Container className="pt-0.5 md:pt-1.5">
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden rounded-lg bg-[radial-gradient(ellipse_at_70%_40%,var(--hero)_0%,var(--hero-deep)_75%)] shadow-[0_4px_12px_rgba(0,0,0,0.3)] md:rounded-md md:shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
      >
        <div className="grid items-center md:grid-cols-[minmax(0,540px)_1fr]">
          <form onSubmit={handleSubmit} className="relative z-10 pb-3 pl-[11%] pr-[8%] pt-1.5 md:pb-7 md:pl-[34px] md:pr-4 md:pt-3">
            <div className="flex justify-center md:justify-start md:pl-[68px]">
              <h1
                id="hero-title"
                className="border-[1.5px] border-white px-1 font-display text-[22px] font-normal uppercase leading-[26px] text-white md:border-2 md:px-1.5 md:text-[34px] md:leading-[40px]"
              >
                Lets Find A Mobile
              </h1>
            </div>

            <div className="mt-2 grid grid-cols-[minmax(0,1fr)_33%] gap-x-[5%] md:mt-3 md:grid-cols-[1fr_156px] md:gap-[26px]">
              <fieldset className="min-w-0">
                <legend className="sr-only">Price range in taka</legend>
                <div className="px-1 md:px-1.5">
                  <PriceRangeSlider min={PRICE_MIN} max={PRICE_MAX} value={range} onChange={setRange} />
                </div>
                <div className="mt-2.5 flex items-center gap-3 md:mt-[18px] md:gap-5">
                  <PriceInput label="Minimum price" value={range[0]} onChange={(v) => updatePrice(0, v)} />
                  <PriceInput label="Maximum price" value={range[1]} onChange={(v) => updatePrice(1, v)} />
                </div>
              </fieldset>

              <div className="flex flex-col gap-[5px] pt-1.5 md:gap-2.5 md:pt-3">
                <HeroSelect name="type" label="Mobile" options={typeOptions} value={type} onChange={setType} />
                <HeroSelect name="category" label="Category" options={categoryOptions} value={category} onChange={setCategory} />
                <HeroSelect name="brand" label="Brand" options={brandOptions} value={brand} onChange={setBrand} />
              </div>
            </div>

            <div className="mt-4 flex justify-center md:mt-[34px] md:block md:pl-[74px]">
              <button
                type="submit"
                className="h-[27px] w-[68%] rounded-[3px] bg-[#e4e6ea] font-display text-[17px] uppercase text-[#111] transition-colors hover:bg-white md:h-[44px] md:w-full md:max-w-[355px] md:text-[22px]"
              >
                Find Mobile
              </button>
            </div>
          </form>

          <div className="relative hidden h-full min-h-[274px] md:block">
            <Image
              src="/images/hero-phones.png"
              alt="Latest smartphones in multiple colors"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 45vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </section>
    </Container>
  )
}

function PriceInput({ label, value, onChange }: { label: string; value: number; onChange: (value: string) => void }) {
  const id = `price-${label.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <div className="flex flex-1 items-center gap-0.5 md:gap-1">
      <span className="font-display text-[17px] leading-none text-white md:text-[26px]" aria-hidden="true">
        TK.
      </span>
      <label htmlFor={id} className="sr-only">
        {label} in taka
      </label>
      <input
        id={id}
        inputMode="numeric"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-4 w-full min-w-0 rounded-[2px] bg-[#e4e6ea] text-center font-display text-[12px] md:h-[27px] md:text-[19px] text-[#111] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      />
    </div>
  )
}
