import Image from "next/image";
import type { LatestComparison } from "@/lib/api";

export default function CompareCard({ card }: { card: LatestComparison }) {
  return (
    <>
      <div  className="border border-gray-200 rounded p-3 flex flex-col justify-between bg-white relative">
                      
                      {/* Side-by-side Phones Container */}
                      <div className="grid grid-cols-2 relative gap-2 mb-3">
                        
                        {/* Phone 1 */}
                        <div className="flex flex-col items-center relative pr-2 border-r border-gray-200">
                          <span className="absolute top-0 left-0 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                            {card.phone1.score}
                          </span>
                          <div className="relative w-20 h-28 my-4">
                            <Image src={card.phone1.image} alt={card.phone1.name} fill className="object-contain" />
                          </div>
                          <span className="text-xs font-medium text-gray-700 text-center line-clamp-1">{card.phone1.name}</span>
                          <span className="text-xs font-bold text-red-600 mt-1">{card.phone1.price}</span>
                        </div>
      
                        {/* Phone 2 */}
                        <div className="flex flex-col items-center relative pl-2">
                          <span className="absolute top-0 left-0 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                            {card.phone2.score}
                          </span>
                          <div className="relative w-20 h-28 my-4">
                            <Image src={card.phone2.image} alt={card.phone2.name} fill className="object-contain" />
                          </div>
                          <span className="text-xs font-medium text-gray-700 text-center line-clamp-1">{card.phone2.name}</span>
                          <span className="text-xs font-bold text-red-600 mt-1">{card.phone2.price}</span>
                        </div>
      
                        {/* VS Badge Floating Center */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold z-10 border-2 border-white shadow">
                          VS
                        </div>
                      </div>
      
                      {/* Compare Button */}
                      <button className="w-full mt-2 py-1.5 border border-blue-600 text-blue-700 hover:bg-blue-50 text-xs font-bold rounded tracking-wider uppercase transition-colors">
                        Compare
                      </button>
                    </div>
    </>
  );
}
