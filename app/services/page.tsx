import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <Section>
      <div className="kicker">Service Overview</div>
      <h1 className="section-title max-w-4xl">Services built around presentation, precision, and white-glove care.</h1>
      <p className="mt-5 section-copy">Expand this page into delivery, receiving, storage, installation support, relocation, and project coordination for designers and manufacturers.</p>
      <div className="mt-8 flex gap-4">
        <Button href="/contact">Request Quote</Button>
        <Button href="/" variant="secondary">Back Home</Button>
      </div>
    </Section>
  );
}
