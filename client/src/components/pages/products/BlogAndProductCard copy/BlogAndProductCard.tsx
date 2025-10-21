"use client";
import Image from "next/image";
import { apiBaseUrl } from "@/config/config";
import { TProduct } from "@/types";

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

const BlogAndProductCardTwo: React.FC<Props> = ({ blog }) => {
  const { title, details, image, author, createdAt, tags } = blog;

  const formattedDate = new Date(createdAt).toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="group overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-lg border border-[#E2E8CF] p-4 md:p-6 mb-6">
      {/* 1️⃣ Image */}
      <div className="w-full mb-4 relative aspect-video rounded overflow-hidden">
        <Image
          src="https://cdn.pixabay.com/photo/2014/12/27/15/33/office-581127_640.jpg"
          alt={title}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* 2️⃣ Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A202C] mb-2">
        {title}
      </h2>

      {/* 3️⃣ Author & Date */}
      <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4 gap-2">
        {author && (
          <span className="font-semibold">
            <span className="hidden sm:inline">Author:</span> {author}
          </span>
        )}
        <span className="before:content-['•'] px-2 font-semibold">
          {formattedDate}
        </span>
      </div>

      {/* 4️⃣ Details */}
      <div className="text-gray-600 leading-relaxed text-justify mb-4">
        <div dangerouslySetInnerHTML={{ __html: details }} />
      </div>

      {/* 5️⃣ Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#2F855A] text-white text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogAndProductCardTwo;
