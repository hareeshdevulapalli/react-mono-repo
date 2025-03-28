const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@libs/ui-kit'] = path.resolve(__dirname, '../../libs/ui-kit/src');
    config.resolve.alias['@libs/core'] = path.resolve(__dirname, '../../libs/core/src');
    return config;
  },
  devIndicators: {
    appIsrStatus: false,
  },
  output:'export',
  trailingSlash:true
};

module.exports = nextConfig;
