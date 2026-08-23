import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'White-Glove Logistics Georgia',
  description: 'Platinum One Logistics — full-service white-glove logistics for interior designers, hospitality, model homes, and relocation clients across Georgia.',
  alternates: { canonical: 'https://platinumonelogistics.net' },
  openGraph: { url: 'https://platinumonelogistics.net/onepage' },
};
import {
  Truck, PackageSearch, Warehouse, Gem, Building2, Hotel,
  Users, Home, Phone, Mail, MapPin, Clock,
  Shield, Eye, UserCheck, Heart, Handshake, CheckCircle2, ArrowRight, CalendarDays,
} from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, StaggerList, StaggerItem, HeroFadeUp } from "@/components/ui/Animate";

/* ─── Data ─────────────────────────────────────────────────────────── */

const services = [
  {
    icon: Truck,
    title: "Delivery Services",
    desc: "Modern, on-time delivery with careful handling every step of the way. Our fleet handles everything from single items to full truckloads.",
    features: ["Scheduled & same-day delivery", "GPS-tracked fleet", "Blanket-wrapped protection", "Inside delivery available"],
    image: "/images/bottom-section-background-image.jpeg",
  },
  {
    icon: PackageSearch,
    title: "Receiving & Inspection",
    desc: "Detailed receiving and inspection to ensure every item arrives in perfect condition and matches your order specifications.",
    features: ["Photo documentation", "Damage assessment", "Inventory verification", "Custom reporting"],
    image: "/images/services/receiving.jpeg",
  },
  {
    icon: Warehouse,
    title: "Storage & Inventory",
    desc: "Secure, climate-controlled storage with real-time inventory management and detailed reporting.",
    features: ["Climate-controlled facility", "Real-time inventory tracking", "Custom storage solutions", "Monthly reporting"],
    image: "/images/hero-background-image.jpeg",
  },
  {
    icon: Gem,
    title: "White-Glove Installation",
    desc: "Expert installation and final placement with meticulous attention to detail. Our trained teams handle every piece with care.",
    features: ["Furniture assembly", "Art hanging & placement", "Final styling touches", "Post-install cleanup"],
    image: "/images/who-we-serve/hero.jpeg",
  },
  {
    icon: Building2,
    title: "Relocation Services",
    desc: "Full relocation services for homes, offices, and hospitality venues — every detail from packing to final placement.",
    features: ["Commercial & residential", "Packing & unpacking", "Project management", "Furniture protection"],
    image: "/images/who-we-serve/relocation.jpeg",
  },
  {
    icon: Hotel,
    title: "Hospitality & Model Homes",
    desc: "Specialized logistics for model homes, hotels, resorts, and staging companies. We make your spaces shine.",
    features: ["Model home staging", "Hotel FF&E installation", "Resort logistics", "Showroom setup"],
    image: "/images/who-we-serve/model-homes.jpeg",
  },
];

const audiences = [
  { title: "Interior Designers", copy: "We bring your vision to life with flawless execution and careful handling from start to finish.", image: "/images/who-we-serve/designers.jpeg",   icon: Users     },
  { title: "Hospitality",        copy: "Trusted logistics partner for hotels, resorts, and restaurants — flawless FF&E installation.",  image: "/images/who-we-serve/hospitality.jpeg", icon: Hotel     },
  { title: "Model Homes",        copy: "On-time, on-budget logistics and installation that keeps your property show-ready.",            image: "/images/who-we-serve/model-homes.jpeg", icon: Home      },
  { title: "Relocation Clients", copy: "Seamless relocation logistics for homes and offices with care, professionalism, and discretion.", image: "/images/who-we-serve/relocation.jpeg", icon: Building2 },
];

const coreValues = [
  { icon: Shield,    title: "Integrity",              desc: "We do the right thing as if it were our own." },
  { icon: Eye,       title: "Honesty & Transparency", desc: "Clear communication. No surprises." },
  { icon: UserCheck, title: "Accountability",         desc: "We own every step of the process." },
  { icon: Heart,     title: "Respect",                desc: "For your project, your time, and your clients." },
  { icon: Handshake, title: "Collaboration",          desc: "We work as a true partner to your team." },
];

const storyPoints = [
  "Precision scheduling and project coordination",
  "Dedicated account management and real-time updates",
  "15 years per installation crew member on average",
  "All teams are Platinum One employees — never subcontracted",
  "Fully insured with trained, professional crews",
];

