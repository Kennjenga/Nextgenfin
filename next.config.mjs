/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      tls: false,
      fs: false,
      perf_hooks: false,
    };
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
