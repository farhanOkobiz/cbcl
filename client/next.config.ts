import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost","cbcl-production.up.railway.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
