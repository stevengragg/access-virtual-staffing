import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the path starts with /app
  if (pathname.startsWith("/app")) {
    const session = getSession(req, NextResponse.next());

    // If there is no session, redirect to /talent/portal
    if (!session) {
      const loginUrl = new URL("/talent/portal", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Continue to the requested page
  return NextResponse.next();
}

export const config = {
  matcher: "/app/:path*",
};
