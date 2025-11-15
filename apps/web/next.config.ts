import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "./",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["images.pexels.com", "www.pexels.com"],
  },
};

export default nextConfig;
