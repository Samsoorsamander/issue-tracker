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
};

module.exports = nextConfig;
