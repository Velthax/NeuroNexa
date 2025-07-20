/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // Enables static export
  trailingSlash: true,         // Ensures directories work like folders (Netlify-friendly)
  images: {
    unoptimized: true,         // Disables image optimization for static export compatibility
  },
  reactStrictMode: true,       // (Optional) Enables extra checks during development
};

module.exports = nextConfig;
