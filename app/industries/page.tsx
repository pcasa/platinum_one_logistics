import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <Section>
      <div className="kicker">Who We Serve</div>
      <h1 className="section-title max-w-4xl">Tailored to designers, manufacturers, hospitality teams, and premium clients.</h1>
      <p className="mt-5 section-copy">Use this page to speak directly to each audience segment and explain why Platinum One is a better fit than a generic moving company.</p>
      <div className="mt-8 flex gap-4">
        <Button href="/contact">Request Quote</Button>
        <Button href="/" variant="secondary">Back Home</Button>
      </div>
    </Section>
  );
}
