/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizePackageImports: ["@chakra-ui/react"],
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
