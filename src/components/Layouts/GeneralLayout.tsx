import dynamic from "next/dynamic";
import Header from "../Header";
import Footer from "../Footer";

import getConfig from "next/config";

// Fetch server-side data (like version) here
const { publicRuntimeConfig } = getConfig();
const version = publicRuntimeConfig?.version;

// const Footer = dynamic(() => import("../Footer"), { ssr: true });

export default function GeneralLayout({
  children,
  style
}: Readonly<{
  children: React.ReactNode;
  style?: React.CSSProperties
}>) {
  return (
    <div style={style}>
      <Header />
      <div className="container mx-auto min-h-full flex flex-col justify-between" style={style}>
        {children}
        <Footer version={version}/>
      </div>
    </div>
  );
}
