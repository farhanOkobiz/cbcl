"use client";

import { ContactPosting } from "@/services/contact";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const result = await ContactPosting(data);
      if (result) {
        toast.success("আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!");
        reset();
      } else {
        toast.error("কিছু ভুল হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন।");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("একটি ত্রুটি ঘটেছে। দয়া করে পরে আবার চেষ্টা করুন।");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            নাম
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="আপনার নাম লিখুন"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            ইমেইল
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="আপনার ইমেইল লিখুন"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="phone"
          >
            মোবাইল নম্বর
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", { required: "মোবাইল নম্বর প্রয়োজন" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="আপনার মোবাইল নম্বর লিখুন"
          />
          {errors.phone && (
            <p className="text-[#52687f] text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="subject"
          >
            বিষয়
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="বিষয় লিখুন"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            বার্তা
          </label>
          <textarea
            id="message"
            rows={3}
            {...register("message")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="এখানে আপনার বার্তাটি লিখুন..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#52687f] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#3e546b] transition duration-300 w-full cursor-pointer"
        >
          {isSubmitting ? "পাঠানো হচ্ছে..." : "বার্তা পাঠান"}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
