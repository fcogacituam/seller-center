import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { cookies } from 'next/headers';
import { decrypt } from './lib/session';

// Rutas protegidas y públicas
const protectedRoutes = [
  '/home',
  '/stock',
  '/afterSales',
  '/products',
  '/sales',
  '/finance',
  '/metrics',
  '/campaigns',
  '/help',
  '/settings',
];
const publicRoutes = ['/login', '/'];

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const response = intlMiddleware(req) || NextResponse.next();

  const { pathname } = req.nextUrl;
  const locale = pathname.startsWith('/es') ? 'es' : pathname.startsWith('/en') ? 'en' : 'es';

  const protectedRoutesLocalized = protectedRoutes.map((route) => `/${locale}${route}`);
  const publicRoutesLocalized = publicRoutes.map((route) => `/${locale}${route}`);

  const isProtectedRoute = protectedRoutesLocalized.includes(req.nextUrl.pathname);
  const isPublicRoute = publicRoutesLocalized.includes(req.nextUrl.pathname);

  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL(`/${locale}/login`, req.nextUrl));
  }

  if (isPublicRoute && session && !pathname.startsWith(`/${locale}/home`)) {
    return NextResponse.redirect(new URL(`/${locale}/home`, req.nextUrl));
  }

  return response;
}

export const config = {
  matcher: ['/', '/(es|en)/:path*', '/login'],
};
