import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
});

const BASE_URL = 'https://platinumonelogistics.net';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Platinum One Logistics | White-Glove Logistics & Delivery in Georgia',
    template: '%s | Platinum One Logistics',
  },
  description:
    'Full-service white-glove logistics for interior designers, hospitality, model homes, and relocation. Delivery, receiving, storage, and installation across Georgia.',
  keywords: [
    'white-glove logistics Georgia',
    'furniture delivery Georgia',
    'interior designer logistics',
    'model home logistics',
    'white-glove installation',
    'receiving and inspection',
    'storage and inventory Georgia',
    'hospitality logistics',
    'relocation services Georgia',
    'Platinum One Logistics',
  ],
  authors: [{ name: 'Platinum One Logistics' }],
  openGraph: {
    type: 'website',
    siteName: 'Platinum One Logistics',
    locale: 'en_US',
    url: BASE_URL,
    title: 'Platinum One Logistics | White-Glove Logistics & Delivery in Georgia',
    description:
      'Full-service white-glove logistics for interior designers, hospitality, model homes, and relocation. Delivery, receiving, storage, and installation across Georgia.',
    images: [{ url: '/images/hero-background-image.jpeg', width: 1920, height: 1080, alt: 'Platinum One Logistics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platinum One Logistics | White-Glove Logistics Georgia',
    description: 'Full-service white-glove logistics across Georgia.',
    images: ['/images/hero-background-image.jpeg'],
  },
  icons: { icon: '/logo/favicon_multi.ico' },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Platinum One Logistics',
  description:
    'Full-service white-glove logistics company providing delivery, receiving & inspection, storage, installation, relocation, and hospitality services across Georgia.',
  url: BASE_URL,
  telephone: '(770) 368-8900',
  email: 'michelle@platinumonelogistics.net',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'GA',
    addressCountry: 'US',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '17:00',
  },
  areaServed: { '@type': 'State', name: 'Georgia' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Logistics Services',
    itemListElement: [
      'Delivery Services',
      'Receiving & Inspection',
      'Storage & Inventory',
      'White-Glove Installation',
      'Relocation Services',
      'Hospitality & Model Homes',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
  image: `${BASE_URL}/logo/platinum-one-logo.png`,
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Skip to main content — first focusable element on every page */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded focus:bg-brandPrimary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}