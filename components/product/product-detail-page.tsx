"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Battery,
  Camera,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  Cpu,
  CreditCard,
  Gift,
  Headphones,
  Heart,
  Info,
  Package,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
  Truck,
  Wifi,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Container } from "@/components/layout/container";
import { phones } from "@/lib/data/mock";
import { formatPrice } from "@/lib/format";

const phone = phones[0];
const features = [
  ["Display", "6.5” Super AMOLED", Smartphone],
  ["Battery", "5000mAh", Battery],
  ["RAM", "4GB", Smartphone],
  ["Charger", "25W Fast Charging", Plus],
  ["Storage", "128GB", Smartphone],
  ["Processor", "MediaTek Helio G99", Cpu],
  ["Rear Camera", "50MP + 5MP + 2MP", Camera],
  ["Network", "4G", Wifi],
  ["Front Camera", "13MP", Camera],
  ["OS", "Android 14, One UI 6", Clock3],
];
const gallery = [phone.image, phone.image, phone.image, phone.image];
const specificationGroups = [
  [
    "Display",
    "Screen & Display",
    Smartphone,
    [
      "6.5” Super AMOLED",
      "1080 x 2340 pixels, 19.5:9 ratio (~396 ppi density)",
      "90Hz Refresh Rate, 800 nits (HBM)",
    ],
  ],
  [
    "Performance",
    "CPU & OS",
    Cpu,
    [
      "MediaTek Helio G99 (6nm)",
      "Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",
      "Android 14, One UI 6",
    ],
  ],
  [
    "Memory",
    "RAM & Storage",
    Smartphone,
    ["4GB RAM", "128GB Internal Storage", "microSDXC (dedicated slot)"],
  ],
  [
    "Camera",
    "Photo & Video",
    Camera,
    [
      "Rear Camera: 50MP (wide) + 5MP (ultrawide) + 2MP (macro)",
      "Front Camera: 13MP (wide)",
      "1080p@30fps (video)",
    ],
  ],
  [
    "Battery",
    "Power & Charging",
    Battery,
    ["5000mAh (typical)", "25W Fast Charging", "USB Type-C 2.0"],
  ],
  [
    "Network",
    "SIM & Connectivity",
    Wifi,
    [
      "4G LTE",
      "Dual SIM (Nano-SIM, dual stand-by)",
      "Wi-Fi 802.11 a/b/g/n/ac, Bluetooth 5.3, GPS",
    ],
  ],
  [
    "Design",
    "Build & Dimension",
    Smartphone,
    [
      "Dimensions: 160.1 x 76.8 x 8.4 mm",
      "Weight: 200 g",
      "Glass front, Plastic back, Plastic frame",
    ],
  ],
  [
    "Sensors",
    "Sensors & Security",
    CircleHelp,
    ["Side-mounted fingerprint, Accelerometer", "Proximity, Compass"],
  ],
] as const;

function SpecificationSection() {
  return (
    <section className="mt-5 overflow-hidden rounded-xl border bg-card">
      <div className="flex items-center gap-3 border-b px-4 py-4 md:px-6">
        <Info className="size-5" />
        <h2 className="text-base font-semibold">Full Specifications</h2>
      </div>
      {specificationGroups.map(([name, subtitle, Icon, values]) => (
        <div
          key={name}
          className="grid grid-cols-[30px_145px_minmax(0,1fr)_18px] gap-2 border-b px-4 py-4 last:border-b-0 md:grid-cols-[34px_190px_minmax(0,1fr)_20px] md:px-6"
        >
          <Icon
            className="mt-1 size-5 text-muted-foreground"
            strokeWidth={1.7}
          />
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
          </div>
          <div className="space-y-1 text-sm leading-5 text-foreground">
            {values.map((value) => (
              <p key={value}>{value}</p>
            ))}
          </div>
          <ChevronRight className="mt-1 size-4 justify-self-end text-muted-foreground" />
        </div>
      ))}
    </section>
  );
}

