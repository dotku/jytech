import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import GeneralLayout from "@/components/Layouts/GeneralLayout";
import { locales } from "@/i18n";
import SupportForm from "./SupportForm";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "support" });
  return {
    title: `${t("title")} | JY Tech`,
    description: t("subtitle"),
  };
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "support" });

  return (
    <GeneralLayout>
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t("title")}
          </h1>
          <p className="text-gray-600 leading-relaxed">{t("subtitle")}</p>
        </header>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <SupportForm locale={locale} />
        </div>

        <p className="text-sm text-gray-500 mt-6 text-center">
          {t("footer")}
        </p>
      </div>
    </GeneralLayout>
  );
}
