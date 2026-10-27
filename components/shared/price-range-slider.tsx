"use client";

type PriceRangeSliderProps = {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  variant?: "hero" | "filter";
};

export function PriceRangeSlider({
  min,
  max,
  step = 500,
  value,
  onChange,
  variant = "hero",
}: PriceRangeSliderProps) {
  const [low, high] = value;
  const toPercent = (number: number) =>
    ((number - min) / (max - min)) * 100;
  const lowPercent = toPercent(low);
  const highPercent = toPercent(high);
  const isFilter = variant === "filter";
  const sliderHeight = isFilter
    ? "h-7"
    : "h-[clamp(24px,5vw,38px)] md:h-[38px]";
  const trackHeight = isFilter
    ? "h-3"
    : "h-[clamp(9px,2.4vw,18px)] md:h-[18px]";

  return (
    <div className={`relative ${sliderHeight}`}>
      <div
        className={`absolute top-1/2 h-3 w-full -translate-y-1/2 rounded-full ${
          isFilter ? "bg-neutral-200" : "bg-[#e4e6ea]"
        }`}
        aria-hidden="true"
      />
      <div
        className={`absolute top-1/2 ${trackHeight} -translate-y-1/2 ${
          isFilter ? "bg-neutral-700" : "bg-[#1d6ae5]"
        }`}
        style={{
          left: `${lowPercent}%`,
          right: `${100 - highPercent}%`,
        }}
        aria-hidden="true"
      />
      <input
        type="range"
        aria-label="Minimum price"
        min={min}
        max={max}
        step={step}
        value={low}
        onChange={(event) =>
          onChange([Math.min(Number(event.target.value), high - step), high])
        }
        className={`dual-range absolute inset-0 h-full w-full ${
          isFilter ? "dual-range-filter" : "dual-range-filter"
        }`}
      />
      <input
        type="range"
        aria-label="Maximum price"
        min={min}
        max={max}
        step={step}
        value={high}
        onChange={(event) =>
          onChange([low, Math.max(Number(event.target.value), low + step)])
        }
        className={`dual-range absolute inset-0 h-full w-full ${
          isFilter ? "dual-range-filter" : " dual-range-filter"
        }`}
      />
    </div>
  );
}
