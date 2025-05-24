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
  typescript: {
    ignoreBuildErrors: true, // Temporary during debugging
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  optimizeFonts: false,
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
