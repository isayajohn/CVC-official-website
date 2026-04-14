import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from '@/lib/admin-auth';

export async function GET(request: NextRequest) {
  const session = verifyAdminSessionToken(request.cookies.get(ADMIN_COOKIE_NAME)?.value || null);

  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true, username: session.sub });
}
