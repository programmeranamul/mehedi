import React from 'react'
import ProductContinuation from './product-continuation'
import SpecificationSection from './specification-section'
import CustomerReview from './customer-reviews'
import FAQ from './faq'

function Specifications() {
  return (
    <>
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
    </>
  )
}

export default Specifications
