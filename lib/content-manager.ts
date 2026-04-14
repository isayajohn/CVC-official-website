import { promises as fs } from 'fs';
import path from 'path';
import type { ManagedContent } from '@/lib/content-types';

const contentPath = path.join(process.cwd(), 'data', 'managed-content.json');

export async function readManagedContent(): Promise<ManagedContent> {
  const raw = await fs.readFile(contentPath, 'utf-8');
  return JSON.parse(raw) as ManagedContent;
}

export async function writeManagedContent(content: ManagedContent): Promise<void> {
  await fs.writeFile(contentPath, JSON.stringify(content, null, 2), 'utf-8');
}
