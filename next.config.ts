/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export only for production builds
  ...(process.env.NODE_ENV === "production"
    ? {
        output: "export",
        basePath: "/HadiKhan007.github.io",
        assetPrefix: "/HadiKhan007.github.io/",
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
