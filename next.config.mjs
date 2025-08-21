/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/**'
            },
        ]
    }
};

console.log("✅ next.config.mjs is being loaded");

export default nextConfig;