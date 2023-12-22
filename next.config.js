/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.krishnatemple.com',
            },
        ],
    },
}

module.exports = nextConfig
