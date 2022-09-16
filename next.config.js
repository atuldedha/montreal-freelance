/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US", "fr"],
    defaultLocale: "en-US",
    localeDetection: true,
  },
  images: {
    domains: ["freesvg.org"],
  },
};

module.exports = nextConfig;
