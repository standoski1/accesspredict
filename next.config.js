/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: ["media.api-sports.io","media-3.api-sports.io","media-2.api-sports.io","media-1.api-sports.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
})

