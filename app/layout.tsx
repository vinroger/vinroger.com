import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Vincentius Roger Kuswara',
  description:
    'Full-stack and GenAI Developer. Computer Science at Singapore University of Technology and Design (SUTD)',
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
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
