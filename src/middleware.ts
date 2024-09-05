import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const authenticated = token ? true : false;

  if (!authenticated && request.nextUrl.pathname.startsWith('/conta')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (authenticated && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/conta', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/conta/:path*', '/login/:path*'],
};
