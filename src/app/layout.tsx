import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "JYTech | Elevate your tech business with the power of AI technologies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="auto">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta
          name="author"
          content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
        />
        <meta name="generator" content="Hugo 0.112.5" />
        <base href="//getbootstrap.com/" target="_blank" />
        <link
          rel="canonical"
          href="//getbootstrap.com/docs/5.3/examples/jumbotron/"
        />
        <link
          rel="apple-touch-icon"
          href="//getbootstrap.com/docs/5.3/assets/img/favicons/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="//dotku.github.io/jytech/assets/images/logo.svg"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="//dotku.github.io/jytech/assets/images/logo.svg"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="manifest"
          href="//getbootstrap.com/docs/5.3/assets/img/favicons/manifest.json"
        />
        <link
          rel="mask-icon"
          href="//getbootstrap.com/docs/5.3/assets/img/favicons/safari-pinned-tab.svg"
          color="#712cf9"
        />
        <link
          rel="icon"
          href="//dotku.github.io/jytech/assets/images/logo.svg"
        />
        <script src="https://lmsqueezy.com/affiliate.js" defer></script>
        <meta name="theme-color" content="#712cf9" />
      </Head>
      <body>
        <div className="container mx-auto h-full flex flex-col h-screen justify-between">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
