/** @type {import('next').NextConfig} */
/* eslint @typescript-eslint/no-var-requires: "off" */

const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve = {
      alias: {
        "@": path.resolve(__dirname, "src")
      },
      ...config.resolve
    };
    return config;
  },
  images: {
    domains: ["interview.platdev.net"]
  }
};

module.exports = nextConfig;
