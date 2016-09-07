/**
 * Dev Server Configuration
 */

module.exports = {
    appName: 'AwesomeSet',

    host: '0.0.0.0',
    port: 3000,

    // configure the proxy to the dev api server
    proxyIsEnabled: true,
    proxyHost: 'localhost',
    proxyPort: 30001,

    // forward following urls to the api server
    proxyUrls: [
        '/dataset*',
    ],

    // forward following rules
    proxyRules: {
        '/dataset': 'localhost:8080',
    },
};
