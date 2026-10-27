


import { SpecificationTable } from "./specification-table";
import RelatedProducts from "./related-products";
import ProductInfo from "./product-info";
import ProductReviews from "./product-reviews";
import ReviewForm from "./review-form";

export function PhoneHighlights({
  phoneName,
  highlights,
}: {
  phoneName: string;
  highlights: string;
}) {
  return (
    <section className="border border-gray-300 bg-white">
      <h2 className="border-b border-gray-300 px-2 py-2 text-base font-bold text-gray-600">
        {phoneName} Highlights
      </h2>

      <div className="min-h-[74px] p-2 text-sm font-semibold text-gray-600">
        {highlights}
      </div>
    </section>
  );
}





export default function PhoneSpecifications({ data }) {
  const { phone, highlights, specificationGroups } = data;

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <PhoneHighlights
        phoneName={highlights.phoneName}
        highlights={highlights.text}
      />
      <SpecificationTable
        title={`${phone.name} Full Specifications`}
        groups={specificationGroups}
      />
      <ProductInfo data={data} />
      {data.relatedProducts && (
        <RelatedProducts
          title={data.relatedProducts.title}
          products={data.relatedProducts.products}
        />
      )}
      <ProductReviews data={data} />
      <ReviewForm data={data} />
    </div>
  );
}
