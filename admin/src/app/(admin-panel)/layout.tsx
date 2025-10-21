import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin | CBCL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextTopLoader showSpinner={false} color="#52687f" />
          <AdminPanelLayout>{children}</AdminPanelLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
