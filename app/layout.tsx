import './globals.css';
import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Jonathan Mayer',
  description: 'Video Producer & Strategist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${newsreader.variable}`}>
        {children}
      </body>
    </html>
  );
}
