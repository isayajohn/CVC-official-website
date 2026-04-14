import { NextResponse } from 'next/server';
import {
  ADMIN_COOKIE_NAME,
  createAdminSessionToken,
  getAdminCredentials,
  getSessionCookieOptions,
} from '@/lib/admin-auth';

interface LoginBody {
  username?: string;
  password?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginBody;
    const { username: expectedUsername, password: expectedPassword } = getAdminCredentials();

    if (body.username !== expectedUsername || body.password !== expectedPassword) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    const token = createAdminSessionToken(body.username);
    response.cookies.set(ADMIN_COOKIE_NAME, token, getSessionCookieOptions());
    return response;
  } catch {
    return NextResponse.json({ message: 'Login failed' }, { status: 500 });
  }
}
