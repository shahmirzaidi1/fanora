import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '', // Optional: Defaults to '' (standard ports 80 for http, 443 for https)
        pathname: '/**', // Optional: Allows any path under this hostname.
                         // You could be more specific, e.g., '/:widthx:height/:bgColor?/:textColor?/**'
      },
      // You can add other remote patterns here if needed
      // {
      //   protocol: 'https',
      //   hostname: 'another-image-provider.com',
      // },
    ],
  },
};

export default nextConfig;