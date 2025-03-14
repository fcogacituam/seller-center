import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import { setRequestLocale } from 'next-intl/server';
import { Locale, NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import Providers from './providers';
import { ThemeProvider } from '@/components/themeProvider';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};
const lexendSans = Lexend({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Seller Center Cencosud',
  description: 'Cencosud - Seller Center',
  icons: {
    icon: '/iso.svg',
  },
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);
  return (
    <html suppressHydrationWarning>
      <body className={`${lexendSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Providers>
              <main>{children}</main>
            </Providers>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
