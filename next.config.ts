import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // You can also make this more generic if needed, e.g., by omitting it or using a pattern
        hostname: '**', // This allows any hostname
        // port: '', // Optional: Still defaults to standard ports. Can be omitted.
        // pathname: '/**', // Optional: Still allows any path. Can be omitted if '**' for hostname is used.
      },
      {
        protocol: 'http', // It's good practice to also allow http if you truly want to allow *any* host,
                          // as not all image sources will be https.
        hostname: '**',
      }
    ],
  },
};

export default nextConfig;