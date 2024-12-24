import './globals.css';
import type { Metadata } from 'next';
import { inter } from './fonts';

export const metadata: Metadata = {
  title: 'Maya Lama',
  description: 'Photography Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}