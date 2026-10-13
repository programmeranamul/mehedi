"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Gamepad2,
  Grid2X2,
  Leaf,
  Palette,
  Search,
  Tag,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/shared/section";
import { cn } from "@/lib/utils";
import NewsRow from "./news-row";
import LatestNews from "./latest-news";
import CompareLaptops from "./compare-laptops";
import { laptops } from "@/lib/data/mock";
import LaptopCard from "./laptop-card";
import ShopByBrand from "./shop by-brand";
import PopularLaptops from "./popular-laptops";
import FindTheRightLaptop from "./find-the-right-laptop";
import Categories from "./categories";







export function LaptopsPage() {
  return (
    <main className="bg-[#f8fbff] pb-20 text-[#092963]">
      <FindTheRightLaptop />
      
      <Categories />
      <PopularLaptops />
      
      <ShopByBrand />
      
      <CompareLaptops />
      
      <LatestNews />
    </main>
  );
}



