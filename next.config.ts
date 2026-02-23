import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "",
};

export default nextConfig;
