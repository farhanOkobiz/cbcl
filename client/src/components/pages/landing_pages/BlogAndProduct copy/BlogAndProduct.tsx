/* eslint-disable @typescript-eslint/no-unused-vars */
import { TProduct } from "@/types";
import "swiper/css";
import "swiper/css/navigation";
import BlogAndProductCard from "../../products/BlogAndProductCard/BlogAndProductCard";
import Blogs from "../Blogs/Blogs";
import VideoBlogs from "../VideoBlogs/VideoBlogs";
import BlogsTwo from "../Blogs copy/Blogs";
import VideoBlogsTwo from "../VideoBlogs copy/VideoBlogs";
import BlogAndProductCardTwo from "../../products/BlogAndProductCard copy/BlogAndProductCard";
import CategoryTwo from "../Category copy/Category";

interface ProductsProps {
  blogs: TProduct;
}

const BlogAndProductTwo: React.FC<ProductsProps> = ({ blogs }) => {
  console.log("products?.data?.result?.products?", blogs);

  return (
    <div className="Container relative mt-16">
      {/* <h2 className=" uppercase text-blue-950 md:text-2xl text-xl font-semibold md:text-center mt-2 flex items-center justify-center md:justify-center gap-2">
        Our Featured Blogs
      </h2> */}
      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
        {/* Left Sidebar - Blogs */}
        <div className="col-span-1 md:hidden lg:block">
          <BlogsTwo />
          <VideoBlogsTwo />
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-2">
          <BlogsTwo />
          <VideoBlogsTwo />
        </div>

        {/* Middle Section - Blog Cards */}
        <div className="col-span-2 space-y-6">
          {blogs?.data?.slice(0, 3).map((blog: TProduct) => (
            <BlogAndProductCardTwo key={blog._id} blog={blog} />
          ))}
        </div>

        {/* Right Sidebar - Video Blogs */}
        <div className="col-span-1">
          <CategoryTwo />
        </div>
      </div>
    </div>
  );
};

export default BlogAndProductTwo;
