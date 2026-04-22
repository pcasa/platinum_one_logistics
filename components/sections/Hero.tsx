import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-borderSubtle">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-brandPrimary/20 blur-3xl" />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="container-shell relative grid min-h-[78vh] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="kicker">Premium Logistics & Moving</div>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            White-glove logistics for designers, manufacturers, and high-end spaces.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-textSecondary md:text-xl">
            Platinum One Logistics combines precision, presentation, and care—helping premium
            clients move, receive, store, and install with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Request a Quote</Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Established', 'Built on years of hands-on logistics and moving experience.'],
              ['White-glove', 'Careful handling for premium interiors, furnishings, and fixtures.'],
              ['Responsive', 'Clear communication from estimate through final placement.'],
              ['Modernized', 'A refined brand experience designed for today’s luxury clients.']
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="mb-2 text-sm uppercase tracking-[0.2em] text-brandAccent">{title}</div>
                <p className="text-sm leading-6 text-textSecondary">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
