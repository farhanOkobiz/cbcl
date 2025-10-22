import NavBar from "@/components/pages/header/NavBar/NavBar";
import VideoBlogCard from "@/components/pages/landing_pages/VideoBlogCard/VideoBlogCard";
import { getUser } from "@/services/auth";
import { getAllBlogs, getAllVideoBlogs } from "@/services/blogs";
import { getCartProducts } from "@/services/cart";
import { getShopSidebar } from "@/services/shopSidebar";
import React from "react";
import BlogCategories from "./BlogCategories";
import BlogCategoryCardSlider from "@/slider/BlogCategoryCardSlider/CategoryCardSlider";
import { getAllBlogCategorys } from "@/services/categorys";
import AllBlogCard from "@/components/pages/blog/AllBlogCart";
import BannerImage from "@/components/pages/bannerImage/BannerImage";
import B1 from "../../../assets/blog/b1.jpg"

export const revalidate = 0;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const { data: blogCategoriesList } = await getAllBlogCategorys();

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
    <div className="bg-[#f4f7fa]">
      <NavBar userCartProducts={cartProducts?.data} />
      <BannerImage image={B1} />
      <div className="flex Container py-12 min-h-screen">
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-[25%] 2xl:w-[20%]">
          <BlogCategories shopSideBar={blogCategoriesList} />
        </div>
        {/* Blog List */}
        <div className="flex-1 lg:ml-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4    gap-4">
            {Array.isArray(allBlogs) &&
              allBlogs.map((blog: any) => (
                <AllBlogCard
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
              allVideoBlogs?.map((blog: any) => (
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
