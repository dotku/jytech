import { NextResponse } from 'next/server';

const CHINA_REGIONS = ["CN", "HK", "TW", "MO"];

export function middleware(request) {
  const { pathname, searchParams } = new URL(request.url);

  // Only handle website-solutions page
  if (pathname !== '/pricing/website-solutions') {
    return NextResponse.next();
  }

  // If region is specified in query params, respect it
  const regionParam = searchParams.get('region');
  if (regionParam && ['cn', 'us'].includes(regionParam.toLowerCase())) {
    return NextResponse.next();
  }

  // For website-solutions without region, detect and add region
  const country = request.geo?.country || 'US';
  const detectedRegion = CHINA_REGIONS.includes(country) ? 'cn' : 'us';

  const url = new URL(request.url);
  url.searchParams.set('region', detectedRegion);
  
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/pricing/website-solutions'],
};
