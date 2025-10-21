"use client";
import { TCategory } from "@/types";

interface CategoryProps {
  categoriesList: TCategory[];
}

const CategoryCardSliderTwo: React.FC<CategoryProps> = ({ categoriesList }) => {
  return (
    <div className="grid grid-cols-1 relative w-full gap-6">
      {categoriesList.map((category) => (
        <div key={category._id} className="flex items-center gap-2 ml-3">
          <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
          <p className="font-semibold text-blue-950 text-lg md:text-xl truncate ">
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCardSliderTwo;
