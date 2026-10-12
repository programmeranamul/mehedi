import { ChevronDown } from 'lucide-react'

type HeroSelectProps = {
  name: string
  label: string
  options: { label: string; value: string }[]
  value: string
  onChange: (value: string) => void
}

export function HeroSelect({ name, label, options, value, onChange }: HeroSelectProps) {
  return (
    <div className="relative">
      <label htmlFor={`hero-${name}`} className="sr-only">
        {label}
      </label>
      <select
        id={`hero-${name}`}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-[clamp(15px,2.9vw,22px)] w-full cursor-pointer appearance-none rounded-[2px] bg-[#e4e6ea] pl-1 pr-4 font-display text-[clamp(10px,2vw,15px)] leading-none text-[#333] focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:h-[22px] md:pl-1.5 md:pr-6 md:text-[15px]"
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-0.5 top-1/2 size-[clamp(12px,2.1vw,16px)] -translate-y-1/2 text-[#333] md:right-1 md:size-4"
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </div>
  )
}
