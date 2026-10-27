
"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import type { MobileDetailData } from "@/lib/types/mobile-detail";

export default function ProductReviews({ data }: { data: MobileDetailData }) {
  const reviews = data.reviews;
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(reviews.inlineReviewFormInitialRating);

  return (
    <section className="border border-slate-300 bg-white">
      <div className="border-b border-slate-300 px-2 py-1.5">
        <h2 className="text-xs font-bold text-slate-700">
          {reviews.title}
        </h2>
      </div>

      <div className="p-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-slate-900">
            User Reviews
          </h3>

          <button
            type="button"
            onClick={() => setShowReviewForm((open) => !open)}
            className="rounded bg-blue-600 px-3 py-2 text-[11px] font-semibold text-white hover:bg-blue-700"
          >
            {showReviewForm ? "CANCEL REVIEW" : "WRITE A REVIEW"}
          </button>
        </div>

        {showReviewForm && (
          <form
            className="mt-4 space-y-3 border border-slate-200 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              alert(`Your ${rating}-star review is ready to submit.`);
            }}
          >
            <label className="block text-xs font-medium text-slate-700">
              Your rating
            </label>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-label={`${value} stars`}
                  onClick={() => setRating(value)}
                >
                  <Star
                    size={20}
                    className={
                      value <= rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-orange-400"
                    }
                  />
                </button>
              ))}
            </div>

            <input
              required
              placeholder="Your name"
              className="w-full border border-slate-300 px-3 py-2 text-xs outline-none focus:border-blue-500"
            />

            <textarea
              required
              placeholder="Write your review..."
              rows={3}
              className="w-full resize-y border border-slate-300 px-3 py-2 text-xs outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={rating === 0}
              className="rounded bg-blue-600 px-4 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Submit Review
            </button>
          </form>
        )}

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-[1fr_1.35fr]">
          <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-green-600 px-3 py-1 text-lg font-bold leading-6 text-white">
                {reviews.initialAverageRating}
              </span>

              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    className="text-orange-500"
                  />
                ))}
              </div>
            </div>

            <p className="mt-1 text-[11px] text-slate-500">
              {reviews.initialRatingCount} Ratings
            </p>
            <p className="text-[11px] text-slate-500">
              {reviews.initialReviewCount} Reviews
            </p>
          </div>

          <div className="flex flex-col justify-center gap-2">
            {reviews.sentimentStats.map((stat) => (
              <div
                key={stat.label}
                className="grid grid-cols-[44px_minmax(0,1fr)_16px] items-center gap-2"
              >
                <span className="text-[11px] text-slate-600">
                  {stat.label}
                </span>

                <div className="h-3 overflow-hidden rounded-sm bg-slate-200">
                  <div
                    className={`h-full ${stat.color}`}
                    style={{
                      width: `${stat.percentage}%`,
                    }}
                  />
                </div>

                <span className="text-right text-[11px] text-slate-600">
                  {stat.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}