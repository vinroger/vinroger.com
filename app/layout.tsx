import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Vincentius Roger Kuswara',
  description:
    'Software engineer at TikTok (TikTok Search team), based in Singapore. Projects in AI products, search and open source. SUTD Class of 2025 valedictorian.',
  icons: {
    icon: '/favicon.ico', // /public/favicon-roger.ico
    shortcut: '/favicon.ico', // /public/favicon-roger.ico
    apple: '/apple-touch-icon.png', // /public/apple-touch-icon.png
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
