/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.rapidinsights.ai",
      },
    ],
  },
};

module.exports = nextConfig;
