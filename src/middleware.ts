// _middleware.ts or _middleware.js
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isLoginPage = req.nextUrl.pathname === '/login';

    // If on login page and already authenticated, redirect to home
    if (isLoginPage && token) {
        return NextResponse.redirect(new URL('/home', req.url));
    }

    // If not on login page and not authenticated, redirect to login
    if (!isLoginPage && !token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // Otherwise proceed with the response
    return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
