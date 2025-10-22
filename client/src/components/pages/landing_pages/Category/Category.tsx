
import { getAllBlogCategorys } from "@/services/categorys";
import CategoryCardSlider from "@/slider/BlogCategoryCardSlider/CategoryCardSlider";
import React from "react";

const Category = async () => {
  const { data: blogCategoriesList } = await getAllBlogCategorys();
  return (
    <div className="">
      <div className="text-center pb-5">
        <h2 className="md:text-2xl text-xl font-semibold text-blue-950">
           BLOG CATEGORY
        </h2>
      </div>
      <CategoryCardSlider blogCategoriesList={blogCategoriesList} />
    </div>
  );
};

export default Category;
