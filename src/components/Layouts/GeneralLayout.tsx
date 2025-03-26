"use client";

import Header from "../Header";
import Footer from "../Footer/Footer";
import packageInfo from '../../../package.json';

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export default function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <Footer version={packageInfo.version} />
    </div>
  );
}
