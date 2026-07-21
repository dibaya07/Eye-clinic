import type {Metadata, Viewport} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles
import { seo } from '@/data/doctorData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords.join(', '),
  metadataBase: new URL(seo.siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    siteName: 'Clear Vision Eye Hospital',
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'Clear Vision Eye Hospital - Dr. Arjun Sharma',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: '#0d8a83',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-700 bg-slate-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
