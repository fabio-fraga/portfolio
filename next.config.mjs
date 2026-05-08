/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
