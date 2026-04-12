import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

const localeSet = new Set<string>(locales as unknown as string[]);

const CHINA_REGIONS = ["CN", "HK", "TW", "MO"];

function getPathnameLocale(pathname: string): string | null {
  const segments = pathname.split("/");
  const potentialLocale = segments[1];
  return localeSet.has(potentialLocale) ? potentialLocale : null;
}

export default function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Skip static files, API, and Next.js internals
  if (/\.\w+$/.test(pathname)) return NextResponse.next();
  if (pathname.startsWith("/api") || pathname.startsWith("/_next") || pathname.startsWith("/_vercel")) {
    return NextResponse.next();
  }

  // If no valid locale prefix, redirect to /{defaultLocale}{path}
  if (!getPathnameLocale(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Geo-detect region for website-solutions page
  if (pathname.endsWith("/pricing/website-solutions") && !searchParams.get("region")) {
    const country = (request as any).geo?.country || "US";
    const detectedRegion = CHINA_REGIONS.includes(country) ? "cn" : "us";
    const url = request.nextUrl.clone();
    url.searchParams.set("region", detectedRegion);
    return NextResponse.redirect(url);
  }

  // Standard next-intl locale handling
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
