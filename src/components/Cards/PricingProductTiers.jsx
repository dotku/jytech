"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function PricingProductTiers() {
  const locale = useLocale();
  const t = useTranslations("pricing.tiers");

  const tiers = [
    {
      key: "free",
      featured: false,
      ctaInternal: false,
      ctaHref: "https://autoclaw.jytech.us",
      ctaSecondary: { href: "https://xpilot.jytech.us", external: true },
    },
    {
      key: "starter",
      featured: false,
      ctaInternal: true,
      ctaHref: `/${locale}/support`,
    },
    {
      key: "pro",
      featured: true,
      ctaInternal: true,
      ctaHref: `/${locale}/support`,
    },
    {
      key: "consulting",
      featured: false,
      ctaInternal: false,
      ctaHref: "https://calendly.com/jytech",
    },
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
          {t("sectionTitle")}
        </h3>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          {t("sectionSubtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map((tier) => {
          const features = t.raw(`${tier.key}.features`);
          return (
            <div
              key={tier.key}
              className={`flex flex-col rounded-2xl border bg-white p-6 ${
                tier.featured
                  ? "border-blue-600 shadow-lg ring-1 ring-blue-600/10"
                  : "border-gray-200"
              }`}
            >
              {tier.featured && (
                <span className="self-start mb-3 text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                  {t("popular")}
                </span>
              )}
              <h4 className="text-lg font-bold text-gray-900">
                {t(`${tier.key}.name`)}
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                {t(`${tier.key}.tagline`)}
              </p>
              <p className="mt-4 text-3xl font-bold text-gray-900">
                {t(`${tier.key}.price`)}
                <span className="text-base font-normal text-gray-500 ml-1">
                  {t(`${tier.key}.priceUnit`)}
                </span>
              </p>

              <ul className="mt-5 space-y-2 flex-1">
                {Array.isArray(features) &&
                  features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
              </ul>

              <div className="mt-6 space-y-2">
                {tier.ctaInternal ? (
                  <Link
                    href={tier.ctaHref}
                    className={`block text-center w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                      tier.featured
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {t(`${tier.key}.cta`)}
                  </Link>
                ) : (
                  <a
                    href={tier.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                      tier.featured
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {t(`${tier.key}.cta`)} ↗
                  </a>
                )}
                {tier.ctaSecondary && (
                  <a
                    href={tier.ctaSecondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {t(`${tier.key}.ctaSecondary`)} ↗
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-center text-gray-500">
        {t("enterpriseNote")}{" "}
        <Link
          href={`/${locale}/contact-us`}
          className="text-blue-700 font-medium hover:underline"
        >
          {t("enterpriseCta")} →
        </Link>
      </p>
    </section>
  );
}
