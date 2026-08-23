import type { Metadata } from 'next';
import Image from "next/image";
import { CheckCircle2, Star, Shield, Eye, UserCheck, Heart, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Formerly Design Logistics, now Platinum One Logistics. 15 years average crew experience, all Platinum One employees — never subcontracted. Built on integrity, accountability, and service excellence in Georgia.',
  openGraph: { url: 'https://platinumonelogistics.net/about' },
};
import { FadeUp, SlideLeft, SlideRight, StaggerList, StaggerItem, HeroFadeUp } from "@/components/ui/Animate";

const agendaItems = [
  "Introduction to Platinum One Logistics",
  "Our Experience, Team, and Values",
  "The White-Glove Installation Process",
  "Our Comprehensive Services",
  "An 8000 Sq Ft Warehouse Facility",
  "Dedicated Platinum One Employees & Fleet",
];

const leadershipPoints = [
  "Executive leadership trusted by top-tier clientele",
  "15 years per installation crew member on average",
  "All teams are Platinum One employees",
  "N-Year-Accountable process",
  "Dedicated account manager with regular communication cadence",
];

const coreValues = [
  { title: "Integrity",             description: "We do the right as if it were our own.",          icon: Shield      },
  { title: "Honesty & Transparency",description: "Clear communication. No surprises.",              icon: Eye         },
  { title: "Accountability",        description: "We own every step of the process.",               icon: UserCheck   },
  { title: "Respect",               description: "For your project, your time, and your clients.",  icon: Heart       },
  { title: "Collaboration",         description: "We work as a true partner to your team.",         icon: Handshake   },
];

const expectations = [
  "Direct access to your account manager",
  "Consistent communication throughout the project",
  "Full transparency and accountability",
  "Online access to inventory and project tracking",
  "Regular project updates and check-ins",
  "Immediate response to challenges",
];

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-background text-white">

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/about-hero.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <HeroFadeUp className="text-center">
            <h1 className="font-display text-5xl font-bold text-white sm:text-6xl">
              About Us
            </h1>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-brandPrimary" />
          </HeroFadeUp>
        </div>
      </section>

      {/* Our Approach + Agenda */}
      <section aria-labelledby="approach-heading" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <SlideLeft>
              <h2 id="approach-heading" className="font-display text-4xl font-bold text-white">
                Our <span className="italic text-brandPrimary">Approach</span>
              </h2>
              <div className="mt-3 h-[3px] w-14 bg-brandPrimary" />
              <p className="mt-5 text-base italic text-brandGold">
                We don&apos;t just move furniture — We execute your vision.
              </p>
              <p className="mt-4 text-base leading-7 text-white/65">
                Our team operates as an extension of yours, ensuring every client, in every
                home, is treated from warehouse to final placement with the utmost
                professionalism and care.
              </p>
            </SlideLeft>

            <SlideRight className="rounded-xl border border-white/10 bg-card p-8">
              <h3 className="font-display text-2xl font-bold text-white">Agenda</h3>
              <StaggerList className="mt-6 space-y-4">
                {agendaItems.map((item) => (
                  <StaggerItem key={item} y={10}>
                    <div className="flex items-center gap-3 text-white/75">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brandPrimary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* Our Story + Leadership */}
      <section aria-label="Our story and leadership" className="bg-backgroundAlt2 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <SlideLeft>
              <h2 className="font-display text-4xl font-bold text-white">Our Story</h2>
              <div className="mt-3 h-[3px] w-14 bg-brandPrimary" />
              <p className="mt-6 text-base leading-7 text-white/65">
                From humble beginnings as Design Logistics, we&apos;ve grown into Platinum One
                Logistics — a full-service, white-glove logistics company built on service
                excellence, accountability, and a deep passion for what we do.
              </p>
              <p className="mt-4 text-base leading-7 text-white/65">
                Our journey is defined by the relationships we&apos;ve built and the trust we&apos;ve
                earned from designers, hospitality leaders, and relocation professionals
                across Georgia.
              </p>
            </SlideLeft>

            <SlideRight className="rounded-xl border border-white/10 bg-card p-8">
              <h3 className="font-display text-2xl font-bold text-white">
                Leadership &amp; Operations Team
              </h3>
              <p className="mt-2 text-sm italic text-brandGold">
                Experienced. Proven. Accountable.
              </p>
              <StaggerList className="mt-6 space-y-4">
                {leadershipPoints.map((point) => (
                  <StaggerItem key={point} y={10}>
                    <div className="flex items-start gap-3 text-white/70">
                      <Star className="mt-0.5 h-4 w-4 shrink-0 text-brandPrimary" />
                      <span className="text-sm">{point}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* Core Values + What You Can Expect */}
      <section aria-label="Our core values and service commitments" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">

            <SlideLeft>
              <h2 className="font-display text-4xl font-bold text-white">Our Core Values</h2>
              <div className="mt-3 h-[3px] w-14 bg-brandPrimary" />
              <StaggerList className="mt-8 space-y-5">
                {coreValues.map(({ title, description, icon: Icon }) => (
                  <StaggerItem key={title} y={12}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brandPrimary/10">
                        <Icon className="h-5 w-5 text-brandPrimary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-brandPrimary">{title}</h3>
                        <p className="text-sm text-white/60">{description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </SlideLeft>

            <SlideRight>
              <h2 className="font-display text-4xl font-bold text-white">What You Can Expect</h2>
              <div className="mt-3 h-[3px] w-14 bg-brandPrimary" />
              <StaggerList className="mt-8 space-y-3">
                {expectations.map((item) => (
                  <StaggerItem key={item} y={10}>
                    <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-card px-5 py-4">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brandPrimary" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </SlideRight>
          </div>
        </div>
      </section>

    </main>
  );
}
