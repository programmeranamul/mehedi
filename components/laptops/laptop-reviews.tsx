import Image from 'next/image'
import { CheckCircle2, MessageCircle, Pencil, Star, ThumbsUp } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { SiteHeader } from '@/components/layout/site-header'
import { BottomNav } from '@/components/layout/bottom-nav'

const reviews = [
  { initials: 'RI', name: 'Rahim Islam', date: 'May 24, 2024', rating: '5.0', title: 'Excellent performance for the price!', body: 'This laptop is perfect for gaming and daily use. The display is awesome, performance is smooth and build quality is solid. Highly recommended!', helpful: 42, tag: 'Gaming' },
  { initials: 'SA', name: 'Samiul Alam', date: 'May 20, 2024', rating: '4.0', title: 'Good value for money', body: 'Performance is good, display is clear, but battery life could be better. Overall a solid laptop for the price.', helpful: 28, tag: 'Performance' },
  { initials: 'MN', name: 'Mostafa Nur', date: 'May 16, 2024', rating: '4.5', title: 'Perfect for students and creators', body: 'I use it for both study and video editing. Works really well. The 144Hz display is a big plus. Build quality is also solid.', helpful: 35, tag: 'Student' },
]

function Stars({ rating = '4.6' }: { rating?: string }) {
  return <span className="text-amber-400" aria-label={`${rating} out of 5 stars`}>★★★★★</span>
}

export function LaptopReviews() {
  return <div className="min-h-screen bg-background pb-24">
    <SiteHeader />
    <main>
      <Container className="py-4 md:py-8">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"><a href="/laptops">Laptops</a><span>/</span><span>ASUS TUF Gaming F15</span><span>/</span><span className="text-foreground">Reviews</span></nav>
        <section className="grid gap-4 rounded-2xl border bg-card p-4 md:grid-cols-[1fr_1fr] md:p-6">
          <div className="relative flex min-h-52 items-center justify-center rounded-xl bg-sky-50"><Image src="/images/laptops/asus-tuf-f15.png" alt="ASUS TUF Gaming F15" width={420} height={280} className="h-48 w-auto object-contain md:h-64" /></div>
          <div className="flex flex-col justify-center"><span className="w-fit rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-primary">Gaming</span><h1 className="mt-2 text-2xl font-bold text-primary md:text-4xl">ASUS TUF Gaming F15<br /><span>(FX506HF-HN077W)</span></h1><p className="mt-2 text-lg"><Stars /> <span className="ml-2 text-muted-foreground">4.6/5 (512 reviews)</span></p><p className="mt-3 text-3xl font-bold text-primary">৳ 94,999</p><p className="text-muted-foreground line-through">৳ 1,05,000 <span className="ml-2 rounded bg-rose-100 px-2 text-rose-600 no-underline">9% OFF</span></p><p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 font-semibold text-emerald-700"><CheckCircle2 className="mr-2 inline-block size-5" />In Stock</p></div>
        </section>
        <nav className="mt-4 grid grid-cols-4 rounded-xl bg-sky-50 p-1 text-center text-sm font-medium"><a href="/laptops/asus-tuf-gaming-f15" className="rounded-lg px-2 py-3">Overview</a><a href="/laptops/asus-tuf-gaming-f15/specifications" className="px-2 py-3">Specifications</a><a href="#reviews" className="rounded-lg bg-primary px-2 py-3 text-primary-foreground">Reviews</a><a href="#compare" className="px-2 py-3">Compare</a></nav>
        <section id="reviews" className="mt-5 rounded-2xl border bg-card p-5 md:p-8"><div className="flex flex-col gap-6 md:flex-row md:items-center"><div className="min-w-52"><h2 className="text-xl font-bold">Customer Reviews</h2><p className="mt-3 text-5xl font-bold text-primary">4.6<span className="text-2xl">/5</span></p><Stars /><p className="mt-1 text-sm text-muted-foreground">(512 reviews)</p></div><div className="w-full max-w-xl space-y-2">{[['5','78%'],['4','14%'],['3','5%'],['2','2%'],['1','1%']].map(([score, percent]) => <div key={score} className="flex items-center gap-3 text-sm"><span>{score} ★</span><div className="h-2 flex-1 rounded-full bg-sky-100"><div className="h-full rounded-full bg-primary" style={{ width: percent }} /></div><span className="w-8 text-right">{percent}</span></div>)}</div></div></section>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">{['All (512)', 'Photo/Video (98)', 'Gaming (156)', 'Performance (104)', 'Build Quality (76)'].map((filter, index) => <button key={filter} className={`shrink-0 rounded-full border px-5 py-2 text-sm ${index === 0 ? 'border-primary bg-primary text-primary-foreground' : 'bg-card text-primary'}`}>{filter}</button>)}</div>
        <section className="mt-4 grid gap-4">{reviews.map((review) => <article key={review.name} className="rounded-2xl border bg-card p-5"><div className="flex gap-4"><div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">{review.initials}</div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-start justify-between gap-2"><div><h3 className="font-semibold text-primary">{review.name}</h3><p className="text-sm text-emerald-600"><CheckCircle2 className="mr-1 inline-block size-4" />Verified Purchase</p></div><span className="text-sm text-muted-foreground">{review.date}</span></div><p className="mt-1"><Stars rating={review.rating} /> <span className="ml-2 text-sm font-medium">{review.rating}</span></p><h4 className="mt-1 font-semibold text-primary">{review.title}</h4><p className="mt-1 text-sm leading-6 text-muted-foreground">{review.body}</p><div className="mt-4 flex gap-5 text-sm text-primary"><button><ThumbsUp className="mr-1 inline-block size-4" />Helpful ({review.helpful})</button><button><MessageCircle className="mr-1 inline-block size-4" />Reply</button><span className="ml-auto rounded-full bg-sky-50 px-3 py-1 text-xs">{review.tag}</span></div></div></div></article>)}</section>
        <button className="mx-auto mt-5 flex items-center rounded-lg border border-primary px-8 py-3 font-semibold text-primary"><Pencil className="mr-2 size-4" />Write a Review</button>
      </Container>
    </main>
    <BottomNav />
  </div>
}
