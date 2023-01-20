/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    poweredByHeader: false,
    async redirects() {
        return [
            {
                source: '/cookie-policy',
                destination: '/cookie-policy.html',
                permanent: false
            },
            {
                source: '/privacy-policy',
                destination: '/privacy-policy.html',
                permanent: false
            }
        ];
    }
};

module.exports = config;
