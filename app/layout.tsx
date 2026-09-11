import './globals.css';
import type { Metadata } from 'next';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jonathan Mayer — Video Producer & Strategist',
  description:
    'Portfolio of Jonathan Mayer, Video Producer and Strategist based in New York City.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-stone-50 text-stone-900 antialiased selection:bg-stone-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}