/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.waterstones.com",
        port: "",
        pathname: "/bookjackets/**",
      },
    ],
  },
};

module.exports = nextConfig;
