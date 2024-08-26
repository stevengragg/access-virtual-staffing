/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "strapi-cms-assets.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "relume-assets.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
