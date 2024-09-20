/** @type {import('next').NextConfig} */
// import packageJson from "./package.json" assert { type: "json" };
// import remarkGfm from "remark-gfm";
// import { createRequire } from "module";

// const require = createRequire(import.meta.url);
// const { version } = require("./package.json");
const createMDX = require("@next/mdx");

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [],
  },
});
// ({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [require("remark-gfm")],
//   },
// });

const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  publicRuntimeConfig: {
    // version,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // output: "export", don't use due to dynamic routes
  experimental: {
    mdxRs: true,
  },
};

// Merge MDX config with Next.js config
// export default withMDX(nextConfig)

module.exports = withMDX(nextConfig);
