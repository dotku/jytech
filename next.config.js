/** @type {import('next').NextConfig} */
const { version } = require('./package.json')

const nextConfig = {
  publicRuntimeConfig: {
    version,
  },
  output: "export",
};

module.exports = nextConfig;
