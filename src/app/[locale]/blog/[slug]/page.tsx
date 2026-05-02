import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GeneralLayout from "@/components/Layouts/GeneralLayout";
import { getPost, posts } from "@/data/posts";
import { locales, type Locale } from "@/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found | JY Tech" };
  const loc = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : ("en" as Locale);
  const localized = post.i18n[loc] ?? post.i18n.en;
  return {
    title: `${localized.title} | JY Tech`,
    description: localized.description,
    openGraph: {
      title: localized.title,
      description: localized.description,
      images: [post.cover],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });
  const loc = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : ("en" as Locale);
  const localized = post.i18n[loc] ?? post.i18n.en;

  return (
    <GeneralLayout>
      <article className="max-w-3xl mx-auto">
        <Link
          href={`/${locale}/blog`}
          className="text-sm text-blue-700 hover:underline"
        >
          ← {t("backToBlog")}
        </Link>

        <header className="mt-4 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {localized.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            {localized.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time>{post.date}</time>
            {post.liveUrl && (
              <>
                <span>·</span>
                <a
                  href={post.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  {t("viewLive")} →
                </a>
              </>
            )}
          </div>
        </header>

        <div className="relative w-full aspect-[16/9] mb-10 rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={post.cover}
            alt={localized.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-8">
          {localized.body.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs?.map((p, j) => (
                <p
                  key={j}
                  className="text-base text-gray-700 leading-relaxed mb-4"
                >
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.links && (
                <ul className="space-y-2 mt-2">
                  {section.links.map((l, j) => (
                    <li key={j}>
                      <a
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center text-blue-700 hover:underline font-medium"
                      >
                        {l.label} {l.external ? "↗" : "→"}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {t("ctaTitle")}
            </h3>
            <p className="text-white/90 mb-5">{t("ctaDescription")}</p>
            <Link
              href={`/${locale}/contact-us`}
              className="inline-block bg-white text-blue-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t("ctaButton")}
            </Link>
          </div>
        </footer>
      </article>
    </GeneralLayout>
  );
}
