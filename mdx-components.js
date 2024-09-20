import { MDXProvider } from "@mdx-js/react";
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown";

export const markdonwComponents = {
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

export function useMDXComponents(components) {
  return {
    ...markdonwComponents,
    // wrapper: ({ children }) => (
    //   <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    // ),
    ...components,
  };
}
