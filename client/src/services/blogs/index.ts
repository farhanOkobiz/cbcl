"use server";
import { apiBaseUrl } from "@/config/config";

export const getAllBlogs = async (filters?: {
  categorySlug?: string;
  subCategorySlug?: string;
}) => {
  const params = new URLSearchParams();

  if (filters?.categorySlug) params.append("category", filters.categorySlug);
  if (filters?.subCategorySlug)
    params.append("subCategory", filters.subCategorySlug);

  const res = await fetch(`${apiBaseUrl}/blog?${params.toString()}`);
  return res.json();
};

export const getAllVideoBlogs = async () => {
  const res = await fetch(`${apiBaseUrl}/blog/videoblog`);
  return res.json();
};

export const getAllFacebookBlogs = async () => {
  const res = await fetch(`${apiBaseUrl}/blog/facebookBlogs`);
  return res.json();
};

export const getSingleBlogBySlug = async (slug: string) => {
  console.log("slug", slug);
  console.log("slug", `${apiBaseUrl}/blog/single/${slug}`);
  const res = await fetch(`${apiBaseUrl}/blog/single/${slug}`);
  return res.json();
};
// export const getSingleBannerBySlug = async (slug: string) => {
//   const res = await fetch(`${apiBaseUrl}/banners/${slug}`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch banners");
//   }

//   return res.json();
// };
