/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "media.rawg.io",
    //     // port: "",
    //     // pathname: "/media/games/**",
    //   },
    // ],
    domains: ["media.rawg.io"],
  },
};

module.exports = nextConfig;
