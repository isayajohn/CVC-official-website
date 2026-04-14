import { NextRequest, NextResponse } from 'next/server';
import { readManagedContent, writeManagedContent } from '@/lib/content-manager';
import type { ManagedContent } from '@/lib/content-types';
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from '@/lib/admin-auth';

export async function GET() {
  try {
    const content = await readManagedContent();
    return NextResponse.json(content);
  } catch {
    return NextResponse.json({ message: 'Failed to load content' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = verifyAdminSessionToken(request.cookies.get(ADMIN_COOKIE_NAME)?.value || null);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = (await request.json()) as ManagedContent;

    if (!body?.site || !body?.services?.en || !body?.services?.sw) {
      return NextResponse.json({ message: 'Invalid content payload' }, { status: 400 });
    }

    await writeManagedContent(body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: 'Failed to save content' }, { status: 500 });
  }
}
