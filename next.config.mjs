/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,  // This will ensure URLs with and without trailing slashes work
    experimental: {
      appDir: true,  // Enable the App Router feature (Next.js 13+)
    },
  };
  
  export default nextConfig;
  