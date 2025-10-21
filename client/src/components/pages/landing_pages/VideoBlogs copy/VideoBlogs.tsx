import React from "react";
import Link from "next/link";
import VideoBlogCard from "../VideoBlogCard/VideoBlogCard";
import { getAllVideoBlogs } from "@/services/blogs";
type Blog = {
  id: string;
  title: string;
  youtubeUrl: string;
  tags: string[];
  createdAt: string;
  author: string;
  slug: string;
};

const VideoBlogsTwo = async () => {
  const allVideoBlogs = await getAllVideoBlogs();

  return (
    <div className="mt-10 md:mt-0 lg:mt-8">
      <div className="flex md:items-center md:flex-row flex-col md:justify-between md:gap-0 gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="lg:text-2xl text-blue-950 text-xl font-semibold uppercase">
            Our Video Blogs
          </h2>
          <p className="text-blue-950 text-lg">
            Discover quick insights, helpful tips, and inspiring stories — all
            in one place!
          </p>
        </div>
        {/* <Link href="/blogs">
          <div className="md:px-6 md:py-3 p-2 md:text-base text-sm text-[#fff] rounded bg-[#52687f] inline-flex hover:bg-[#CCD5AE] hover:text-gray-900 duration-300 cursor-pointer">
            <button className="cursor-pointer">View More</button>
          </div>
        </Link> */}
      </div>
      <div className=" gap-4 mt-6">
        {Array.isArray(allVideoBlogs?.data) &&
          allVideoBlogs.data
            .slice(0, 4)
            .map((blog: Blog) => (
              <VideoBlogCard
                key={blog.id}
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
  );
};

export default VideoBlogsTwo;
