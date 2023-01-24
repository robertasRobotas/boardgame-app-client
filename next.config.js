/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["gameroom.lt"],
  },
};

module.exports = nextConfig;
