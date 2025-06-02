/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfolio-v1',
  assetPrefix: '/portfolio-v1/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;