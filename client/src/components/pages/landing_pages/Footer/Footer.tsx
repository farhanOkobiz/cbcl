"use Client";

import React from "react";
import { FaFacebookF, FaRegCreditCard, FaTruck } from "react-icons/fa";
import { FaRegMessage, FaRightLeft } from "react-icons/fa6";
import Link from "next/link";
import DownFooter from "../../DownFooter/DownFooter";

interface FooterProps {
  userCartProducts: {
    cartDetails: any[]; // Replace 'any' with the specific type if known
  };
}

const Footer: React.FC<FooterProps> = ({ userCartProducts }) => {
  const quickLink = [
    {
      name: "প্রোডাক্ট",
      link: "/shop",
    },
    {
      name: "আমাদের সম্পর্কে",
      link: "/about",
    },
    {
      name: "ব্লগ",
      link: "/blogs",
    },
    {
      name: "যোগাযোগ",
      link: "/contact",
    },
  ];

  const information = [
    {
      name: "অর্ডার নীতি",
      link: "/orderPolicy",
    },
    {
      name: "গোপনীয়তা নীতি",
      link: "/privacyPolicy",
    },
    {
      name: "রিটার্ন পলিসি",
      link: "/returnPolicy",
    },
    {
      name: "শর্তাবলী",
      link: "/terms-condition",
    },
  ];

  return (
    <div className="relative bg-[#52687f]">
      <div className=" mx-auto  text-white pt-10 lg:pt-16">
        <div className=" Container mx-auto flex flex-col lg:flex-row justify-between space-y-5">
          <div>
            <div className="font-semibold mb-[20px] text-xl">
              যোগাযোগের তথ্য
            </div>
            <div className="text-md lg:text-lg flex flex-col space-y-1">
              {/* <div>Contact: +880 1735 775 093</div>
              <div>Whats app: +880 1735 775 093</div> */}
              <div>ঠিকানা: ঢাকা, বাংলাদেশ</div>
            </div>
          </div>
          <div>
            <div className=" font-semibold mb-[20px] text-xl">দ্রুত লিঙ্ক</div>
            <ul className=" text-xl">
              {quickLink.map((item, index) => (
                <div key={index}>
                  <Link href={item.link}>
                    <li className="my-1 relative group cursor-pointer">
                      <span className="inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:text-black text-md lg:text-lg">
                        {item.name}
                      </span>
                    </li>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <div className=" font-semibold mb-[20px] text-xl">
              প্রয়োজনীয় তথ্য
            </div>
            <ul className=" text-xl">
              {information.map((item, index) => (
                <div key={index}>
                  <Link href={item.link}>
                    <li className="my-1 relative group cursor-pointer">
                      <span className="inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:text-black text-md lg:text-lg">
                        {item.name}
                      </span>
                    </li>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <div className=" font-semibold mb-[20px] text-xl">সামাজিক যোগাযোগ</div>
            <div className="">
              <div className="flex lg:justify-center lg:items-center gap-2 mt-4">
                <a
                  href="https://www.facebook.com/people/CBCL/61574046337876/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 bg-[#2563EB] rounded text-[#fff] border border-[#fff]/0 hover:scale-95 hover:border-[#fff] hover:border duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded text-[#fff] border border-[#fff]/0 hover:scale-95 hover:border-[#fff] hover:border duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a> */}

                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded text-white border border-white/0 hover:scale-95 hover:border-white hover:border duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a> */}

                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 bg-[#F60000] rounded text-[#fff] border border-[#fff]/0 hover:scale-95 hover:border-[#fff] hover:border duration-300"
                  aria-label="youtube"
                >
                  <FaYoutube />
                </a> */}
              </div>

              {/* <div className="mt-2">
                <iframe
                  title="CBCL Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.887678301881!2d90.35840537590783!3d23.751612289096654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a0f9dbecab%3A0x1a5d5cce63cc8693!2sFabrilife!5e0!3m2!1sen!2sbd!4v1712391482365!5m2!1sen!2sbd"
                  width="500vh"
                  height="160vh"
                  className="rounded-md border border-gray-300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </div>
          </div>
        </div>
        <div className=" text-center py-4 border-t mt-4 md:mt-0">
          কপিরাইট © ২০২৫ CBCL. সর্বস্বত্ব সংরক্ষিত। ডেভেলপ করেছে{" "}
          <a target="_blank" href="https://okobiz.com/">
            okobiz
          </a>
          .
        </div>
      </div>

      <DownFooter userCartProducts={userCartProducts} />
    </div>
  );
};
export default Footer;
