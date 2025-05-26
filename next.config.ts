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
      {
        protocol: 'https',
        hostname: 'thispersondoesnotexist.com',
        port: '', // Optional: Defaults to '' (standard ports 80 for http, 443 for https)
        pathname: '/**', // Optional: Allows any path under this hostname.
                         // You could be more specific, e.g., '/:widthx:height/:bgColor?/:textColor?/**'
      },
      {
        protocol: 'https',
        hostname: 'ozgrozer.github.io',
        port: '', // Optional: Defaults to '' (standard ports 80 for http, 443 for https)
        pathname: '/**', // Optional: Allows any path under this hostname.
                         // You could be more specific, e.g., '/:widthx:height/:bgColor?/:textColor?/**'
      },
    ],
  },
};

export default nextConfig;