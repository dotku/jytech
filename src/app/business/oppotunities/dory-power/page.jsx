"use client";

import { markdownToHtml } from "@/utils/markdownToHtml";
import ReactMarkdown from "react-markdown";
import Product from "./Product.mdx";
import { MDXProvider } from "@mdx-js/react";
import SampleTable from "./SampleTable.mdx";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import MarkdownComponents from "@/components/MarkdownComponents";

// export function MarkdownComponent({ content }) {
//   const [htmlContent, setHtmlContent] = useState("");

//   useEffect(() => {
//     markdownToHtml(content).then(setHtmlContent);
//   }, [content]);

//   console.log("htmlContent", htmlContent);

//   return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
// }

export default function DoryPowerPage() {
  const [mdxSource, setMdxSource] = useState(null);
  const [error, setError] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function loadMDX() {
      try {
        console.log("Loading MDX content...");
        const content = await fetch("/assets/content/Product.mdx").then((rsp) =>
          rsp.text()
        );
        console.log("MDX content:", content);
        setContent(content);
        const serialized = await serialize(content);
        console.log("Serialized content:", serialized);
        setMdxSource(serialized);
      } catch (err) {
        console.error("Error loading MDX:", err);
        setError(err.message);
      }
    }
    loadMDX();
  }, []);

  if (error) return <div>Error loading content: {error}</div>;
  if (!mdxSource) return <div>Loading...</div>;

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={MarkdownComponents}>
      {content}
    </ReactMarkdown>
  );
}
