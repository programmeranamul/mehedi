import Image from "next/image";
import { Container } from "../layout/container";
import SectionHeader from "../shared/section-header";

export default function PhoneComparison() {
  const comparisons = [
    {
      id: 1,
      phone1: {
        name: "Apple iPhone 16 Pro Max",
        score: "89%",
        price: "৳249,999",
        image: "/images/phones/mob.webp", // Replace with your image path
      },
      phone2: {
        name: "Apple iPhone 17 Pro Max",
        score: "90%",
        price: "৳202,999",
        image: "/images/phones/mob.webp", // Replace with your image path
      },
    },
    {
      id: 2,
      phone1: {
        name: "Oppo A5 Pro",
        score: "75%",
        price: "৳23,990",
        image: "/images/phones/mob.webp", // Replace with your image path
      },
      phone2: {
        name: "Realme C75",
        score: "73%",
        price: "৳19,999",
        image: "/images/phones/mob.webp", // Replace with your image path
      },
    },
    {
      id: 3,
      phone1: {
        name: "Oppo A5 Pro",
        score: "75%",
        price: "৳23,990",
        image: "/images/phones/mob.webp", // Replace with your image path
      },
      phone2: {
        name: "Realme C75",
        score: "73%",
        price: "৳19,999",
        image: "/images/phones/mob.webp", // Replace with your image path
      },
    },
    {
      id: 4,
      phone1: {
        name: "Oppo A5 Pro",
        score: "75%",
        price: "৳23,990",
        image: "/images/phones/mob.webp", // Replace with your image path
      },
      phone2: {
        name: "Realme C75",
        score: "73%",
        price: "৳19,999",
        image: "/images/phones/mob.webp", // Replace with your image path
      },
    },
  ];

  return (
    <>
      <Container className="mt-6">
        <div className="">
          <div className="border border-border rounded">
            <SectionHeader text="Upcoming Phones" link="/official-phones" />
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-3">
                {comparisons.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 p-4 rounded flex flex-col justify-between"
                  >
                    <div className="relative grid grid-cols-2 gap-2 mb-0">
                      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2 z-0" />

                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white">
                        VS
                      </div>

                      <div className="relative flex justify-center items-center p-2">
                        <span className="absolute top-0 right-2 z-10 bg-[#15803d] text-white text-xs font-semibold px-2 py-0.5 rounded-sm">
                          {item.phone1.score}
                        </span>
                        <div className="relative w-full h-32.5">
                          <Image
                            src={item.phone1.image}
                            alt={item.phone1.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div className="relative flex justify-center items-center p-2">
                        <span className="absolute top-0 right-2 z-10 bg-[#15803d] text-white text-xs font-semibold px-2 py-0.5 rounded-sm">
                          {item.phone2.score}
                        </span>
                        <div className="relative w-full h-32.5">
                          <Image
                            src={item.phone2.image}
                            alt={item.phone2.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center mb-3">
                      <div className="flex flex-col justify-between px-1">
                        <h3 className="text-slate-700 font-medium text-sm leading-tight">
                          {item.phone1.name}
                        </h3>
                        <p className="text-[#e11d48] font-semibold text-base mt-2">
                          {item.phone1.price}
                        </p>
                      </div>

                      <div className="flex flex-col justify-between px-1">
                        <h3 className="text-slate-700 font-medium text-sm leading-tight">
                          {item.phone2.name}
                        </h3>
                        <p className="text-[#e11d48] font-semibold text-base mt-2">
                          {item.phone2.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center pt-2">
                      <button className="w-full max-w-[200px] border border-[#3b82f6] text-[#2563eb] hover:bg-blue-50 font-medium text-sm py-1.5 px-4 rounded-sm tracking-wider uppercase transition-colors cursor-pointer">
                        Compare
                      </button>
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
