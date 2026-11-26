import path from "path";
import { fileURLToPath } from "url";
import mdx from "@next/mdx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Security: Configure allowed development origins
  allowedDevOrigins: [
    '192.168.56.1',
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
  ],
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default withMDX(nextConfig);
