import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [new URL('https://sakhelectric.ru/**')]
  }
}

export default nextConfig
