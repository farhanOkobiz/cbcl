"use client";

import { apiBaseUrl } from "@/config/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

export type BlogCardProps = {
  title: string;
  details: string;
  image: string;
  tags?: string[];
  date?: string | Date;
  author?: string;
  slug: string;
};

const BlogCardTwo: React.FC<BlogCardProps> = ({
  title,
  details,
  image,
  slug,
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-[#E2E8CF] duration-300">
      {/* Top Section: Image + Title */}
      <Link href={`blogs/${slug}`}>
        <div className="flex items-center p-4 cursor-pointer gap-4">
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_640.jpg"
            alt={title}
            width={100}
            height={100}
            className="h-[100px] w-[100px] object-cover rounded-lg"
          />

          <motion.h2
            whileHover={{ color: "#2F855A" }}
            className="text-lg font-semibold  text-[#1A202C]"
          >
            {title}
          </motion.h2>
        </div>
      </Link>

      {/* Text Section */}
      <div className="px-4 pb-4">
        <Link href={`blogs/${slug}`}>
          <p className="mt-2 text-[#2D3748] text-sm line-clamp-2 cursor-pointer">
            <span dangerouslySetInnerHTML={{ __html: details }} />
          </p>
        </Link>

        {/* Read More */}
        <Link href={`blogs/${slug}`}>
          <div className="flex items-center gap-1 mt-3 font-semibold text-[#2F855A] cursor-pointer group-hover:underline">
            <span>Read More</span>
            <span className="mt-1">
              <BsArrowRight />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCardTwo;
