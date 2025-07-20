/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  reactStrictMode: true,
  trailingSlash: true, // required for Netlify routing
};

module.exports = nextConfig;
