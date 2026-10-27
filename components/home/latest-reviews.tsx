import Image from "next/image";
import { Container } from "../layout/container";
import SectionHeader from "../shared/section-header";

export default function LatestReviews() {
  const reviews = [
    {
      id: 1,
      title:
        "Honor Magic9 Super Edition Review: Flagship Power, but Is It Too Heavy?",
      description:
        "The Honor Magic9 Super Edition is a high-end smartphone designed for those who demand flagship...",
      author: "Mezbah Ahmed",
      date: "October 14, 2026",
      rating: 4.3,
      image: "/images/home/reviews.webp", // Replace with your image path
    },
    {
      id: 2,
      title: "iQOO 16 Review: Is the 165Hz Display Worth the High Price?",
      description:
        "The iQOO 16 is a top-tier flagship device for those seeking performance, a responsive display and extended...",
      author: "Mezbah Ahmed",
      date: "October 14, 2026",
      rating: 4.5,
      image: "/images/home/reviews.webp", // Replace with your image path
    },
    {
      id: 3,
      title:
        "Honor Magic9 Pro Max Review: Powerful Flagship or Disappointing Choice?",
      description:
        "Honor Magic9 Pro Max is a phone with a lot to offer. The combination of two 200MP cameras with ARRI, an...",
      author: "Mezbah Ahmed",
      date: "October 13, 2026",
      rating: 2.9,
      image: "/images/home/reviews.webp", // Replace with your image path
    },
    {
      id: 4,
      title:
        "Oppo Find X10 Pro Max Review: Great 200MP Cameras, But Is Zoom Enough?",
      description:
        "Oppo has been taking a big leap this year. The Find X10 Pro Max is the first phone to be equipped with three...",
      author: "Mezbah Ahmed",
      date: "October 12, 2026",
      rating: 4.3,
      image: "/images/home/reviews.webp", // Replace with your image path
    },
  ];

  return (
    <>
      <Container className="mt-6 mb-10">
        <div className="">
          <div className="border border-border rounded">
            <SectionHeader text="Latest Reviews" link="/official-phones" />
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-3 gap-4 max-w-7xl w-full">
                {reviews.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 shadow-sm flex flex-col justify-between overflow-hidden"
                  >
                    {/* Image Container with Badges */}
                    <div className="relative w-full h-44 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />

                      {/* Top Rating Badge */}
                      <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-[2px] text-amber-400 px-2 py-0.5 rounded-sm flex items-center gap-1 text-xs font-semibold">
                        <span>★ ★ ★ ★ ★</span>
                        <span className="text-white text-[11px] ml-0.5">
                          {item.rating.toFixed(1)}
                        </span>
                      </div>

                      {/* Bottom Author & Date Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white/90 px-2 py-1 flex items-center justify-between text-[11px] font-medium">
                        <span>by {item.author}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-3 flex flex-col justify-between flex-grow">
                      <h3 className="text-[#3b82f6] font-bold text-sm leading-tight hover:underline cursor-pointer line-clamp-3 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

    </>
  );
}
