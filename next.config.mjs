/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode
  output: "standalone", // Optional: For server-side deployment
  basePath: "", // Ensure it's empty if you're not using sub-paths
  trailingSlash: true, // Adds trailing slashes to routes to help with routing issues
  // You can also enable internationalization (i18n) or other settings if needed
};

export default nextConfig;
