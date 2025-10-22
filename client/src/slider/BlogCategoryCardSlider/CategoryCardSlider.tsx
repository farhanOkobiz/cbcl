"use client";
import { TCategory } from "@/types";
import Image from "next/image";
import React, { useRef } from "react";
import { apiBaseUrl } from "@/config/config";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryProps {
  blogCategoriesList: TCategory[];
}

const BlogCategoryCardSlider: React.FC<CategoryProps> = ({ blogCategoriesList }) => {

  return (
     <div className="grid grid-cols-1 relative w-full gap-6 border p-4 border-gray-500 rounded">
      {blogCategoriesList.map((category) => (
        <Link
          key={category._id}
          href={`/blogs?category=${category.slug || category._id}`}
          className="flex items-center gap-2 ml-3 group"
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full inline-block group-hover:bg-blue-700 transition" />
          <p className="font-semibold text-blue-950 text-lg md:text-xl truncate group-hover:text-blue-700 transition">
            {category.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCategoryCardSlider;
