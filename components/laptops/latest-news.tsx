import React from 'react'
import NewsRow from './news-row'
import { Section } from '../shared/section'

function LatestNews() {
  return (
    <>
      <Section
              title="Latest News & Reviews"
              viewAllHref="/news"
              className="pt-7"
            >
              <div className="grid gap-3 rounded-2xl border border-blue-100 bg-white p-3 md:grid-cols-2">
                <NewsRow
                  title="MacBook Air M2 Review: Still a Great Choice in 2024?"
                  image="/images/laptops/macbook-air-m2.png"
                  type="REVIEW"
                  date="May 24, 2024"
                />
                <NewsRow
                  title="ASUS ROG Strix G16 Launched in Bangladesh"
                  image="/images/laptops/asus-tuf-f15.png"
                  type="NEWS"
                  date="May 22, 2024"
                />
              </div>
            </Section>
    </>
  )
}

export default LatestNews
