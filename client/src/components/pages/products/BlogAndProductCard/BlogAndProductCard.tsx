"use client";
import Image from "next/image";
import { apiBaseUrl } from "@/config/config";
import Link from "next/link";
import { TProduct } from "@/types";
import ProductDialog from "../ProductDialog/ProductDialog";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }} className="group overflow-hidden mb-4">
      <div className="overflow-hidden">
        <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-lg border border-[#E2E8CF] duration-300  p-4">
          {/* Image */}
          <div className="mt-6 w-full max-h-[40vh] lg:max-h-[50vh] xl:max-h-[50vh] md:w-1/2 float-left md:mr-4 mb-4 md:mb-0 relative aspect-square">
            <Image
              src={apiBaseUrl + image}
              alt={title}
              fill
              className="object-cover rounded"
            />
          </div>
          {/* Text */}
          <div className="text-justify">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl py-4 text-blue-950">
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

            <div  className="text-lg text-gray-600 leading-relaxed">
              <div className="">
                <div dangerouslySetInnerHTML={{ __html: details }} />
              </div>
            </div>
          </div>

          <div  className="flex justify-start">
            <div className="flex gap-2 mb-4">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#52687f] text-white text-xs px-4 py-2 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogAndProductCard;