const customerReviews = [
  [
    "Rahim Ahmed",
    "Excellent display and battery life",
    "The phone feels premium and runs smoothly. Camera quality is also very good for this price.",
    "5.0",
  ],
  [
    "Nusrat Jahan",
    "Great value for money",
    "Very happy with the performance. Delivery was quick and the packaging was secure.",
    "4.5",
  ],
  [
    "Tanvir Hasan",
    "Good phone for everyday use",
    "Bright screen, reliable battery, and enough storage for my daily apps.",
    "4.0",
  ],
];
const frequentlyAsked = [
  [
    "Is the Samsung Galaxy A15 official?",
    "Yes. This is an official product with a 1-year manufacturer warranty.",
  ],
  [
    "Does it support fast charging?",
    "Yes, it supports 25W fast charging with a compatible charger.",
  ],
  [
    "How long does delivery take?",
    "Delivery usually takes 1–3 days inside Dhaka and 3–5 days elsewhere.",
  ],
  [
    "Can I return the phone?",
    "You can request a return within 7 days according to our return policy.",
  ],
];


function CustomerReview(){
  return(
    <>
    <div className="flex flex-col gap-6 py-5 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-8">
        <div id="reviews" className="scroll-mt-20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Customer Reviews</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                What our customers say about this product
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">
                4.6 <span className="text-amber-400">★</span>
              </p>
              <p className="text-xs text-muted-foreground">324 reviews</p>
            </div>
          </div>
          <div className="mt-5 divide-y rounded-xl border bg-card">
            {customerReviews.map(([name, title, body, rating]) => (
              <article key={name} className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Verified purchase
                    </p>
                  </div>
                  <span className="text-sm text-amber-500">★ {rating}</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
        <form id="review-form" className="rounded-xl border bg-card p-4 md:p-5">
          <h2 className="text-lg font-semibold">Write a Review</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Share your experience with this phone.
          </p>
          <div className="mt-4 grid gap-3">
            <label className="grid gap-1 text-sm font-medium">
              Name
              <input
                required
                className="h-10 rounded-md border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Email
              <input
                required
                type="email"
                className="h-10 rounded-md border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Review title
              <input
                required
                className="h-10 rounded-md border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Summarize your experience"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Review description
              <textarea
                required
                rows={4}
                className="resize-none rounded-md border bg-background px-3 py-2 font-normal outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Tell us about the product"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Your rating
              <select
                required
                defaultValue=""
                className="h-10 rounded-md border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="" disabled>
                  Select a rating
                </option>
                <option>5 stars</option>
                <option>4 stars</option>
                <option>3 stars</option>
                <option>2 stars</option>
                <option>1 star</option>
              </select>
            </label>
            <button
              type="submit"
              className="h-10 rounded-md bg-primary font-medium text-primary-foreground"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

function FAQ(){
  return(
    <>
    <div id="questions" className="scroll-mt-20 py-5 md:py-8">
        <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Helpful answers about the Samsung Galaxy A15.
        </p>
        <div className="mt-4 divide-y rounded-xl border bg-card">
          {frequentlyAsked.map(([question, answer]) => (
            <details key={question} className="group p-4">
              <summary className="cursor-pointer list-none pr-6 text-sm font-medium marker:hidden">
                {question}
                <ChevronDown className="float-right size-4 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </>
  )
}

function ProductContinuation() {
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

function FeatureItem({
  label,
  value,
  Icon,
}: {
  label: string;
  value: string;
  Icon: typeof Smartphone;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2 text-[12px] text-muted-foreground">
      <Icon className="size-4 shrink-0 text-foreground/70" strokeWidth={1.7} />
      <span>
        <b className="font-medium text-foreground">{label}:</b> {value}
      </span>
    </div>
  );
}

export function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <main>
        <Container className="pt-3 md:pt-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 overflow-hidden whitespace-nowrap text-[12px] text-muted-foreground md:text-sm"
          >
            <Link href="/">Home</Link>
            <ChevronRight className="size-3" />
            <span>Smartphones</span>
            <ChevronRight className="size-3" />
            <span>Samsung</span>
            <ChevronRight className="size-3" />
            <b className="truncate text-foreground">Samsung Galaxy A15 (4G)</b>
          </nav>

          <section className="grid gap-5 md:grid-cols-[1fr_1fr] md:gap-10">
            <div>
              <div className="relative flex aspect-square items-center justify-center rounded-xl border bg-card p-5 md:max-w-[520px]">
                <Image
                  src={phone.image}
                  alt={phone.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 90vw"
                  className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
                  priority
                />
                <button
                  aria-label="Add to wishlist"
                  className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground"
                >
                  <Heart className="size-6" />
                </button>
                <span className="absolute bottom-3 right-3 rounded-md bg-black/35 px-2 py-1 text-xs text-white">
                  1/7
                </span>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-2">
                {gallery.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    aria-label={`View image ${index + 1}`}
                    className={`relative aspect-square rounded-md border bg-card p-1 ${index === 0 ? "border-primary ring-1 ring-primary" : ""}`}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-contain p-1"
                    />
                    {index === 3 && (
                      <span className="absolute inset-0 flex items-center justify-center bg-background/80 text-sm">
                        +3
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Samsung
              </p>
              <h1 className="mt-2 text-2xl font-semibold leading-tight md:text-4xl">
                Samsung Galaxy A15 (4G)
              </h1>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <Star className="size-4 fill-amber-400 text-amber-400" /> 4.6{" "}
                <Link href="#reviews" className="text-primary">
                  (324 reviews)
                </Link>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="text-2xl font-bold text-price md:text-3xl">
                  {formatPrice(phone.price)}
                </span>
                <span className="rounded bg-red-50 px-2 py-1 text-sm font-semibold text-red-500">
                  -13%
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground line-through">
                ৳ 23,999
              </p>
              <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Gift className="size-5 text-emerald-600" /> Cashback: ৳ 500
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-5 text-foreground/70" /> Official
                  Warranty: 1 Year
                </span>
                <span className="flex items-center gap-2">
                  <Truck className="size-5 text-foreground/70" /> Delivery: 1-3
                  Days (Inside Dhaka)
                </span>
                <span className="font-medium text-emerald-600">
                  ● &nbsp;In Stock
                </span>
              </div>
              <div className="mt-6 grid gap-2">
                <button className="flex h-11 items-center justify-center gap-2 rounded-md bg-primary font-medium text-primary-foreground">
                  <ShoppingCart className="size-5" /> Add to Cart
                </button>
                <button className="h-11 rounded-md border border-primary font-medium text-primary">
                  Buy Now
                </button>
              </div>
            </div>
          </section>

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

          <section className="mt-5 rounded-xl border bg-card p-4 md:p-6">
            <h2 className="text-base font-semibold">Key Features</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {features.map(([label, value, Icon]) => (
                <FeatureItem
                  key={label as string}
                  label={label as string}
                  value={value as string}
                  Icon={Icon as typeof Smartphone}
                />
              ))}
            </div>
          </section>

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

          <section className="mt-5 rounded-xl border bg-card p-4 md:p-6">
            <h2 className="text-base font-semibold">Product Description</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Samsung Galaxy A15 (4G) features a 6.5-inch Super AMOLED display,
              50MP triple rear camera, 5000mAh battery with 25W fast charging
              and powerful performance with MediaTek Helio G99 processor.
            </p>
            <button className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
              View More <ChevronDown className="size-4" />
            </button>
          </section>
          <section
            id="specifications"
            className="mt-8 border-y bg-background md:mt-10"
          >
            <div className="flex items-center gap-5 overflow-x-auto border-b px-2 py-4 text-sm font-medium md:justify-center">
              <a href="#overview" className="shrink-0 text-muted-foreground">
                Overview
              </a>
              <a
                href="#specifications"
                className="shrink-0 border-b-2 border-primary pb-4 -mb-[17px] text-primary"
              >
                Specifications
              </a>
              <a href="#reviews" className="shrink-0 text-muted-foreground">
                Reviews (324)
              </a>
              <a href="#compare" className="shrink-0 text-muted-foreground">
                Compare
              </a>
              <a href="#questions" className="shrink-0 text-muted-foreground">
                Q&amp;A
              </a>
            </div>
            <div className="pt-2">
              <div className="rounded-xl bg-muted/30 p-1">
                <SpecificationSection />
                <CustomerReview />
                <FAQ />
                <ProductContinuation />
              </div>
            </div>
          </section>
        </Container>
      </main>
      <BottomNav />
    </div>
  );
}
