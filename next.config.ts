import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
  webpack(config, { isServer }) {
    if (isServer) {
      config.output.chunkFilename = "chunks/[name].js";
    }
    return config;
  },
};

export default nextConfig;
