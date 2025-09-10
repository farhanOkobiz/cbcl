import { NextFont } from "next/dist/compiled/@next/font";
import { Metadata } from "next";
import { ReactNode } from "react";

declare module "*.ts" {
  export const banglaFont: NextFont;
  export const metadata: Metadata;
  export default function RootLayout(props: { children: ReactNode }): JSX.Element;
}
