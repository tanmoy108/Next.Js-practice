/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.krishnatemple.com',
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node/,
            use: "raw-loader",
        });
        return config;
    },
}

module.exports = nextConfig
