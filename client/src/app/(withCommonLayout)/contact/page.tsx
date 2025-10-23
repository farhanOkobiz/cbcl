import BannerImage from "@/components/pages/bannerImage/BannerImage";
import ContactFrom from "@/components/pages/contact/ContactFrom";
import NavBar from "@/components/pages/header/NavBar/NavBar";
import { getUser } from "@/services/auth";
import { getCartProducts } from "@/services/cart";
import C1 from "../../../assets/blog/c1.jpg";

const Contact = async () => {
  const user = await getUser();
  const userId = user?.id;
  const coupon = "";
  const products = await getCartProducts(userId, coupon);
  return (
    <>
      <NavBar userCartProducts={products?.data} />
      <BannerImage image={C1} />
      <div className="py-12 px-4 bg-gradient-to-b bg-[#f4f7fa]">
        <div className="container mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12 md:mt-14 mt-28 lg:mt-0">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#262626] mb-3">
              আমাদের সাথে <span className="text-[#52687f]">যোগাযোগ করুন</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              আমরা আপনার কাছ থেকে শুনতে আগ্রহী। আমাদের একটি বার্তা পাঠান, আমরা
              যত দ্রুত সম্ভব উত্তর দেব।
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#52687f] to-transparent mx-auto mt-4"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Form Section */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <ContactFrom />
              </div>
            </div>

            {/* Information Section */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Header */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#262626] mb-2">
                  আমাদের তথ্য
                </h3>
                <p className="text-gray-600">
                  নিচের ঠিকানায় আমাদের খুঁজে পাবেন
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                {/* Address Card */}
                <div className="group bg-gradient-to-br from-[#52687f]/5 to-white border border-[#52687f]/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#52687f]/40">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#52687f] text-white rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[#52687f] text-lg mb-1">
                        ঠিকানা
                      </div>
                      <div className="text-gray-700">ঢাকা, বাংলাদেশ</div>
                    </div>
                  </div>
                </div>

                {/* Uncomment when ready */}
                {/* 
                <div className="group bg-gradient-to-br from-[#52687f]/5 to-white border border-[#52687f]/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#52687f]/40">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#52687f] text-white rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[#52687f] text-lg mb-1">হটলাইন</div>
                      <a href="tel:+8801735775093" className="text-gray-700 hover:text-[#52687f] transition-colors">
                        +880 1735 775093
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-[#52687f]/5 to-white border border-[#52687f]/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#52687f]/40">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#52687f] text-white rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[#52687f] text-lg mb-1">ইমেইল</div>
                      <a href="mailto:info@CBCL.com" className="text-gray-700 hover:text-[#52687f] transition-colors">
                        info@CBCL.com
                      </a>
                    </div>
                  </div>
                </div>
                */}
              </div>

              {/* Additional Info Box */}
              <div className="bg-gradient-to-br from-[#52687f] to-[#3d5168] text-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-bold mb-3">ব্যবসার সময়সূচি</h4>
                <div className="space-y-2 text-gray-100">
                  <div className="flex justify-between">
                    <span>শনিবার - বৃহস্পতিবার</span>
                    <span className="font-semibold">সকাল ৯:০০ - রাত ৯:০০</span>
                  </div>
                  <div className="flex justify-between">
                    <span>শুক্রবার</span>
                    <span className="font-semibold">বন্ধ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
