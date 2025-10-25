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

const VideoBlogs = async () => {
  const allVideoBlogs = await getAllVideoBlogs();

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 gap-4 mt-4">
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
      <Link href="/blogs">
        <div className="md:px-6 md:py-3 p-2 md:text-base text-sm my-6 text-[#fff] rounded bg-[#52687f] inline-flex hover:bg-[#CCD5AE] hover:text-gray-900 duration-300 cursor-pointer">
          <button className="cursor-pointer">View More</button>
        </div>
      </Link>
    </div>
  );
};

export default VideoBlogs;
