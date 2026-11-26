import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "pranafirstdraft.vercel.app" }],
        destination: "https://www.perceptionlab.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
