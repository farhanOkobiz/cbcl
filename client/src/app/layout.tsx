import "./globals.css";
import { banglaFont } from "@/fonts/bangla";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CBCL",
  description: "Best E-commerce platform in BD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${banglaFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
