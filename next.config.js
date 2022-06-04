/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com'],
    layoutRaw: true
  },
}

module.exports = nextConfig
