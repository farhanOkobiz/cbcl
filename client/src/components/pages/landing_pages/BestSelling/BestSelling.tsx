/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { TBestSell, TProduct } from "@/types";
import icon from "@/assets/images/sectionIcon.webp";
import React, { useRef } from "react";
import PerfurmCard from "../../products/PerfurmCard/PerfurmCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; // or any icon set you prefer
import Image from "next/image";
import { NavigationOptions } from "swiper/types";

interface ProductsProps {
  products: TProduct;
}

const BestSelling: React.FC<ProductsProps> = ({ products }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  console.log(
    "products?.data?.result?.products?",
    products?.data?.result?.products
  );

  return (
    <div className="Container py-12 relative">
        <h2 className=" uppercase md:text-2xl text-xl font-semibold md:text-center mt-2 flex items-center justify-center md:justify-center gap-2">
          BEST SELLING FRAGRANCES
        <Image src={icon} width={35} height={35} alt="icon" className="inline-block" />
      </h2>
      <div className="flex justify-between items-center">
        <p className="here using this p for arrow right site hidden md:block"></p>
        <div className="flex gap-2 pb-2" ref={(el) => { }}>
          <button
            ref={prevRef}
            className="p-2 bg-[#D4A373] rounded hover:bg-[#CCD5AE] cursor-pointer text-[#fff] duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className="p-2 bg-[#D4A373] rounded hover:bg-[#CCD5AE] cursor-pointer text-[#fff] duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          if (navigation) {
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
        className="pb-8"
      >
        {products?.data?.result?.products?.map((product: TProduct) => (
          <SwiperSlide key={product._id}>
            <PerfurmCard product={product} />
          </SwiperSlide>
        ))}
        {/* 
        {products?.data?.result?.products?.length > 0 ? (
          products.data.result.products.map((product) => (
            <SwiperSlide key={product._id}>
              <PerfurmCard product={product} />
            </SwiperSlide>
          ))
        ) : (
          <p>No products found.</p>
        )} */}
      </Swiper>
    </div>
  );
};

export default BestSelling;
