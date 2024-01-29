import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/app/Header';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream">
        <Header />
        {children}
      </body>
    </html>
  );
}
