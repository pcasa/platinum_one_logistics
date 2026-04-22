import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <Section>
      <div className="kicker">About Platinum One</div>
      <h1 className="section-title max-w-4xl">An established company, presented with a modern premium brand.</h1>
      <p className="mt-5 section-copy">Use this page to tell the story of the company, your years of experience, and how the rebrand reflects the level of service you already deliver.</p>
      <div className="mt-8 flex gap-4">
        <Button href="/contact">Request Quote</Button>
        <Button href="/" variant="secondary">Back Home</Button>
      </div>
    </Section>
  );
}
