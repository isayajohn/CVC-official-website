import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales } from './i18n';
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from '@/lib/admin-auth';

export const runtime = 'nodejs';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always',
});

export default function middleware(request: NextRequest) {
  // Skip API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;
  const [, maybeLocale] = pathname.split('/');
  const locale = locales.includes(maybeLocale as (typeof locales)[number])
    ? maybeLocale
    : 'en';

  const adminRoot = `/${locale}/admin`;
  const adminLoginPath = `/${locale}/admin-login`;
  const legacyAdminLoginPath = `${adminRoot}/login`;
  const protectedPath = pathname === adminRoot || pathname.startsWith(`${adminRoot}/`);
  const isLegacyLoginPath = pathname === legacyAdminLoginPath || pathname.startsWith(`${legacyAdminLoginPath}/`);
  const isAdminLoginPath = pathname === adminLoginPath || pathname.startsWith(`${adminLoginPath}/`);
  const session = verifyAdminSessionToken(request.cookies.get(ADMIN_COOKIE_NAME)?.value || null);

  if (isLegacyLoginPath) {
    return NextResponse.redirect(new URL(session ? adminRoot : adminLoginPath, request.url));
  }

  if (protectedPath && !session) {
    return NextResponse.redirect(new URL(adminLoginPath, request.url));
  }

  if (isAdminLoginPath && session) {
    return NextResponse.redirect(new URL(adminRoot, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en|sw)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
