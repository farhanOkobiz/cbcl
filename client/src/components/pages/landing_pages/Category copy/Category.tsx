import { getAllCategorys } from "@/services/categorys";
import CategoryCardSliderTwo from "@/slider/CategoryCardSlider copy/CategoryCardSlider";
import CategoryCardSlider from "@/slider/CategoryCardSlider/CategoryCardSlider";
import React from "react";

const CategoryTwo = async () => {
  const { data: categoriesList } = await getAllCategorys();
  return (
    <div className="">
      <div className="text-center pb-5">
        <h2 className="md:text-2xl text-xl font-semibold text-blue-950">
          OUR BLOG CATEGORY
        </h2>
      </div>
      <CategoryCardSliderTwo categoriesList={categoriesList} />
    </div>
  );
};

export default CategoryTwo;
