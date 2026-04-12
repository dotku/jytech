"use client";

import PricingServicePlanCards from "@/components/Cards/PricingServicePlanCards";
import PricingDemoProjectCards from "@/components/Cards/PricingDemoProjectCards";
import { Suspense } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function PricingPage() {
  const locale = useLocale();
  const t = useTranslations("pricing");
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t("subtitle")}
          </p>
          <div className="mt-8">
            <a
              href={`/${locale}/pricing/website-solutions`}
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {t("viewWebsiteSolutions")}
            </a>
          </div>
        </div>

        <Suspense fallback={<div>{t("loadingPlans")}</div>}>
          <PricingServicePlanCards />
        </Suspense>

        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            {t("pastProjects")}
          </h3>
          <Suspense fallback={<div>{t("loadingProjects")}</div>}>
            <PricingDemoProjectCards />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
