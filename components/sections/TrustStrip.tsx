import { Section } from '@/components/ui/Section';

export function TrustStrip() {
  return (
    <Section className="py-10">
      <div className="grid gap-4 rounded-[2rem] border border-borderSubtle bg-white/5 p-6 md:grid-cols-3">
        {[
          'Trusted by premium clients who value presentation and care.',
          'Tailored for high-end designers, manufacturers, and hospitality teams.',
          'Built to modernize an established company without losing the human touch.'
        ].map((item) => (
          <p key={item} className="text-sm leading-7 text-textSecondary">
            {item}
          </p>
        ))}
      </div>
    </Section>
  );
}
