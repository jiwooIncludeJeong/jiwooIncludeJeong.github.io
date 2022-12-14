/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  images:{
    path:['https://jiwooincludejeong.github.io']
  },
  assetPrefix: isProduction? 'https://jiwooincludejeong.github.io' : undefined,
  reactStrictMode: true,
  swcMinify: true,
  extends: [
    'plugin:@next/next/recommended',
  ],
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [{
        key: 'X-Frame-Options',
        value: 'DENY'
      }]
    }]
  }
}

module.exports = nextConfig
