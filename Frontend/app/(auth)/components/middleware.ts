import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';


// Protect these paths
const PROTECTED = ['/problems/new', '/chat', '/chat/', '/profile', '/tutors'];


export async function middleware(req: NextRequest) {
const { pathname } = req.nextUrl;
const needsAuth = PROTECTED.some((p) => pathname === p || pathname.startsWith(p + '/'));
if (!needsAuth) return NextResponse.next();


const token = req.cookies.get('token')?.value;
if (!token) return NextResponse.redirect(new URL('/(auth)/sign-in', req.url));


// Optional: verify signature (if you share secret to frontend). For demo, just decode.
try {
const { payload } = jose.decodeJwt(token) as any;
if (!payload?.sub) throw new Error('invalid');
return NextResponse.next();
} catch {
return NextResponse.redirect(new URL('/(auth)/sign-in', req.url));
}
}


export const config = { matcher: ['/((?!_next|api|favicon.ico|assets).*)'] };
