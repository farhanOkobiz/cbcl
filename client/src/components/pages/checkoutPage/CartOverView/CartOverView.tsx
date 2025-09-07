"use client";

import { apiBaseUrl } from "@/config/config";
import { TProduct } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Key, useState } from "react";

interface Props {
  products: TProduct;
  shipping: number;
}

const CartOverView: React.FC<Props> = ({ products, shipping }) => {
  const [showCartOverview, setShowCartOverview] = useState(false);

  const subTotalPrice = Number(products?.totalPrice) + shipping;

  console.log("cartoverView product", products);
  return (
    <div className="top-20 sticky">
      <div
        onClick={() => setShowCartOverview((prev) => !prev)}
        className="top-10 left-0 absolute lg:hidden bg-[#1D4092] w-full py-2 cursor-pointer"
      >
        <h2 className="text-center text-white text-sm font-semibold">
          Cart Overview
        </h2>
      </div>

      <AnimatePresence>
        {(showCartOverview ||
          (typeof window !== "undefined" && window.innerWidth >= 1024)) && (
          <motion.div
            key="cart-overview"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 50 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`bg-gray-100 px-10 py-8 rounded relative lg:top-0 top-12 ${
              showCartOverview ? "block" : "hidden"
            } lg:block lg:mt-8`}
          >
            <div className="flex xl:justify-center gap-4 border-b border-black/20 pb-2 ">
              <div className="xl:text-2xl text-xl font-bold">Cart Overview</div>
              <Link href="/cart">
                <div className="font-bold text-[#D4A373] hover:underline">
                  Modify Order
                </div>
              </Link>
            </div>

            <div className="justify-center gap-4 text-sm">
              <div className="xl:py-8 py-4">
                {products?.cartDetails?.map(
                  (product: {
                    [x: string]: any;
                    _id: Key | null | undefined;
                    quantity: string;
                    product: TProduct;
                  }) => (
                    <div className="py-2" key={product._id}>
                      <p className="pb-1">{product?.product?.name}</p>
                      <div className="flex justify-between">
                        {product?.product?.thumbnailImage && (
                          <Image
                            height={100}
                            width={100}
                            src={apiBaseUrl + product?.product?.thumbnailImage}
                            alt={product?.product?.name}
                            className="w-16 h-16 object-cover"
                          />
                        )}
                        <p>
                          {product?.quantity || "N/A"} X ৳
                          {product?.inventory?.price}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex justify-between font-bold text-[16px] py-3 border-t border-black/20">
              <p>subtotal:</p>
              <p className="text-[#D4A373] text-[20px]">
                ৳{products?.totalPrice}
              </p>
            </div>
            <div className="flex justify-between font-bold text-[16px] py-3">
              <p>Shipping (+):</p>
              <p className="text-[#D4A373] text-[20px]">৳{shipping}</p>
            </div>
            <div className="flex justify-between font-bold text-[16px] py-3">
              <p>Discount (-):</p>
              <p className="text-[#D4A373] text-[20px]">
                ৳{products?.couponDiscount}
              </p>
            </div>
            <div className="flex justify-between font-bold text-[20px] py-3 border-t border-black/20">
              <p>Payable:</p>
              <p className="text-[#D4A373]">
                ৳{subTotalPrice - (products?.couponDiscount ?? 0)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartOverView;
