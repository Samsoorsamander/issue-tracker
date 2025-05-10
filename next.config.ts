// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly",
        pathname: "/**",
      },
    ],
  },
  optimizeFonts: false,
  experimental: {
    turbo: false, // ✅ this disables Turbopack completely
  },
};

module.exports = nextConfig;
