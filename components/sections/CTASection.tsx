import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export function CTASection() {
  return (
    <Section>
      <div className="overflow-hidden rounded-[2rem] border border-borderSubtle bg-panel-gradient p-8 md:p-12">
        <div className="max-w-3xl">
          <div className="kicker">Ready to Get Started</div>
          <h2 className="section-title">Bring a more polished logistics partner into your next project.</h2>
          <p className="mt-4 section-copy">
            Whether you need delivery, storage, installation support, or a full white-glove partner,
            we’ll shape a solution around the scope and expectations of your client experience.
          </p>
          <div className="mt-8">
            <Button href="/contact">Request Your Quote</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
