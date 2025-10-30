"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/store/use-store";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/admin-panel/menu";
import { useSidebarToggle } from "@/hooks/store/use-sidebar-toggle";
import { SidebarToggle } from "@/components/admin-panel/sidebar-toggle";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/CBCL.png";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[90px]" : "w-64"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      
      {/* Logo section - separate from scrollable area */}
      <div className="relative px-3 pt-10">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1 w-full",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2"
          >
            <div
              className={cn(
                "font-bold uppercase text-lg whitespace-nowrap transition-all ease-in-out duration-300 overflow-hidden",
                sidebar?.isOpen === false
                  ? "w-[50px] h-[50px]"
                  : "w-[70px] h-[70px]"
              )}
            >
              <Image
                src={logo}
                alt={String(brandName)}
                height={100}
                width={100}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </Button>
      </div>

      {/* Menu section - scrollable */}
      <div className="relative h-[calc(100%-120px)] flex flex-col px-3 pb-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}