/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    headers: [
        {
            source: '/(.*)',
            headers: [
                {
                    key: 'X-DNS-Prefetch-Control',
                    value: 'on'
                },
                {
                    key: 'Content-Security-Policy',
                    value: 'upgrade-insecure-requests; default-src \'self\''
                },
                {
                    key: 'Strict-Transport-Security',
                    value: 'max-age=31536000; includeSubDomains; preload'
                },
                {
                    key: 'X-Xss-Protection',
                    value: '1; mode=block'
                },
                {
                    key: 'X-Frame-Options',
                    value: 'DENY'
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff'
                },
                {
                    key: 'Referrer-Policy',
                    value: 'no-referrer'
                },
                {
                    key: 'Permissions-Policy',
                    value: 'accelerometer=(),autoplay=(),camera=(),display-capture=(),document-domain=(),encrypted-media=(),fullscreen=(),geolocation=(),gyroscope=(),magnetometer=(),microphone=(),midi=(),payment=(),picture-in-picture=(),publickey-credentials-get=(),screen-wake-lock=(),sync-xhr=(self),usb=(),web-share=(),xr-spatial-tracking=()'
                },
                {
                    key: 'X-Permitted-Cross-Domain-Policies',
                    value: 'none'
                },
                {
                    key: 'Server',
                    value: ''
                },
                {
                    key: 'Cross-Origin-Embedder-Policy',
                    value: 'require-corp'
                },
                {
                    key: 'Cross-Origin-Opener-Policy',
                    value: 'same-origin'
                },
                {
                    key: 'Cross-Origin-Resource-Policy',
                    value: 'same-origin'
                }
            ]
        }
    ],
    poweredByHeader: false
};
