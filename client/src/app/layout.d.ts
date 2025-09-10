import { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";

declare module "./layout" {
  export const banglaFont: NextFont;
  export const metadata: Metadata;
  export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element;
}
