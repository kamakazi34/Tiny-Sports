import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/tiny-sports-assets-au/photos/**',
      },
    ],
  },
}

export default nextConfig
