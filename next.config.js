/** @type {import('next').NextConfig} */

// Workaround for Node 25+ localStorage issue
if (typeof global.localStorage !== 'undefined' && typeof global.localStorage.getItem !== 'function') {
  delete global.localStorage;
}

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/clustereye-website' : '';

const nextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
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
