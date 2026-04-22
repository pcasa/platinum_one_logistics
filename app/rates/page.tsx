import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <Section>
      <div className="kicker">Rates & Delivery</div>
      <h1 className="section-title max-w-4xl">Transparent pricing support for premium logistics work.</h1>
      <p className="mt-5 section-copy">This page can include the updated rate sheet, service notes, coverage area, and a CTA into custom quoting for more complex scopes.</p>
      <div className="mt-8 flex gap-4">
        <Button href="/contact">Request Quote</Button>
        <Button href="/" variant="secondary">Back Home</Button>
      </div>
    </Section>
  );
}
