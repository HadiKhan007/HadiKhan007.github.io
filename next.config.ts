import path from "node:path";
import { fileURLToPath } from "node:url";

function getProjectRoot() {
  try {
    return path.resolve(path.dirname(fileURLToPath(import.meta.url)));
  } catch {
    return path.resolve(process.cwd());
  }
}
const projectRoot = getProjectRoot();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ["react-icons/fa", "react-icons/si"],
  },
  turbopack: {
    root: projectRoot,
    rules: {
      "*.svg": { loaders: ["@svgr/webpack"], as: "*.js" },
    },
  },
};

export default nextConfig;
