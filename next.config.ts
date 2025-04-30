/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in production
  productionBrowserSourceMaps: false,

  // Optional: Rewrite .map requests to 404 to suppress errors
  async rewrites() {
    return [
      {
        source: '/_next/static/chunks/:path*.map',
        destination: '/404', // you can also use destination: '/' to ignore silently
      },
    ];
  },

  // React strict mode (recommended)
  reactStrictMode: true,

  // Experimental features (optional, adjust if you're using App Router features)
  experimental: {
    serverActions: true, // only if you're using server actions
  },
};

module.exports = nextConfig;
