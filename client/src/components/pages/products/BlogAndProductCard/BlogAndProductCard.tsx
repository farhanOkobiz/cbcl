"use client";
import Image from "next/image";
import { apiBaseUrl } from "@/config/config";
import Link from "next/link";
import { TProduct } from "@/types";
import ProductDialog from "../ProductDialog/ProductDialog";

type Blog = {
  _id: string;
  title: string;
  author: string;
  createdAt: string;
  details: string;
  tags: string[];
  image: string;
};

type Props = {
  blog: Blog;
};

const BlogAndProductCard: React.FC<Props> = ({ blog }) => {
  const { _id, title, details, image } = blog;

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="group  overflow-hidden mt-6">
      <div className="overflow-hidden">
        {/* Image */}
        <div className="w-full max-h-[40vh] lg:max-h-[50vh] xl:max-h-[50vh] md:w-1/2 float-left md:mr-4 mb-4 md:mb-0 relative aspect-square">
          <Image
            src={apiBaseUrl + image}
            alt={title}
            fill
            className="object-cover rounded"
          />
        </div>
        {/* Text */}
        <div className="text-justify">
          <h2 className="font-bold text-xl md:text-3xl lg:text-4xl py-4 text-blue-950">
            {title}
          </h2>
          <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4 gap-2">
            {blog.author && (
              <span className=" text-lg font-semibold">
                <span className="hidden sm:inline">Author:</span> {blog.author}
              </span>
            )}
            <span className="before:content-['•'] px-2 text-lg font-semibold">
              {formattedDate}
            </span>
          </div>

          <div className="text-lg text-gray-600 leading-relaxed">
            <div className="">
              <div dangerouslySetInnerHTML={{ __html: details }} />
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="flex gap-2 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#52687f] text-white text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAndProductCard;
