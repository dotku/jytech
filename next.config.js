/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'dotku.us',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.nvidia.com',
      },
      {
        protocol: 'https',
        hostname: 'ueeshop.ly200-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.szxinmai.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sienovo.com',
      },
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
};

module.exports = withNextIntl(withMDX(nextConfig));
