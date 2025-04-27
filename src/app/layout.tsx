import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JYTech | Elevate your business with the power of media and technologies",
  description: "Unlock your business's full potential by leveraging the latest media trends and technological advancements. Enhance customer engagement with data-driven strategies, streamline operations with AI, and drive growth through personalized digital experiences.",
  other: {
    'facebook-domain-verification': '10t2aihqlnp5he55z18p1osrwdo98a',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.svg" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
