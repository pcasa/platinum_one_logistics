import type { Metadata } from 'next';
import Image from "next/image";
import { Truck, PackageSearch, Warehouse, Gem, Building2, Hotel, CircleCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'White-glove delivery, receiving & inspection, climate-controlled storage, expert installation, relocation, and hospitality logistics across Georgia. No subcontractors — trained Platinum One crews on every job.',
  openGraph: { url: 'https://platinumonelogistics.net/services' },
};
import { HeroFadeUp, SlideLeft, SlideRight, StaggerList, StaggerItem, FadeUp } from "@/components/ui/Animate";

const services = [
  {
    icon: Truck,
    title: "Delivery Services",
    desc: "Modern, on-time delivery with careful handling every step of the way. Our fleet is equipped to handle everything from single items to full truckloads.",
    features: [
      "Scheduled & same-day delivery",
      "GPS-tracked fleet",
      "Blanket-wrapped protection",
      "Inside delivery available",
    ],
    image: "/images/bottom-section-background-image.jpeg",
  },
  {
    icon: PackageSearch,
    title: "Receiving & Inspection",
    desc: "Detailed receiving and inspection processes to ensure every item arrives in perfect condition and matches your order specifications.",
    features: [
      "Photo documentation",
      "Damage assessment",
      "Inventory verification",
      "Custom reporting",
    ],
    image: "/images/services/receiving.jpeg",
  },
  {
    icon: Warehouse,
    title: "Storage & Inventory",
    desc: "Secure, climate-controlled storage with real-time inventory management and detailed reporting.",
    features: [
      "Climate-controlled facility",
      "Real-time inventory tracking",
      "Custom storage solutions",
      "Monthly reporting",
    ],
    image: "/images/hero-background-image.jpeg",
  },
  {
    icon: Gem,
    title: "White-Glove Installation",
    desc: "Expert installation and final placement with meticulous attention to detail. Our trained teams handle every piece with the utmost care.",
    features: [
      "Furniture assembly",
      "Art hanging & placement",
      "Final styling touches",
      "Post-install cleanup",
    ],
    image: "/images/who-we-serve/hero.jpeg",
  },
  {
    icon: Building2,
    title: "Relocation Services",
    desc: "Full relocation services for homes, offices, and hospitality venues. We manage every detail from packing to final placement.",
    features: [
      "Commercial & residential",
      "Packing & unpacking",
      "Project management",
      "Furniture protection",
    ],
    image: "/images/who-we-serve/relocation.jpeg",
  },
  {
    icon: Hotel,
    title: "Hospitality & Model Homes",
    desc: "Specialized logistics for model homes, hotels, resorts, and staging companies. We make your spaces shine.",
    features: [
      "Model home staging",
      "Hotel FF&E installation",
      "Resort logistics",
      "Showroom setup",
    ],
    image: "/images/who-we-serve/model-homes.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-background text-white">

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/hero.jpeg"
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
              Our Services
            </h1>
            <p className="mt-4 text-base text-white/60">
              Comprehensive white-glove logistics solutions tailored to your needs.
            </p>
            <div className="mx-auto mt-6 h-[3px] w-16 bg-brandPrimary" />
          </HeroFadeUp>
        </div>
      </section>

      {/* Service sections — alternating text/image layout */}
      <section aria-label="Our services" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;

            const TextBlock = (
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brandPrimary/10">
                    <Icon className="h-6 w-6 text-brandPrimary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                    {service.title}
                  </h2>
                </div>

                <p className="mb-6 text-base leading-relaxed text-white/60">
                  {service.desc}
                </p>

                <StaggerList className="mb-8 space-y-2">
                  {service.features.map((feature) => (
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
                  aria-label={`Get a quote for ${service.title}`}
                  className="inline-flex items-center gap-2 rounded bg-brandPrimary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brandHover"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            );

            const ImageBlock = (
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={500}
                  className="h-72 w-full object-cover md:h-80"
                />
              </div>
            );

            return (
              <div
                key={service.title}
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

      {/* Bottom CTA */}
      <section aria-label="Get started with Platinum One Logistics" className="bg-backgroundAlt2 py-20">
        <FadeUp className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-base text-white/60">
            Let us handle the logistics so you can focus on what you do best.
          </p>
          <a
            href="mailto:michelle@platinumonelogistics.net?subject=Quote%20request"
            className="mt-8 inline-flex items-center gap-2 rounded bg-brandPrimary px-8 py-3 text-sm font-semibold text-white transition hover:bg-brandHover"
          >
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </FadeUp>
      </section>

    </main>
  );
}
