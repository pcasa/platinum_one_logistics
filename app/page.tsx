import { CTASection } from '@/components/sections/CTASection';
import { Hero } from '@/components/sections/Hero';
import { IndustriesPreview } from '@/components/sections/IndustriesPreview';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { TrustStrip } from '@/components/sections/TrustStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <IndustriesPreview />
      <CTASection />
    </>
  );
}
