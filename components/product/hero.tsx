import Image from "next/image";
import Link from "next/link";

import {
  Gift,
  Heart,
  Star,
  Truck, ShieldCheck, ShoppingCart
} from "lucide-react";
import { phones } from "@/lib/data/mock";
import { formatPrice } from "@/lib/format";

const phone = phones[0];

function Hero() {

const gallery = [phone.image, phone.image, phone.image, phone.image];

  return (
    <>
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
    </>
  )
}

export default Hero
