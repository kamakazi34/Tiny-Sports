import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-b6f613d422474f1ea6487305aad291ed.r2.dev',
        pathname: '/photos/**',
      },
    ],
  },
}

export default nextConfig
