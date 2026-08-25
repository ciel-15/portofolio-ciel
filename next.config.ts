import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    // Keep Turbopack from picking up the pnpm workspace above this repo.
    root: __dirname,
  },
};

export default nextConfig;
