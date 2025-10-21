/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { TProduct } from "@/types";

import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import BlogAndProductCard from "../../products/BlogAndProductCard/BlogAndProductCard";

interface ProductsProps {
  blogs: TProduct;
}

const BlogAndProduct: React.FC<ProductsProps> = ({ blogs }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  console.log("products?.data?.result?.products?", blogs);

  return (
    <div className="Container relative">
      <h2 className=" uppercase text-blue-950 md:text-2xl text-xl font-semibold md:text-center mt-2 flex items-center justify-center md:justify-center gap-2">
        Our Featured Blogs
      </h2>
      {/* Grid container */}
      <div className=" grid gap-6 grid-cols-1 mt-6">
        {blogs?.data?.slice(0, 3).map((blog: TProduct) => (
          <BlogAndProductCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogAndProduct;
