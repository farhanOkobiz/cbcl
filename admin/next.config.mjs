/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8001",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cbcl-production.up.railway.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
