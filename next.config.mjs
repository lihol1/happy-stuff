/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
    ]    
      },
     
 
};

export default nextConfig;
