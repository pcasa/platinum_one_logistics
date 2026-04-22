import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <Section>
      <div className="kicker">Contact & Quote</div>
      <h1 className="section-title max-w-4xl">Request a quote and start the conversation.</h1>
      <p className="mt-5 section-copy">Replace this placeholder with a polished inquiry form, direct contact information, service area notes, and response expectations.</p>
      <div className="mt-8 flex gap-4">
        <Button href="/contact">Request Quote</Button>
        <Button href="/" variant="secondary">Back Home</Button>
      </div>
    </Section>
  );
}
