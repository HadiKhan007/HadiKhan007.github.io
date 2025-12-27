/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export only for production builds
  ...(process.env.NODE_ENV === "production"
    ? {
        output: "export",
        basePath: "/",
        assetPrefix: "/",
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
