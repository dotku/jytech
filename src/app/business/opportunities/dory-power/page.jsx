import { readFile } from "node:fs/promises";
import path from "path";
// import { useState, useEffect } from "react";
// import { MDXRemote } from "next-mdx-remote/rsc";
import MarkdownComponents from "@/components/MarkdownComponents";
// import { Spinner } from "@nextui-org/react";
// import ReactMarkdown from "react-markdown";
import { MDXProvider, useMDXComponents } from "@mdx-js/react";
// import Products from "./Product.mdx";
import remarkGfm from "remark-gfm";
import { compile, evaluate } from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import * as runtime from "react/jsx-runtime";
import "./MarkdownStyles.css";

// const components = {
//   ...MarkdownComponents,
//   wrapper: ({ children }) => (
//     <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
//   ),
// };

export default async function DoryPowerPage() {
  const mdxFilePath = path.join(
    process.cwd(),
    "src/app/business/opportunities/dory-power",
    "Product.mdx"
  );
  const source = await readFile(mdxFilePath, "utf8");
  const { default: Content } = await evaluate(source, {
    ...runtime,
    remarkPlugins: [remarkGfm],
  });
  // const [MDXContent, setMDXContent] = useState("");
  // const MarkdownComponents = useMDXComponents(components);

  // useEffect(() => {
  //   fetch("/assets/content/Product.mdx")
  //     .then((response) => response.text())
  //     .then((text) => setMDXContent(text));
  // }, []);

  return (
    <div className="mdx-content">
      <Content />
    </div>
  );
  // <MDXProvider components={MarkdownComponents}>
  //   {/* <ReactMarkdown remarkPlugins={[remarkGfm]}> */}
  //   <Products />
  //   {/* </ReactMarkdown> */}
  // </MDXProvider>
}
