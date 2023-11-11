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
    domains: ["media.api-sports.io","media-4.api-sports.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
})

