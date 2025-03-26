"use client";

import { Providers } from "../Providers";
import Chatbot from "../Chatbot";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      {children}
      <Chatbot />
    </Providers>
  );
}
