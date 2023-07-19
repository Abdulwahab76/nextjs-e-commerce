/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'www.homazing.pk'
        }]
    }
}

module.exports = nextConfig
