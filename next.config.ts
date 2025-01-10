import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const nextConfig: NextConfig = {
  reactStrictMode: true,
}

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

export default withPWAConfig(nextConfig)