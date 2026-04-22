import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

const services = [
  'White-glove delivery',
  'Receiving & inspection',
  'Storage & inventory support',
  'Room-of-choice placement',
  'Designer & manufacturer logistics',
  'Relocation coordination'
];

export function ServicesPreview() {
  return (
    <Section>
      <div className="mb-10">
        <div className="kicker">Core Services</div>
        <h2 className="section-title">A premium service standard, built into every touchpoint.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card key={service}>
            <div className="mb-4 h-1 w-16 rounded-full bg-red-glow-gradient" />
            <h3 className="text-xl font-semibold text-white">{service}</h3>
            <p className="mt-3 text-sm leading-6 text-textSecondary">
              Designed for clients who need careful handling, polished presentation, and dependable
              execution.
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
