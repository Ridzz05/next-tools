import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
