import NavBar from "@/components/pages/header/NavBar/NavBar";
import BlogCard from "@/components/pages/landing_pages/BlogCard/BlogCard";
import VideoBlogCard from "@/components/pages/landing_pages/VideoBlogCard/VideoBlogCard";
import { getUser } from "@/services/auth";
import { getAllBlogs, getAllVideoBlogs } from "@/services/blogs";
import { getCartProducts } from "@/services/cart";
import { getShopSidebar } from "@/services/shopSidebar";
import React from "react";
import BlogCategories from "./BlogCategories";

export const revalidate = 0;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const { data: shopSideBar } = await getShopSidebar();

  const categorySlug = Array.isArray(params.category)
    ? params.category[0]
    : params.category || "";

  const subCategorySlug = Array.isArray(params.subCategory)
    ? params.subCategory[0]
    : params.subCategory || "";

  const user = await getUser();
  const userId = user?.id;
  const coupon = "";
  const cartProducts = await getCartProducts(userId, coupon);

  // 🧩 Fetch filtered blogs
  const { data: allBlogs } = await getAllBlogs({
    categorySlug,
    subCategorySlug,
  });

  const { data: allVideoBlogs } = await getAllVideoBlogs();

  return (
    <div>
      <NavBar userCartProducts={cartProducts?.data} />
      <div className="flex Container py-12 lg:mt-0 mt-20 min-h-screen">
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-[25%] 2xl:w-[20%]">
          <BlogCategories shopSideBar={shopSideBar} />
        </div>

        {/* Blog List */}
        <div className="flex-1">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {Array.isArray(allBlogs) &&
              allBlogs.map((blog: any) => (
                <BlogCard
                  key={blog._id}
                  title={blog.title}
                  details={blog.details}
                  image={blog.image}
                  tags={blog.tags}
                  date={blog.createdAt}
                  author={blog.author}
                  slug={blog.slug}
                />
              ))}
          </div>

          {/* Video Blogs */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
            {Array.isArray(allVideoBlogs) &&
              allVideoBlogs.slice(0, 4).map((blog: any) => (
                <VideoBlogCard
                  key={blog._id}
                  title={blog.title}
                  youtubeUrl={blog.youtubeUrl}
                  tags={blog.tags}
                  date={blog.createdAt}
                  author={blog.author}
                  slug={blog.slug}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
