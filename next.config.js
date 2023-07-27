/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.com','www.topgear.com'], // 将图像域名添加到domains数组中
  },
}

module.exports = nextConfig
