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

export default function CustomerReview(){
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