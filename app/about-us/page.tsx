
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto my-8 bg-white border border-gray-300 rounded shadow-sm text-gray-700 font-sans">
      {/* Header section */}
      <div className="border-b border-gray-300 px-4 py-3 bg-gray-50/50">
        <h1 className="text-lg font-bold text-gray-700">
          About MobileDokan.com
        </h1>
      </div>

      {/* Main Content Body */}
      <div className="p-6 space-y-5 text-[15px] leading-relaxed">
        {/* Broken / Placeholder Image representation as seen in screenshot */}
        <div className="flex items-center space-x-1 text-xs text-gray-500 mb-2">
          <span className="inline-block border border-gray-300 p-0.5 rounded text-[10px]">
            🖼️
          </span>
          <span>MobileDokan</span>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center py-2">
          {/* Replace src with your actual logo image path */}
          <div className="relative w-64 h-20">
            <Image
              src="/mobiledokan-logo.png" 
              alt="MobileDokan - Trusted Since 2013"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Intro Paragraph */}
        <p>
          <strong className="font-bold text-gray-800">MobileDokan.com</strong> was founded in the year 2013 as a mobile phone info website in Bangladesh. The primary goal was to provide the latest price and phone releases in the Bangladeshi market. Apart from that, we also had a blog section and different filter options so that visitors could find phones with their desired features easily.
        </p>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-700 pt-2">
          Vision and Goals
        </h2>

        {/* Content Paragraph 1 */}
        <p>
          We aim to be the number one mobile phone info site in Bangladesh where{' '}
          <a href="#" className="font-bold text-blue-700 hover:underline">
            mobile phone
          </a>{' '}
          users, fans, enthusiasts and consumers can get the latest accurate information about the market. This includes prices, technical specifications, ratings, reviews, comparisons, browsing phones by different brands, price range, types, finding mobile phone shops, read latest news from the industry and so on. We have a 100% honest information policy and we use our experience of the market and expertise in the technical details of the phones to present our website in the best possible manner.
        </p>

        {/* Content Paragraph 2 */}
        <p>
          Apart from that,{' '}
          <a href="#" className="font-bold text-blue-700 hover:underline">
            MobileDokan
          </a>{' '}
          aims to remain a fully neutral and independent source of information. For this reason, we do not have any partnership with any brand or mobile phone shop. It helps us to always present every phone from a fair perspective, no matter which brand it is or who is its seller.
        </p>
      </div>
    </div>
  );
}