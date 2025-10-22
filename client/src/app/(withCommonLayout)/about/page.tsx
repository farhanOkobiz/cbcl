"use server";
import React from "react";
import aboutImage from "@/assets/logo/CBCL.png";
import Image from "next/image";
import NavBar from "@/components/pages/header/NavBar/NavBar";
import { getCartProducts } from "@/services/cart";
import { getUser } from "@/services/auth";
import BannerImage from "@/components/pages/bannerImage/BannerImage";
import A1 from "../../../assets/blog/a1.png"

const page = async () => {
  const user = await getUser();
  const userRef = user?.id;
  const coupon = "";
  const userCartProducts = await getCartProducts(userRef, coupon);
  return (
    <div>
      <NavBar userCartProducts={userCartProducts?.data} />
      <BannerImage image={A1} />
      <div className="Container lg:py-12 lg:mt-0 mt-20 mb-32">
        <div className="max-w-4xl mx-auto">
          {/* Image Section with Enhanced Styling */}
          {/* <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#52687f]/20 to-[#52687f]/5 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative border-2 border-[#52687f]/30 rounded-lg p-3 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src={aboutImage}
                alt="Community Business Company"
                width={140}
                height={140}
                className="rounded-md"
              />
            </div>
          </div> */}

          {/* Content Section */}
          <div className="flex flex-col gap-6 mt-12">
            {/* Heading with Accent */}
            <div className="relative">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#262626] leading-tight">
                Welcome to{" "}
                <span className="relative inline-block">
                  <span className="uppercase text-[#52687f] relative z-10">
                    Community Business Company Ltd
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-[#52687f]/10 -z-0"></span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-3 font-light">
                A brand built on trust, elegance, and authenticity.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-[#52687f]/5 to-transparent border-l-4 border-[#52687f] p-6 rounded-r-lg">
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                At{" "}
                <span className="font-semibold text-[#52687f]">
                  Community Business Company Ltd
                </span>
                , we are passionate about delivering the finest products. Our mission
                is to bring you <span className="font-semibold">100% authentic items</span> sourced
                from globally renowned brands and trusted suppliers. Each product in
                our collection is carefully curated to ensure exceptional quality,
                true originality, and a lasting impression.
              </p>
            </div>

            {/* Story Section */}
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                What began as a shared vision between husband and wife has grown into
                a commitment to provide our customers with a premium fragrance
                experience. We believe that a great perfume does more than smell good
                – it reflects <span className="italic text-[#52687f]">identity, mood, and memory</span>.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                We invite you to explore our collection and find your perfect product
                with confidence and ease.
              </p>
            </div>

            {/* Closing Statement with Visual Emphasis */}
            <div className="mt-8 p-8 bg-gradient-to-br from-[#52687f]/10 via-[#52687f]/5 to-transparent rounded-xl border border-[#52687f]/20">
              <p className="text-xl md:text-2xl font-semibold text-center text-[#262626]">
                <span className="uppercase text-[#52687f] tracking-wide">
                  Community Business Company Ltd
                </span>
              </p>
              <div className="flex items-center justify-center gap-3 mt-4 text-gray-700 flex-wrap">
                <span className="font-medium">Authenticity</span>
                <span className="text-[#52687f]">•</span>
                <span className="font-medium">Honesty</span>
                <span className="text-[#52687f]">•</span>
                <span className="font-medium">Commitment to Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
