"use client";

import BusinessCards from "@/components/Cards/BusinessCards/BusinessCards";
import GeneralLayout from "@/components/Layouts/GeneralLayout";

export default function Home() {
  return (
    <GeneralLayout>
      <main className="flex-1">
        <div
          className="relative h-[400px] mb-8 rounded-xl overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/8021723846849_.pic.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Phone number */}
            <div className="p-4 text-right">
              <a
                href="tel:4158511937"
                className="inline-block px-4 py-2 text-white hover:text-white/80 transition-colors"
              >
                (415) 851-1937
              </a>
            </div>

            {/* Main content */}
            <div className="flex-1 flex items-center">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    JY Tech
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Our mission is to revolutionize the intersection of
                    technology and commerce, delivering seamless digital
                    experiences that drive growth, enhance consumer engagement,
                    and streamline financial transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mb-12">
          <BusinessCards />
        </div>
      </main>
    </GeneralLayout>
  );
}
