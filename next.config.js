/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
      port: "",
      pathname: "**",
    },
  ],
};

module.exports = nextConfig;
