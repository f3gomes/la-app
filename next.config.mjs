/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.zst.com.br",
      },
    ],
  },
};

export default nextConfig;
