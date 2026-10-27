import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/container";

export default function BlogAndSidebar() {
  const blogPosts = [
    {
      id: 1,
      title:
        "OnePlus 16 Launched on 12 October in China With Snapdragon 8 Elite Extreme Gen 6 & 9,000mAh Battery: Check price in...",
      description:
        "OnePlus unveiled OnePlus 16 on 12 October 2026 in China with significant upgrades from its predecessor of last year. It features Qualcomm's newly launched Snapdrago...",
      image: "/images/home/blog-and-sidebar.webp", // Replace with your actual image path
      alt: "OnePlus 16",
    },
    {
      id: 2,
      title:
        "Realme C100 Launched On 8 October in Bangladesh With an 8000mAh Titan battery and IP69 Pro Durability, Price Starin...",
      description:
        "Realme has launched its latest C series smartphone, the Realme C100, in Bangladesh, with an emphasis on long battery life and a robust design. The...",
      image: "/images/home/blog-and-sidebar.webp", // Replace with your actual image path
      alt: "Realme C100",
    },
    {
      id: 3,
      title:
        "Vivo Y32 Launched On 7 October in Bangladesh With 8000mAh Battery, IP69 protection, Price Starts At Tk 30,999",
      description:
        "Finally Vivo has officially launched the Y32 smartphone in Bangladesh on 7 October 2026, bringing a large battery and strong durability to its Y-series lineup. The device...",
      image: "/images/home/blog-and-sidebar.webp", // Replace with your actual image path
      alt: "Vivo Y32",
    },
  ];

  const features = [
    "Most Popular Mobile Phones in Bangladesh",
    "Top 10 Best Slim Phone in Bangladesh 2026",
    "10 Best Smartphone under 20,000 taka in Bangladesh 2026",
    "10 Best 5G Smartphones Under Tk. 30,000 in Bangladesh 2026",
    "Latest Top Battery Mobile Phones in Bangladesh 2026",
    "Best Camera Mobile Phones in Bangladesh",
    "Best Gaming Mobile Phones Bangladesh",
    "Best Display Mobile Phones in Bangladesh 2026",
    "Top 10 Best Mobile Phones in Bangladesh 2026",
  ];

  return (
    <Container className="pt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Latest Blog Posts */}
        <div className="h-fit lg:col-span-2 bg-[#f8f9fa] border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center justify-between border-b-2 border-blue-600 pb-2 mb-4">
            <h2 className="text-[#333333] font-bold text-base md:text-lg uppercase tracking-wide">
              Latest MobileDokan Blog Posts
            </h2>
            <Link
              href="#"
              className="text-blue-600 hover:underline text-sm font-semibold flex items-center gap-1"
            >
              View More <span className="text-xs">&gt;</span>
            </Link>
          </div>

          {/* Blog List */}
          <div className="flex flex-col gap-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 p-3 rounded-sm flex flex-col sm:flex-row gap-4 items-start shadow-sm hover:shadow transition-shadow"
              >
                {/* Thumbnail */}
                <div className="w-full sm:w-30 h-24 relative flex-shrink-0 bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-[#212529] font-bold text-sm md:text-base hover:underline cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mt-1 line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: By Feature Sidebar */}
        <div className="bg-[#f8f9fa] border border-gray-200 p-4 shadow-sm h-fit">
          {/* Header */}
          <div className="border-b-2 border-blue-600 pb-2 mb-4">
            <h2 className="text-[#333333] font-bold text-base md:text-lg uppercase tracking-wide">
              By Feature
            </h2>
          </div>

          {/* Feature List */}
          <ul className="flex flex-col">
            {features.map((feature, index) => (
              <li
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <Link
                  href="#"
                  className="block py-2.5 text-blue-700 hover:text-blue-900 text-sm font-medium hover:underline leading-snug"
                >
                  {feature}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
