"use server";
import React from "react";
import NavBar from "@/components/pages/header/NavBar/NavBar";
import { getCartProducts } from "@/services/cart";
import { getUser } from "@/services/auth";
import BannerImage from "@/components/pages/bannerImage/BannerImage";
import A1 from "../../../assets/blog/a1.png";

const page = async () => {
  const user = await getUser();
  const userRef = user?.id;
  const coupon = "";
  const userCartProducts = await getCartProducts(userRef, coupon);

  return (
    <div className="bg-[#f4f7fa]">
      <NavBar userCartProducts={userCartProducts?.data} />
      <BannerImage image={A1} />

      <div className="Container lg:py-12 lg:mt-0 mt-20 pb-32">
        <div className="max-w-4xl mx-auto">
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
                A platform that blends blogs and e-commerce to create a complete digital experience.
              </p>
            </div>

            {/* About Us Content */}
            <div className="prose prose-lg text-gray-700">
              <p>
                <strong>Community Business Company Ltd</strong> is a Bangladesh-focused information
                platform designed to help people explore and understand the country in every possible way.
                From the taste of local street food to the beauty of heritage sites, from the latest
                business updates to traditional clothing trends — our website is a complete source of
                knowledge about Bangladesh.
              </p>

              <p>
                We bring together stories, facts, and insights from reliable sources so readers can easily
                discover the depth and diversity of our nation. Whether you’re a traveler, student,
                entrepreneur, or simply someone who loves Bangladesh, this is your space to learn, connect,
                and explore.
              </p>

              <div className="bg-gradient-to-r from-[#52687f]/5 to-transparent border-l-4 border-[#52687f] p-6 rounded-r-lg mt-4">
                <p className="mb-0">
                  <span className="font-semibold text-[#52687f]">Our Mission:</span>{" "}
                  To showcase the true essence of Bangladesh by gathering and sharing information from all
                  sectors — food, tourism, business, lifestyle, and culture. We aim to make authentic,
                  organized, and useful content available to everyone, creating a platform that reflects
                  the voice and spirit of Bangladesh.
                </p>
              </div>

              <div className="mt-4">
                <p>
                  <span className="font-semibold">Our Vision:</span> To become Bangladesh’s largest and
                  most trusted online information hub, where people from all backgrounds can discover,
                  contribute, and celebrate everything that defines our country. We want to inspire
                  curiosity, promote cultural pride, and connect communities through open access to
                  knowledge.
                </p>
              </div>

              <p>
                <span className="font-semibold">How the Website Works:</span> Community Business Company
                Ltd functions as a digital knowledge center. Our team and contributors collect verified
                information, stories, and visuals from across Bangladesh. The content is categorized under
                topics like food, tourism, monuments, business, fashion, and lifestyle, allowing visitors
                to explore easily.
              </p>

              <p>
                Each post is carefully curated and updated to ensure accuracy and relevance. The website
                also encourages user participation, so anyone can share their experience or information
                about Bangladesh — turning it into a truly community-driven platform.
              </p>

              <div className="mt-8 p-8 bg-gradient-to-br from-[#52687f]/10 via-[#52687f]/5 to-transparent rounded-xl border border-[#52687f]/20 text-center">
                <p className="text-xl md:text-2xl font-semibold text-[#262626] mb-3">
                  Community Business Company Ltd
                </p>
                <div className="flex items-center justify-center gap-3 mt-2 text-gray-700 flex-wrap">
                  <span className="font-medium">Authenticity</span>
                  <span className="text-[#52687f]">•</span>
                  <span className="font-medium">Integrity</span>
                  <span className="text-[#52687f]">•</span>
                  <span className="font-medium">Commitment to Quality</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
