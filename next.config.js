const {NextFederationPlugin} = require('@module-federation/nextjs-mf')
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    webpack: (config, options) => {
        const {isServer} = options;
        config.experiments = {topLevelAwait: true, layers: true};
        config.plugins.push(
            new NextFederationPlugin({
                name: 'child',
                remotes: {
                    container: `container@https://microfrontend-container-two.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
                },
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                  './catalog': './components/Catalog.js'
                },
                extraOptions: {
                    exposePages: true
                }
            })
        );
        return config;
    }
}

module.exports = nextConfig
