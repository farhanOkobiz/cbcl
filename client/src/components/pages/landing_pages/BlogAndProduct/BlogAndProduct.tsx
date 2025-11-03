import "swiper/css";
import "swiper/css/navigation";
import BlogAndProductCard from "../../products/BlogAndProductCard/BlogAndProductCard";
import Blogs from "../Blogs/Blogs";
import VideoBlogs from "../VideoBlogs/VideoBlogs";
import Category from "../Category/Category";
import FaceBookBlogs from "@/app/(withCommonLayout)/Facebookblog/FaceBookBlogs";
import { Blog } from "@/types/blog";

interface BlogProps {
  blogs: {
    data: Blog[];
  };
}

const BlogAndProduct: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <div className="Container relative mt-16">
      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-2 2xl:gap-8 mt-8">
        {/* Left Sidebar - Blogs */}
        <div className="col-span-3">
          <Blogs />
        </div>
        {/* Middle Section - Blog Cards */}
        <div className="col-span-5 space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="lg:text-2xl text-blue-950 text-xl font-semibold uppercase">
              Our Featured Blogs
            </h2>
          </div>
          {blogs?.data?.slice(0, 3).map((blog: Blog) => (
            <BlogAndProductCard key={blog._id} blog={blog} />
          ))}
        </div>
        {/* Right Sidebar - Video Blogs */}
        <div className="col-span-4 md:hidden lg:block mt-1">
          <Category />
          <FaceBookBlogs />
          <VideoBlogs />
        </div>
        {/* For md screens (2-column layout) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 items-start">
          {/* Column 1 - Category */}
          <div className="space-y-4">
            <Category />
            <FaceBookBlogs />
          </div>

          {/* Column 2 - Video blogs */}
          <div className="">
            <h2 className="lg:text-3xl md:text-2xl text-blue-950 text-xl font-semibold uppercase">
              Video Blogs
            </h2>
            <VideoBlogs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAndProduct;
