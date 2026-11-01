/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Prissidan är dold tills vidare – ta bort redirecten för att visa den igen
  async redirects() {
    return [{ source: "/priser", destination: "/", permanent: false }];
  },
};

module.exports = nextConfig;
