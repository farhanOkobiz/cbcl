"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TGender, TShopSideBar, TShopSideBarResponsive } from "@/types";
import { usePathname } from "next/navigation";
import { getShopSidebar } from "@/services/shopSidebar";
import ShopPageSidebar from "./ShopPageSidebar";
import AllPageSidebar from "./AllPageSidebar";
import { getAllProductsForShop } from "@/services/products";
import Link from "next/link";

type ResponsiveNavSidBarProps = {
  onClose: () => void;
  menuList: { title: string; link: string }[];
};

const ResponsiveNavSidBar: React.FC<ResponsiveNavSidBarProps> = ({
  onClose,
  menuList,
}) => {
  const pathname = usePathname();
  const [shopSideBar, setShopSideBar] = useState<TShopSideBar[]>([]);
  const [products, setProducts] = useState<TShopSideBarResponsive | null>(null);

  // console.log("products", products);
  useEffect(() => {
    getShopSidebar()
      .then((res) => {
        if (res?.data) setShopSideBar(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getAllProductsForShop({})
      .then((res) => {
        if (res?.data) setProducts(res.data?.filterOptions);
        console.log("products res.data", res?.data?.filterOptions);
      })
      .catch((err) => console.error(err));
    // .then((res) => { const { data: products } =
    //   console.log("products res.data", res.data);
    //   if (res?.data) setProducts(res.data);
    // })
    // .catch((err) => console.error(err));
  }, []);

  const isShopPage = pathname === "/shop";
  const defaultProducts: TShopSideBarResponsive = {
    brands: [],
    categories: [],
    genders: null as unknown as TGender, // Replace with a valid default value for TGender
    priceRange: { minPrice: 0, maxPrice: 0 }, // Set default values for minPrice and maxPrice
    sizes: [],
  };

  return (
    <div className="fixed top-0 left-0 w-[80%] h-full bg-white shadow-lg z-50 overflow-y-auto p-4">
      <button
        className="absolute top-3 right-3 text-2xl"
        onClick={onClose}
      >
        ×
      </button>

      <ul className="mt-10 space-y-3 ml-6">
        {menuList.map((menu, index) => (
          <li key={index}>
            <Link
              href={menu.link}
              className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition"
              onClick={onClose}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveNavSidBar;
