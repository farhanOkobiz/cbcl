import NavBar from "@/components/pages/header/NavBar/NavBar";
import { apiBaseUrl } from "@/config/config";
import { getUser } from "@/services/auth";
import { getSingleBlogBySlug } from "@/services/blogs";
import { getCartProducts } from "@/services/cart";

import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";

interface PageProps {
  params: Promise<{
    blogSlug: string;
  }>;
}

const page: React.FC<PageProps> = async ({ params }) => {
  const user = await getUser();
  const userId = user?.id;
  const coupon = "";
  const products = await getCartProducts(userId, coupon);

  const resolvedParams = await params;
  console.log("Slug param --->", resolvedParams.blogSlug);

  const singleBlog = await getSingleBlogBySlug(resolvedParams.blogSlug);

  console.log("singleBlog", singleBlog);
  return (
    <div className="bg-[#f4f7fa]">
      <NavBar userCartProducts={products?.data} />
      <div className="container mx-auto py-12 px-4 lg:mt-0 mt-20 2xl:px-32 xl:px-40 lg:px-14">
        <div className="max-w-5xl mx-auto">
          {/* Featured Image with Enhanced Styling */}
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#52687f]/20 to-[#52687f]/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative xl:h-[500px] lg:h-[450px] h-[320px] rounded-2xl overflow-hidden border-2 border-[#52687f]/20 shadow-xl hover:shadow-2xl transition-all duration-500">
              <Image
                src={apiBaseUrl + singleBlog?.data?.image}
                alt={singleBlog?.data?.title || "Blog image"}
                width={1200}
                height={600}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content Section */}
          <article className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 border border-gray-100">
            {/* Author Info */}
            {singleBlog?.data?.author && (
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                <div className="bg-gradient-to-br from-[#52687f] to-[#3d5168] text-white rounded-full p-3 shadow-md">
                  <FaRegUser className="text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Written by</p>
                  <h3 className="font-semibold text-[#262626] text-lg">{singleBlog?.data?.author}</h3>
                </div>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#262626] leading-tight mb-6">
              {singleBlog?.data?.title}
            </h1>

            {/* Blog Content */}
            <div className="mt-8 mb-10">
              <div
                className="text-gray-700 leading-relaxed text-base md:text-lg space-y-4"
                dangerouslySetInnerHTML={{ __html: singleBlog?.data?.details }}
              />
            </div>

            {/* Tags Section */}
            {singleBlog?.data?.tags && singleBlog?.data?.tags.length > 0 && (
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 text-[#52687f] font-semibold text-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <span>Tags</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {singleBlog?.data?.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-[#52687f]/10 to-[#52687f]/5 border border-[#52687f]/30 text-[#52687f] text-sm font-semibold rounded-full hover:bg-[#52687f] hover:text-white transition-all duration-300 cursor-default hover:shadow-lg hover:scale-105"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default page;
