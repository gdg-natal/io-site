/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'api.gdg.natal.br',
            port: '',
            pathname: '/**',
        },
    ],
},
};

export default nextConfig;
