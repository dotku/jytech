import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title:
    "JYTech | Elevate your business with the power of media and technologies",
  description: "Unlock your business's full potential by leveraging the latest media trends and technological advancements. Enhance customer engagement with data-driven strategies, streamline operations with AI, and drive growth through personalized digital experiences. From innovative content creation to cutting-edge tools, harness the power of media and technology to outshine competitors, build brand authority, and achieve long-term success. Stay ahead of the curve and transform your business today.",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
