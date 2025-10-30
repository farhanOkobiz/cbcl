"use client";

import {
  Card,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import {

  ScrollText,
  ShoppingBag,

} from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardMetrics } from "@/types/shared";
interface SalesDashboardProps {
  counts: DashboardMetrics;
}

export default function AdminDashboard({ counts }: SalesDashboardProps) {


  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <Card
        className="w-full bg-gradient-to-tr from-[#dfe6ec] to-[#f2f5f8] text-[#52687f] p-8 text-center rounded-2xl shadow-sm border border-[#c9d3dc]"
      >
        <h1 className="text-3xl font-bold mb-4" style={{ color: "#52687f" }}>
          Community Business Company Ltd
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto text-[#5a6f86]">
          Welcome to <span className="font-semibold text-[#52687f]">Community Business Company Ltd</span> —
          a modern platform that combines <span className="underline">e-commerce</span> and
          <span className="underline"> blogging</span> to empower communities, entrepreneurs, and readers alike.
          Our mission is to connect people through business insights and quality products.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
        <Card className="p-6 flex flex-col items-center text-center bg-[#f6f8fa] border border-[#d4dee7] hover:shadow-md transition">
          <ShoppingBag size={32} className="mb-3" color="#52687f" />
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#52687f" }}>
            E-Commerce Platform
          </h2>
          <p className="text-[#5a6f86]">
            Discover, shop, and grow your business with our trusted marketplace
            built for both buyers and sellers.
          </p>
        </Card>

        <Card className="p-6 flex flex-col items-center text-center bg-[#f6f8fa] border border-[#d4dee7] hover:shadow-md transition">
          <ScrollText size={32} className="mb-3" color="#52687f" />
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#52687f" }}>
            Business Blog
          </h2>
          <p className="text-[#5a6f86]">
            Stay informed with the latest community stories, business trends,
            and insights from industry professionals.
          </p>
        </Card>
      </div>
    </div>
  );
}
