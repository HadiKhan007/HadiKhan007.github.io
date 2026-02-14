/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages deployment at hadikhan007.github.io
  output: "export",
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  turbopack: {
    // Turbopack optimizations for maximum performance
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
