const nextConfig = {
    reactStrictMode: true,
    env: {
        CLIENT_ID_PSASKEEP: process.env.CLIENT_ID_PSASKEEP,
        CLIENT_SECRET_PASSKEEP: process.env.CLIENT_SECRET_PASSKEEP,
        REDIRECT_URL_PASSKEEP: process.env.REDIRECT_URL_PASSKEEP,
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
                ]
            }
        ]
    }
}

module.exports = nextConfig