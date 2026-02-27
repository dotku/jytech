import GeneralLayout from "@/components/Layouts/GeneralLayout";
import {
  PricingDemoProjectCards,
  PricingServicePlanCards,
  ProductHighlightCards,
} from "@/components/Cards";
import { Suspense } from "react";

export default async function TechPage() {
  return (
    <GeneralLayout>
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative px-6 py-16 sm:px-12 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            AI-Powered Technology Solutions
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            From intelligent websites to industrial embedded systems — we deliver
            end-to-end solutions for the US and China markets.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["AI Computing", "Web Solutions", "Industrial & IoT", "Cross-Border"].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        <Suspense fallback={<div>Loading services...</div>}>
          <PricingServicePlanCards />
        </Suspense>
      </section>

      {/* Products Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            AI servers, industrial embedded boards, and edge computing hardware
          </p>
        </div>
        <ProductHighlightCards />
      </section>

      {/* Case Studies Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Case Studies
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Real projects we have delivered for our clients
          </p>
        </div>
        <Suspense fallback={<div>Loading case studies...</div>}>
          <PricingDemoProjectCards />
        </Suspense>
      </section>
    </GeneralLayout>
  );
}
