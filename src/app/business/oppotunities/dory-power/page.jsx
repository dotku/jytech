"use client";

import ReactMarkdown from "react-markdown";
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
        const content = await fetch("/assets/content/Product.mdx").then((rsp) =>
          rsp.text()
        );
        setContent(content);
      } catch (err) {
        console.error("Error loading MDX:", err);
        setError(err.message);
      }
    }
    loadMDX();
  }, []);

  if (error)
    return (
      <div className="text-danger-300">Error loading content: {error}</div>
    );
  if (!mdxSource) return <div>Loading...</div>;

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={MarkdownComponents}>
      {content}
    </ReactMarkdown>
  );
}
