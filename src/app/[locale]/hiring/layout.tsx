import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hiring" });

  return {
    title: `${t("title")} | JYTech`,
    description: t("subtitle"),
  };
}

export default function HiringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
