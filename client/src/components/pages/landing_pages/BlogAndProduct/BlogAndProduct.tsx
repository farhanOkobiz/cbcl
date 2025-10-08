/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { TBestSell, TProduct } from "@/types";
import icon from "@/assets/images/sectionIcon.webp";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; // or any icon set you prefer
import Image from "next/image";
import { NavigationOptions } from "swiper/types";
import BlogAndProductCard from "../../products/BlogAndProductCard/BlogAndProductCard";

interface ProductsProps {
  products: TProduct;
}

const BlogAndProduct: React.FC<ProductsProps> = ({ products }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  console.log(
    "products?.data?.result?.products?",
    products
  );

  

  return (
    <div className="Container relative">
      <h2 className=" uppercase md:text-2xl text-xl font-semibold md:text-center mt-2 flex items-center justify-center md:justify-center gap-2">
        Our Signature Scents
        <Image src={icon} width={35} height={35} alt="icon" className="inline-block" />
      </h2>

      {/* Grid container */}
      <div className=" grid gap-6 grid-cols-1 mt-6">
        {products?.data?.slice(0, 6).map((product: TProduct) => (
          <BlogAndProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>

  );
};

export default BlogAndProduct;
