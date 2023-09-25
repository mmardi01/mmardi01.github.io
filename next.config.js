/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      target: 'experimental-serverless-trace',
      output: {
        basePath: '/mmardi01.github.io'
      }

}

module.exports = nextConfig
