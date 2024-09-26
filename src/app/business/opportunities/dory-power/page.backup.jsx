// import ReactMarkdown from "react-markdown";
// import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import remarkGfm from "remark-gfm";
// import MarkdownComponents from "@/components/MarkdownComponents";
// import Product from "./Product.mdx";
// import { MDXProvider } from "@mdx-js/react";
// import ClientMDXProvider from "@/components/ClientMDXProvider";
import { compileMDX } from "next-mdx-remote/rsc";
// import MarkdownComponents from "@/components/MarkdownComponents";

const Product = dynamic(() => import("./Product.mdx"), { ssr: false });
const MarkdownComponents = dynamic(
  () => import("@/components/MarkdownComponents"),
  { ssr: false }
);
const ClientMDXProvider = dynamic(
  () => import("@/components/ClientMDXProvider"),
  { ssr: false }
);

// export function MarkdownComponent({ content }) {
//   const [htmlContent, setHtmlContent] = useState("");

//   useEffect(() => {
//     markdownToHtml(content).then(setHtmlContent);
//   }, [content]);

//   console.log("htmlContent", htmlContent);

//   return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
// }

export const metadata = {
  title: "Dory Power Page",
  description: "Information about Dory Power",
};

export default async function DoryPowerPage() {
  // const [error, setError] = useState(null);
  // const [content, setContent] = useState(null);

  // useEffect(() => {
  //   async function loadMDX() {
  //     try {
  //       const content = await fetch("/assets/content/Product.mdx").then((rsp) =>
  //         rsp.text()
  //       );
  //       setContent(content);
  //     } catch (err) {
  //       console.error("Error loading MDX:", err);
  //       setError(err.message);
  //     }
  //   }
  //   loadMDX();
  // }, []);

  // if (error)
  //   return (
  //     <div className="text-danger-300">Error loading content: {error}</div>
  //   );
  // if (!content) return <div>Loading...</div>;

  // const { content } = await compileMDX({
  //   source: <Product />,
  //   options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  //   components: MarkdownComponents,
  // });

  return (
    <ClientMDXProvider components={MarkdownComponents}>
      <Product />
    </ClientMDXProvider>
  );
}
