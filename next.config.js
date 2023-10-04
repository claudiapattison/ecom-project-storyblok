/** @type {import('next').NextConfig} */
const svgSpriteLoader = require('svg-sprite-loader');

const nextConfig = {
  images: {
    domains: ['a.storyblok.com', "cdn.shopify.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("svg-sprite-loader"),
    });
    return config;
  },
}

module.exports = nextConfig
