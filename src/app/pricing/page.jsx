"use client";

import PricingServicePlanCards from "@/components/Cards/PricingServicePlanCards";
import PricingDemoProjectCards from "@/components/Cards/PricingDemoProjectCards";
import { Suspense } from "react";

export default function PricingPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pricing & Solutions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Explore our pricing options and past successful projects
          </p>
          <div className="mt-8">
            <a
              href="/pricing/website-solutions"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Website Solutions
            </a>
          </div>
        </div>

        <Suspense fallback={<div>Loading pricing plans...</div>}>
          <PricingServicePlanCards />
        </Suspense>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            Our Past Projects
          </h3>
          <Suspense fallback={<div>Loading demo projects...</div>}>
            <PricingDemoProjectCards />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
