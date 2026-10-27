


"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { MobileDetailData } from "@/lib/types/mobile-detail";

export default function ReviewForm({ data }: { data: MobileDetailData }) {
  const reviews = data.reviews;
  const [rating, setRating] = useState(reviews.reviewFormInitialRating);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const review = {
      name: formData.get("name"),
      email: formData.get("email"),
      title: formData.get("title"),
      review: formData.get("review"),
      rating,
    };

    console.log("Review submitted:", review);
  }

  return (
    <section className="w-full border border-slate-300 bg-white">
      <div className="h-[27px] border-b border-slate-300" />

      <div className="px-4 py-5 sm:px-6 sm:py-5 lg:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 pl-0 sm:pl-[103px]">
            <h2 className="text-sm font-semibold text-slate-700">
              {reviews.reviewFormTitle}
            </h2>

            <p className="mt-1 text-[11px] italic text-slate-500">
              {reviews.reviewFormGuidance}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {reviews.reviewFields.map((field) => (
              <div
                key={field.id}
                className="grid grid-cols-1 gap-2 sm:grid-cols-[90px_minmax(0,1fr)] sm:gap-3"
              >
                <Label
                  htmlFor={field.id}
                  className="pt-0.5 text-xs font-semibold text-slate-900"
                >
                  {field.label} <span className="text-red-500">*</span>
                </Label>

                {field.type === "textarea" ? (
                  <Textarea
                    id={field.id}
                    name={field.id}
                    required
                    className="min-h-[83px] resize-y rounded-none border-slate-300 bg-[#f0f1f3] px-2 py-2 text-xs shadow-none focus-visible:ring-1 focus-visible:ring-blue-500"
                  />
                ) : (
                  <Input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    className="h-[30px] rounded-none border-slate-300 bg-[#f0f1f3] px-2 text-xs shadow-none focus-visible:ring-1 focus-visible:ring-blue-500"
                  />
                )}
              </div>
            ))}

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-[90px_minmax(0,1fr)] sm:gap-3">
              <Label className="pt-1 text-xs font-semibold text-slate-900">
                Rate this <span className="text-red-500">*</span>
              </Label>

              <div>
                <div
                  role="radiogroup"
                  aria-label="Rate this product"
                  className="flex h-[28px] w-fit items-center gap-1 border border-slate-300 px-1.5"
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      role="radio"
                      aria-checked={rating === value}
                      aria-label={`${value} star${value > 1 ? "s" : ""}`}
                      onClick={() => setRating(value)}
                      className="flex h-6 w-5 items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                    >
                      <Star
                        size={16}
                        strokeWidth={0}
                        fill={value <= rating ? "#ff9800" : "#a6adb7"}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-0 sm:pl-[103px]">
              <Button
                type="submit"
                className="h-8 rounded-md bg-[#4267b2] px-4 text-xs font-medium text-white hover:bg-[#34569b]"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
