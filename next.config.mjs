const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/sands-resort' : '',
  assetPrefix: isProd ? '/sands-resort/' : '',
  images: {
    unoptimized: true, // GitHub Pages non supporta l'Image Optimization di Next.js
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;


