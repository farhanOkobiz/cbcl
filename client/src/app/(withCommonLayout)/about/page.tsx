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
                স্বাগতম{" "}
                <span className="relative inline-block">
                  <span className="uppercase text-[#52687f] relative z-10">
                    Community Business Company Ltd
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-[#52687f]/10 -z-0"></span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-3 font-light">
                একটি প্ল্যাটফর্ম যেখানে ব্লগ ও ই-কমার্স মিলে তৈরি করে একটি
                পূর্ণাঙ্গ ডিজিটাল অভিজ্ঞতা।
              </p>
            </div>

            {/* About Us Content (replaced) */}
            <div className="prose prose-lg text-gray-700">
              <p>
                <strong>Community Business Company Ltd</strong> একটি উদ্ভাবনী
                অনলাইন প্ল্যাটফর্ম, যেখানে ব্লগ ও ই-কমার্স একসাথে নতুন এক
                অভিজ্ঞতা নিয়ে এসেছে। আমরা বিশ্বাস করি যে জ্ঞান ও ব্যবসার সমন্বয়
                সমাজকে এগিয়ে নিয়ে যেতে পারে। আমাদের লক্ষ্য হলো এমন একটি ডিজিটাল
                কমিউনিটি তৈরি করা যেখানে মানুষ পড়বে, শিখবে এবং একই সঙ্গে
                উচ্চমানের পণ্য কেনাকাটা করতে পারবে — সব এক জায়গাই।
              </p>

              <p>
                আমাদের ব্লগ সেকশনে আপনি পাবেন তথ্যবহুল ও অনুপ্রেরণাদায়ক
                কনটেন্ট—ব্যবসা, প্রযুক্তি, জীবনধারা, শিক্ষা ও কমিউনিটি উন্নয়ন
                বিষয়ে। ই-কমার্স সেকশনে রয়েছে যাচাইকৃত ও বিশ্বস্ত পণ্যের সংগ্রহ,
                যাতে প্রতিটি ক্রেতা পায় নিশ্চিন্ত ও সহজ- অনলাইন শপিং অভিজ্ঞতা।
              </p>

              <div className="bg-gradient-to-r from-[#52687f]/5 to-transparent border-l-4 border-[#52687f] p-6 rounded-r-lg mt-4">
                <p className="mb-0">
                  <span className="font-semibold text-[#52687f]">
                    আমাদের মিশন:
                  </span>{" "}
                  জ্ঞান ছড়ানো, সুযোগ তৈরি করা, এবং কমিউনিটির বিকাশে অবদান রাখা।
                </p>
              </div>

              <div className="mt-4">
                <p>
                  <span className="font-semibold">আমাদের ভিশন:</span> একটি
                  স্মার্ট, সৃজনশীল ও সংযুক্ত বাংলাদেশ গড়ে তোলা, যেখানে প্রত্যেকে
                  তার জ্ঞান ও উদ্যোগের মাধ্যমে সমাজে ইতিবাচক পরিবর্তন আনতে পারে।
                </p>
              </div>

              <p>
                আমরা ক্রেতাদের কাছে ১০০% আসল পণ্য পৌঁছে দেওয়ার বিষয়ে
                প্রতিশ্রুতিবদ্ধ — মান, আসলত্ব ও টেকসই ব্যবহার আমাদের মূল
                মানদণ্ড। প্রতিটি পণ্য মনোযোগের সাথে নির্বাচিত হয়, সরবরাহকারীর
                বিশ্বাসযোগ্যতা যাচাই করা হয় এবং গ্রাহক সেবা দিয়ে আমরা সেই
                প্রতিশ্রুতি ধরে রাখি।
              </p>

              <p>
                আমাদের টিম গ্রাহক-ফোকাসড: আপনার প্রয়োজন, মতামত ও প্রতিক্রিয়া
                আমাদের কাছে মূল্যবান। যদি কোনো প্রশ্ন বা পরামর্শ থাকে — আমাদের
                সাথে যোগাযোগ করতে দ্বিধা করবেন না।
              </p>

              <div className="mt-8 p-8 bg-gradient-to-br from-[#52687f]/10 via-[#52687f]/5 to-transparent rounded-xl border border-[#52687f]/20 text-center">
                <p className="text-xl md:text-2xl font-semibold text-[#262626] mb-3">
                  Community Business Company Ltd
                </p>
                <div className="flex items-center justify-center gap-3 mt-2 text-gray-700 flex-wrap">
                  <span className="font-medium">আসলত্ব</span>
                  <span className="text-[#52687f]">•</span>
                  <span className="font-medium">সত্যতা</span>
                  <span className="text-[#52687f]">•</span>
                  <span className="font-medium">গুণগত মানের প্রতিশ্রুতি</span>
                </div>
              </div>

              <p className="mt-4">
                চাইলে আমি এই টেক্সটকে ইংরেজিতে অনুবাদ করে বা ওয়েবসাইটের টোন
                অনুযায়ী (formal, friendly, অথবা SEO-ফ্রেন্ডলি) রিরাইট করে দিতে
                পারি।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
