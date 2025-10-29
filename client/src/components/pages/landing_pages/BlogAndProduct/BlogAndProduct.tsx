
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
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 mt-8">
        {/* Left Sidebar - Blogs */}
        <div className="col-span-1">
          <Blogs />
        </div>
        {/* Middle Section - Blog Cards */}
        <div className="col-span-2 space-y-6">
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
        <div className="col-span-1 md:hidden lg:block">
          <Category />
          <FaceBookBlogs />
          <VideoBlogs />
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-2">
          <Category />
          <FaceBookBlogs />
          <VideoBlogs />
        </div>
      </div>
    </div>
  );
};

export default BlogAndProduct;
