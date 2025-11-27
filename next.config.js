/** @type {import('next').NextConfig} */

// Workaround for Node 25+ localStorage issue
if (typeof global.localStorage !== 'undefined' && typeof global.localStorage.getItem !== 'function') {
  delete global.localStorage;
}

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
