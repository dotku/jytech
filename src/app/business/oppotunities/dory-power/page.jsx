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

const components = {
  h1: ({ node, ...props }) => (
    <h1 className="text-4xl font-bold mb-4" {...props} />
  ),
  h2: ({ node, ...props }) => <h2 className="text-3xl mb-3" {...props} />,
  h3: ({ node, ...props }) => (
    <h3 className="text-2xl font-semibold mb-2" {...props} />
  ),
  p: ({ node, ...props }) => <p className="mb-4" {...props} />,
  ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4" {...props} />,
  ol: ({ node, ...props }) => (
    <ol className="list-decimal pl-5 mb-4" {...props} />
  ),
  li: ({ node, ...props }) => <li className="mb-1" {...props} />,
  a: ({ node, ...props }) => (
    <a className="text-blue-600 hover:underline" {...props} />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4"
      {...props}
    />
  ),
  table: ({ node, ...props }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  thead: ({ node, ...props }) => <thead className="bg-gray-50" {...props} />,
  tbody: ({ node, ...props }) => (
    <tbody className="bg-white divide-y divide-gray-200" {...props} />
  ),
  tr: ({ node, ...props }) => <tr {...props} />,
  th: ({ node, ...props }) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  td: ({ node, ...props }) => (
    <td className="px-6 py-4 whitespace-nowrap" {...props} />
  ),
  code: ({ node, inline, ...props }) =>
    inline ? (
      <code className="bg-gray-100 rounded px-1 py-0.5" {...props} />
    ) : (
      <pre className="bg-gray-100 rounded p-4 overflow-x-auto">
        <code {...props} />
      </pre>
    ),
};

export function MarkdownComponent({ content }) {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    markdownToHtml(content).then(setHtmlContent);
  }, [content]);

  console.log("htmlContent", htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

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
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
