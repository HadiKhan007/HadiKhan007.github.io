/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Always export statically
  basePath: "/HadiKhan007.github.io",
  assetPrefix: "/HadiKhan007.github.io/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
