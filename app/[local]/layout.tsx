import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import LayoutClient from '@/components/layout/LayoutClient';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ local: string }>;
}) {
  const { local } = await params;
  const messages = await getMessages({ locale: local });

  return (
    <html lang={local}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={local} messages={messages}>
          <LayoutClient>{children}</LayoutClient>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

