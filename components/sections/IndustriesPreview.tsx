import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

const industries = [
  'Interior Designers',
  'Manufacturers',
  'Hospitality',
  'Model Homes',
  'Luxury Residential',
  'Commercial Projects'
];

export function IndustriesPreview() {
  return (
    <Section className="bg-black/20">
      <div className="mb-10">
        <div className="kicker">Who We Serve</div>
        <h2 className="section-title">Created for clients where timing, trust, and presentation matter.</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry) => (
          <Card key={industry}>
            <h3 className="text-xl font-semibold text-white">{industry}</h3>
            <p className="mt-3 text-sm leading-6 text-textSecondary">
              We support projects that require detail, discretion, and a dependable white-glove
              experience.
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
