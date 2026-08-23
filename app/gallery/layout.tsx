import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'See Platinum One Logistics in action — white-glove installations, model home staging, warehouse operations, hospitality projects, and delivery services across Georgia.',
  openGraph: {
    url: 'https://platinumonelogistics.net/gallery',
    images: [{ url: '/images/gallery/installation-1.jpeg', width: 800, height: 600, alt: 'White-glove furniture installation Georgia' }],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
