'use client'

type PriceRangeSliderProps = {
  min: number
  max: number
  step?: number
  value: [number, number]
  onChange: (value: [number, number]) => void
}

export function PriceRangeSlider({ min, max, step = 500, value, onChange }: PriceRangeSliderProps) {
  const [low, high] = value
  const toPercent = (n: number) => ((n - min) / (max - min)) * 100

  return (
    <div className="relative h-[clamp(24px,5vw,38px)] md:h-[38px]">
      <div
        className="absolute top-1/2 h-[clamp(9px,2.4vw,18px)] -translate-y-1/2 bg-white md:h-[18px]"
        style={{ left: `${toPercent(low)}%`, right: `${100 - toPercent(high)}%` }}
        aria-hidden="true"
      />
      <input
        type="range"
        aria-label="Minimum price"
        min={min}
        max={max}
        step={step}
        value={low}
        onChange={(event) => onChange([Math.min(Number(event.target.value), high - step), high])}
        className="dual-range absolute inset-0 h-full w-full"
      />
      <input
        type="range"
        aria-label="Maximum price"
        min={min}
        max={max}
        step={step}
        value={high}
        onChange={(event) => onChange([low, Math.max(Number(event.target.value), low + step)])}
        className="dual-range absolute inset-0 h-full w-full"
      />
    </div>
  )
}
