import { Group } from "@/types/shared";
import {
  Tag,
  LayoutGrid,
  ShoppingCart,
  Shapes,
  Package2,
  Images,
} from "lucide-react";

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Blog",
      menus: [
        {
          href: "/blog-category",
          label: "Blog Category",
          active: pathname.includes("/blog-category"),
          icon: Shapes,
          submenus: [
            {
              href: "/blog-category/category",
              label: "Blog Category",
              active: pathname === "/blog-category/category",
            },
            {
              href: "/blog-category/subcategory",
              label: "Blog Subcategory",
              active: pathname === "/blog-category/subcategory",
            },
          ],
        },
        {
          href: "/blogs",
          label: "Blogs",
          active: pathname.includes("/blogs"),
          icon: Images,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Product",
      menus: [
        {
          href: "/order-list",
          label: "Orders",
          active: pathname.includes("/order-list"),
          icon: ShoppingCart,
          submenus: [],
        },
        {
          href: "/brand",
          label: "Brand",
          active: pathname.includes("/brand"),
          icon: Tag,
          submenus: [],
        },
        {
          href: "/category",
          label: "Product Category",
          active: pathname.includes("/category"),
          icon: Shapes,
          submenus: [
            {
              href: "/category/category",
              label: "Category",
              active: pathname === "/category/category",
            },
            {
              href: "/category/subcategory",
              label: "Subcategory",
              active: pathname === "/category/subcategory",
            },
            {
              href: "/category/childcategory",
              label: "Childcategory",
              active: pathname === "/category/childcategory",
            },
          ],
        },
        {
          href: "/products",
          label: "Products",
          active: pathname.includes("/products"),
          icon: Package2,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Pages",
      menus: [
        {
          href: "/banners",
          label: "Banners",
          active: pathname.includes("/banners"),
          icon: Images,
          submenus: [],
        },
        {
          href: "/contact",
          label: "Contacts",
          active: pathname.includes("/contact"),
          icon: Images,
          submenus: [],
        },
      ],
    },
  ];
}



  // {
  //     groupLabel: "Management",
  //     menus: [
  //       {
  //         href: "/order-list",
  //         label: "Orders",
  //         active: pathname.includes("/order-list"),
  //         icon: ShoppingCart,
  //         submenus: [],
  //       },
  //       {
  //         href: "/brand",
  //         label: "Brand",
  //         active: pathname.includes("/brand"),
  //         icon: Tag,
  //         submenus: [],
  //       },
  //       {
  //         href: "/blog-category",
  //         label: "Blog Category",
  //         active: pathname.includes("/blog-category"),
  //         icon: Shapes,
  //         submenus: [
  //           {
  //             href: "/blog-category/category",
  //             label: "Blog Category",
  //             active: pathname === "/blog-category/category",
  //           },
  //           {
  //             href: "/blog-category/subcategory",
  //             label: "Blog Subcategory",
  //             active: pathname === "/blog-category/subcategory",
  //           },
  //         ],
  //       },
  //       {
  //         href: "/blogs",
  //         label: "Blogs",
  //         active: pathname.includes("/blogs"),
  //         icon: Images,
  //         submenus: [],
  //       },
  //       {
  //         href: "/category",
  //         label: "Product Category",
  //         active: pathname.includes("/category"),
  //         icon: Shapes,
  //         submenus: [
  //           {
  //             href: "/category/category",
  //             label: "Category",
  //             active: pathname === "/category/category",
  //           },
  //           {
  //             href: "/category/subcategory",
  //             label: "Subcategory",
  //             active: pathname === "/category/subcategory",
  //           },
  //           {
  //             href: "/category/childcategory",
  //             label: "Childcategory",
  //             active: pathname === "/category/childcategory",
  //           },
  //         ],
  //       },
  //       {
  //         href: "/products",
  //         label: "Products",
  //         active: pathname.includes("/products"),
  //         icon: Package2,
  //         submenus: [],
  //       },
  //       // {
  //       //   href: "/coupon",
  //       //   label: "Coupon",
  //       //   active: pathname.includes("/coupon"),
  //       //   icon: TicketPercent,
  //       //   submenus: [],
  //       // },
  //       // {
  //       //   href: "/campaign",
  //       //   label: "Campaign",
  //       //   active: pathname.includes("/campaign"),
  //       //   icon: FlameKindling,
  //       //   submenus: [],
  //       // },
  //     ],
  //   },