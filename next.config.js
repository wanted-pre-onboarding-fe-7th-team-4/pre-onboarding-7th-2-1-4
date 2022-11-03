/** @type {import('next').NextConfig} */
import { resolve } from "path";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve = {
      alias: {
        "@": resolve(__dirname, "src")
      },
      ...config.resolve
    };
    return config;
  },
  images: {
    domains: ["interview.platdev.net"]
  }
};

export default nextConfig;
