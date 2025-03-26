"use server"

import Header from "../Header";
import Footer from "../Footer";
import ClientLayout from "./ClientLayout";

import getConfig from "next/config";

// Fetch server-side data (like version) here
const { publicRuntimeConfig } = getConfig();
const version = publicRuntimeConfig?.version;

// const Footer = dynamic(() => import("../Footer"), { ssr: true });

export default async function GeneralLayout({
  children,
  style,
  className
}: Readonly<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string
}>) {
  return (
    <ClientLayout>
      <div style={style} className={className}>
        <Header />
        <div className="container mx-auto min-h-full flex flex-col justify-between" style={style}>
          {children}
          <Footer version={version}/>
        </div>
      </div>
    </ClientLayout>
  );
}
