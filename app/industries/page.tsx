import type { Metadata } from 'next';
import Image from "next/image";
import { Palette, Hotel, House, Building, CircleCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'Who We Serve',
  description: 'Tailored logistics solutions for interior designers, hospitality venues, model home builders, and relocation clients across Georgia. Platinum One Logistics understands your industry.',
  openGraph: { url: 'https://platinumonelogistics.net/industries' },
};
import { HeroFadeUp, SlideLeft, SlideRight, StaggerList, StaggerItem } from "@/components/ui/Animate";

const industries = [
  {
    icon: Palette,
    title: "Interior Designers",
    desc: "We bring your vision to life with flawless execution and careful handling from start to finish. Our team understands the nuances of designer furniture and decor, ensuring every piece is handled with the utmost care.",
    features: [
      "Receiving & inspection of designer pieces",
      "Secure climate-controlled storage",
      "White-glove delivery & installation",
      "Final placement & styling support",
    ],
    image: "/images/who-we-serve/designers.jpeg",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    desc: "Trusted logistics partner for hotels, resorts, and restaurants — delivering quality guest experiences through flawless FF&E installation and project execution.",
    features: [
      "Hotel FF&E logistics",
      "Resort installation services",
      "Restaurant setup & delivery",
      "Multi-phase project coordination",
    ],
    image: "/images/who-we-serve/hospitality.jpeg",
  },
  {
    icon: House,
    title: "Model Homes",
    desc: "On-time, on-budget logistics and installation that keeps your property show-ready and stunning. We specialize in model home staging logistics.",
    features: [
      "Full model home installation",
      "Staging company partnerships",
      "De-stage & restage services",
      "Tight-timeline execution",
    ],
    image: "/images/who-we-serve/model-homes.jpeg",
  },
  {
    icon: Building,
    title: "Relocation Clients",
    desc: "Seamless relocation logistics for homes and offices with care, professionalism, and discretion. From packing to final placement, we manage every detail.",
    features: [
      "Residential relocations",
      "Corporate & office moves",
      "Packing & unpacking services",
      "Furniture protection & reassembly",
    ],
    image: "/images/who-we-serve/relocation.jpeg",
  },
];

export default function IndustriesPage() {
  return (
    <main id="main-content" className="bg-background text-white">

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/who-we-serve/hero.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <HeroFadeUp className="text-center">
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
              Who We Serve
            </h1>
            <p className="mt-4 text-base text-white/60">
              Tailored logistics solutions for every industry we serve.
            </p>
            <div className="mx-auto mt-6 h-[3px] w-16 bg-brandPrimary" />
          </HeroFadeUp>
        </div>
      </section>

      {/* Industry sections — alternating text/image layout */}
      <section aria-label="Industries we serve" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isReversed = index % 2 === 1;

            const TextBlock = (
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brandPrimary/10">
                    <Icon className="h-6 w-6 text-brandPrimary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                    {industry.title}
                  </h2>
                </div>

                <p className="mb-6 text-base leading-relaxed text-white/60">
                  {industry.desc}
                </p>

                <StaggerList className="mb-8 space-y-2">
                  {industry.features.map((feature) => (
                    <StaggerItem key={feature} y={8}>
                      <div className="flex items-center gap-2">
                        <CircleCheck className="h-4 w-4 shrink-0 text-brandPrimary" />
                        <span className="text-sm text-white/60">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerList>

                <a
                  href="mailto:michelle@platinumonelogistics.net?subject=Quote%20request"
                  aria-label={`Get a quote for ${industry.title}`}
                  className="inline-flex items-center gap-2 rounded bg-brandPrimary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brandHover"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            );

            const ImageBlock = (
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={800}
                  height={500}
                  className="h-72 w-full object-cover md:h-80"
                />
              </div>
            );

            return (
              <div
                key={industry.title}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
              >
                {isReversed ? (
                  <>
                    <SlideLeft>{ImageBlock}</SlideLeft>
                    <SlideRight>{TextBlock}</SlideRight>
                  </>
                ) : (
                  <>
                    <SlideLeft>{TextBlock}</SlideLeft>
                    <SlideRight>{ImageBlock}</SlideRight>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}
