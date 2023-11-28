/** @type {import('next').NextConfig} */
const nextConfig = {
    // asi puedo tener imagenes
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.shareicon.net'
            }
        ]
    }
}

module.exports = nextConfig
