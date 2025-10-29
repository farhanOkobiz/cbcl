import NavBar from "@/components/pages/header/NavBar/NavBar";
import VideoBlogCard from "@/components/pages/landing_pages/VideoBlogCard/VideoBlogCard";
import { getUser } from "@/services/auth";
import { getAllBlogs } from "@/services/blogs";
import { getCartProducts } from "@/services/cart";
import React from "react";
import BlogCategories from "./BlogCategories";
import { getAllBlogCategorys } from "@/services/categorys";
import AllBlogCard from "@/components/pages/blog/AllBlogCart";
import BannerImage from "@/components/pages/bannerImage/BannerImage";
import B1 from "../../../assets/blog/b1.jpg"
import FaceBookBlogCard from "../FaceBookBlogCard/FaceBookBlogCard";

export const revalidate = 0;

// Add this type here
type Blog = {
  _id: string;
  id?: string;
  title: string;
  details?: string;
  image?: string;
  tags?: string[];
  createdAt?: string;
  author?: string;
  slug: string;
  youtubeUrl?: string;
  facebookUrl?: string;
};

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

  // Fetch blogs with filters
  const { data: allBlogs } = await getAllBlogs({
    categorySlug,
    subCategorySlug,
  });
  console.log(
    "[blogs page] fetched blogs count:",
    Array.isArray(allBlogs) ? allBlogs.length : "no-data"
  );

  const youtubeBlogs = allBlogs.filter(
    (blog: Blog) => (blog).youtubeUrl && (blog).youtubeUrl !== ""
  );

  const facebookBlogs = allBlogs.filter(
    (blog: Blog) =>
      blog.facebookUrl &&
      blog.facebookUrl !== "" &&
      blog.facebookUrl !== "undefined"
  );

  const normalBlogs = allBlogs.filter((blog: Blog) => {
    const hasYoutube =
      blog.youtubeUrl &&
      blog.youtubeUrl !== "" &&
      blog.youtubeUrl !== "undefined";
    const hasFacebook =
      blog.facebookUrl &&
      blog.facebookUrl !== "" &&
      blog.facebookUrl !== "undefined";

    return !hasYoutube && !hasFacebook;
  });



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
          {/* Facebook Blogs */}
          {facebookBlogs.length > 0 && (
            <div className="flex-1 lg:ml-4">
              <h2 className="text-gray-900 text-2xl font-bold mb-4">
                Facebook Blogs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3    gap-4">
                {facebookBlogs?.map((blog: Blog) => (
                  <FaceBookBlogCard
                    key={blog.id}
                    image={blog.image ?? ""}
                    title={blog.title}
                    facebookUrl={blog.facebookUrl ?? ""}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Video Blogs */}
          {youtubeBlogs.length > 0 && (
            <div className="mt-8 lg:ml-4">
              <h2 className="text-gray-900 text-2xl font-bold mb-4">Video Blogs</h2>
              <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {youtubeBlogs.map((blog: any) => (
                  <VideoBlogCard
                    key={blog._id}
                    title={blog.title}
                    youtubeUrl={blog.youtubeUrl}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Normal Blogs */}
          {normalBlogs.length > 0 && (
            <div className="mt-8 lg:ml-4">
              <h2 className="text-gray-900 text-2xl font-bold mb-4">All Blogs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {normalBlogs.map((blog: any) => (
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
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
