import type { Metadata } from 'next';
import './globals.css';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: SITE_NAME,
  description: `Welcome to ${SITE_NAME} - spreading the gospel through music`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
