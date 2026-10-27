import CompareCard from "./compare-card";
import {
  getLatestComparisons,
  type LatestComparison,
} from "@/lib/api";

async function LatestComparision() {
  let comparisons: LatestComparison[] = [];
  let error: string | undefined;

  try {
    comparisons = await getLatestComparisons(1, 10);
  } catch (reason) {
    console.error("Failed to load latest comparisons.", reason);
    error = "Unable to load the latest comparisons right now.";
  }

  return (
    <>
      <div className="flex-1 bg-white border border-gray-200 shadow-sm p-4">
        <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
          <h2 className="font-bold text-gray-700 uppercase text-sm tracking-wide">
            Latest Comparison
          </h2>
          <a
            href="#"
            className="text-blue-600 text-xs font-semibold hover:underline"
          >
            View More &gt;
          </a>
        </div>

        {error ? (
          <p role="status" className="py-6 text-center text-sm text-gray-500">
            {error}
          </p>
        ) : comparisons?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {comparisons.map((card) => (
              <CompareCard card={card} key={card.id} />
            ))}
          </div>
        ) : (
          <p className="py-6 text-center text-sm text-gray-500">
            No comparisons available.
          </p>
        )}
      </div>
    </>
  );
}

export default LatestComparision;
