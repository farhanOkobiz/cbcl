import { NextFont } from "next/dist/compiled/@next/font";
import { Metadata } from "next";
import { ReactNode } from "react";
import { JSX } from "react";

export interface LayoutTypes {
  banglaFont: NextFont;
  metadata: Metadata;
  default: (props: { children: ReactNode }) => JSX.Element;
  RootLayoutProps: {
    children: ReactNode;
  };
}

// Allow banglaFont to be exported from layout
export type LayoutExports = {
  banglaFont: NextFont;
  metadata: Metadata;
  default: (props: { children: ReactNode }) => JSX.Element;
};