const contactDetails = [
  { icon: Phone,  label: "Phone",    value: "(770) 368-8900",                   href: "tel:7703688900" },
  { icon: Mail,   label: "Email",    value: "michelle@platinumonelogistics.net", href: "mailto:michelle@platinumonelogistics.net" },
  { icon: MapPin, label: "Location", value: "Georgia",                         href: null },
  { icon: Clock,  label: "Hours",    value: "Mon – Fri: 7am – 5pm",            href: null },
];

const serviceOptions = [
  "Delivery Services", "Receiving & Inspection", "Storage & Inventory",
  "White-Glove Installation", "Relocation Services", "Hospitality & Model Homes", "Other",
];

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function OnePageLayout() {
  return (
    <main id="main-content" className="bg-background text-white">

      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section id="home" aria-label="Home" className="relative isolate overflow-hidden scroll-mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-background-image.jpeg')" }}
        />
        <div className="absolute inset-0 bg-section-overlay" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="mx-auto w-full max-w-3xl">
            <HeroFadeUp delay={0} y={20}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brandPrimary">
                White-Glove Logistics
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                Full White-Glove Logistics
                Services Delivered{" "}
                <span className="italic text-brandGold">Seamlessly.</span>
              </h1>
            </HeroFadeUp>

            <HeroFadeUp delay={0.15} y={15}>
              <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg">
                From receiving and inspection to delivery, white-glove installation,
                storage and full relocation services, Platinum One Logistics delivers
                complete, high-touch logistics solutions tailored for designers,
                hospitality, model homes, and move-in ready projects.
              </p>
            </HeroFadeUp>

            <HeroFadeUp delay={0.25} y={15}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded bg-brandPrimary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brandHover"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  Request a Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Our Services
                </a>
              </div>
            </HeroFadeUp>
          </div>
        </div>
      </section>

      {/* ── Rebranding banner ───────────────────────────────────────── */}
      <section aria-label="Rebranding announcement" className="border-y border-white/10 bg-banner">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center lg:px-8">
          <p className="text-base text-white/60">
            Formerly Design Logistics — Now{" "}
            <span className="font-semibold text-white">Platinum One Logistics</span>
          </p>
          <p className="mt-1 text-sm text-white/45">
            Built stronger. Structured better. Focused on service excellence.
          </p>
        </div>
      </section>

      {/* ── 2. Services ─────────────────────────────────────────────── */}
      <section id="services" aria-label="Our Services" className="bg-background py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brandPrimary">What We Do</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Our Services</h2>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-brandPrimary" />
          </FadeUp>

          <StaggerList className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, features, image }) => (
              <StaggerItem key={title} y={16}>
                <div className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-card transition hover:border-brandPrimary/40">
                  {/* Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover object-center transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-iconBg transition group-hover:bg-iconBgHover">
                      <Icon className="h-5 w-5 text-brandPrimary" aria-hidden="true" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-2 font-display text-lg font-bold text-white">{title}</h3>
                    <p className="mb-4 text-sm leading-6 text-white/55">{desc}</p>
                    <ul className="space-y-1.5">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-white/45">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brandPrimary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── 3. Who We Work With ─────────────────────────────────────── */}
      <section id="who-we-serve" aria-label="Who We Work With" className="bg-backgroundAlt2 py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brandPrimary">Industries</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Who We Work With</h2>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-brandPrimary" />
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(({ title, copy, image, icon: Icon }) => (
              <FadeUp key={title}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06]">
                  <div className="relative h-56 w-full">
                    <Image src={image} alt={title} fill className="object-cover object-center transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mb-1 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-brandPrimary" />
                      <h3 className="font-display text-base font-bold text-white">{title}</h3>
                    </div>
                    <p className="text-xs leading-5 text-white/65">{copy}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. About / Our Story ────────────────────────────────────── */}
      <section id="about" aria-label="About Us" className="bg-background py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* Story */}
            <SlideLeft>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brandPrimary">Our Story</p>
              <h2 className="font-display text-4xl font-bold text-white">
                Built on Trust.<br />
                <span className="italic text-brandGold">Driven by Excellence.</span>
              </h2>
              <div className="mt-4 h-[3px] w-14 bg-brandPrimary" />
              <p className="mt-6 text-base leading-7 text-white/60">
                From humble beginnings as Design Logistics, we&apos;ve grown into Platinum One
                Logistics — a full-service, white-glove logistics company built on service
                excellence, accountability, and a deep passion for what we do.
              </p>
              <p className="mt-4 text-base leading-7 text-white/60">
                Our team operates as an extension of yours, ensuring every client, in every
                home, is treated from warehouse to final placement with the utmost
                professionalism and care.
              </p>
              <StaggerList className="mt-8 space-y-3">
                {storyPoints.map((point) => (
                  <StaggerItem key={point} y={8}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brandPrimary" />
                      <span className="text-sm text-white/65">{point}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </SlideLeft>

            {/* Core Values */}
            <SlideRight>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brandPrimary">What We Stand For</p>
              <h2 className="font-display text-4xl font-bold text-white">Core Values</h2>
              <div className="mt-4 h-[3px] w-14 bg-brandPrimary" />
              <StaggerList className="mt-8 space-y-5">
                {coreValues.map(({ icon: Icon, title, desc }) => (
                  <StaggerItem key={title} y={12}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brandPrimary/10">
                        <Icon className="h-5 w-5 text-brandPrimary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-brandPrimary">{title}</h3>
                        <p className="text-sm text-white/55">{desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </SlideRight>

          </div>
        </div>
      </section>

      {/* ── 5. Contact ──────────────────────────────────────────────── */}
      <section id="contact" aria-label="Contact Us" className="bg-backgroundAlt2 py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brandPrimary">Get In Touch</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Contact Us</h2>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-brandPrimary" />
            <p className="mt-5 text-base text-white/55">Ready to experience the Platinum One difference?</p>
          </FadeUp>

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Contact info */}
            <SlideLeft>
              <div className="space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brandPrimary/10">
                      <Icon className="h-5 w-5 text-brandPrimary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40">{label}</p>
                      {href ? (
                        <a href={href} className="mt-0.5 text-sm font-medium text-white transition hover:text-brandPrimary">{value}</a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-white">{value}</p>
                      )}
                      {label === "Hours" && <p className="text-xs text-white/40">After-hours available by request</p>}
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="mt-10 rounded-xl border border-white/[0.06] bg-card p-6">
                <p className="text-sm italic leading-6 text-white/65">
                  &ldquo;We respond to all inquiries within 24 hours. For urgent requests, please call us directly.&rdquo;
                </p>
                <footer className="mt-3 text-xs font-semibold text-brandPrimary">
                  — Michelle Casanova, Operations
                </footer>
              </blockquote>
            </SlideLeft>

            {/* Form */}
            <SlideRight>
              <div className="rounded-2xl border border-white/[0.06] bg-card p-8">
                <h3 className="font-display text-2xl font-bold text-white">Request a Quote</h3>
                <div className="mt-3 h-[3px] w-14 bg-brandPrimary" />

                <form
                  action="mailto:michelle@platinumonelogistics.net"
                  method="get"
                  encType="text/plain"
                  className="mt-7 space-y-5"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="op-name" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">Full Name <span className="text-brandPrimary" aria-hidden="true">*</span></label>
                      <input id="op-name" type="text" name="name" required aria-required="true" placeholder="John Smith" className="w-full rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40" />
                    </div>
                    <div>
                      <label htmlFor="op-email" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">Email <span className="text-brandPrimary" aria-hidden="true">*</span></label>
                      <input id="op-email" type="email" name="email" required aria-required="true" placeholder="john@company.com" className="w-full rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="op-phone" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">Phone</label>
                      <input id="op-phone" type="tel" name="phone" placeholder="(555) 123-4567" className="w-full rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40" />
                    </div>
                    <div>
                      <label htmlFor="op-company" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">Company</label>
                      <input id="op-company" type="text" name="company" placeholder="Company name" className="w-full rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="op-service" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">Service Needed</label>
                    <select id="op-service" name="service" className="w-full rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white/70 outline-none transition focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40">
                      <option value="" className="bg-card">Select a service</option>
                      {serviceOptions.map((s) => <option key={s} value={s} className="bg-card">{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="op-details" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">Project Details <span className="text-brandPrimary" aria-hidden="true">*</span></label>
                    <textarea id="op-details" name="details" required aria-required="true" rows={4} placeholder="Tell us about your project, timeline, and any special requirements..." className="w-full resize-none rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40" />
                  </div>

                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-brandPrimary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brandHover">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Submit Quote Request
                  </button>
                </form>
              </div>
            </SlideRight>

          </div>
        </div>
      </section>

    </main>
  );
}
