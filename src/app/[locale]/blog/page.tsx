import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import GeneralLayout from "@/components/Layouts/GeneralLayout";
import { posts } from "@/data/posts";
import { locales, type Locale } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: `${t("indexTitle")} | JY Tech`,
    description: t("indexDescription"),
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const loc = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : ("en" as Locale);

  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <GeneralLayout>
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            {t("indexTitle")}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            {t("indexDescription")}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sorted.map((post) => {
            const localized = post.i18n[loc] ?? post.i18n.en;
            return (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-48 bg-gray-100">
                  <Image
                    src={post.cover}
                    alt={localized.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {localized.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {localized.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <time className="text-gray-500">{post.date}</time>
                    <span className="text-blue-700 font-medium">
                      {t("readMore")} →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </GeneralLayout>
  );
}
