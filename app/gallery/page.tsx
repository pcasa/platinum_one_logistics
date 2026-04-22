import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <Section>
      <div className="kicker">Gallery</div>
      <h1 className="section-title max-w-4xl">Show the standard of care through imagery, installations, and completed work.</h1>
      <p className="mt-5 section-copy">Use this page for strong visual proof: interiors, trucks, team presentation, receiving, placement, and white-glove execution.</p>
      <div className="mt-8 flex gap-4">
        <Button href="/contact">Request Quote</Button>
        <Button href="/" variant="secondary">Back Home</Button>
      </div>
    </Section>
  );
}
