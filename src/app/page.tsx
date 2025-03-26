"use client";

import BusinessCards from "@/components/Cards/BusinessCards/BusinessCards";
import GeneralLayout from "@/components/Layouts/GeneralLayout";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  return (
    <GeneralLayout>
      <main className="flex-1">
        <div
          className="p-12 mb-5 text-white bg-black rounded-lg"
          style={{
            backgroundImage: "url('/assets/images/8021723846849_.pic.jpg')",
            backgroundSize: "cover",
          }}
        >
          <p className="text-end">
            <a href="tel:4158511937">(415) 851-1937</a>
          </p>
          <div className="container-fluid md:p-20">
            <h1 className="fw-bold text-5xl mb-3">JY Tech</h1>
            <p className="col-md-8 text-lg md:text-2xl">
              Our mission is to revolutionize the intersection of technology
              and commerce, delivering seamless digital experiences that drive
              growth, enhance consumer engagement, and streamline financial
              transactions.
            </p>
          </div>
        </div>
        <BusinessCards />
      </main>
    </GeneralLayout>
  );
}
