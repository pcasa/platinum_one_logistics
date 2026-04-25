import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  PackageCheck,
  Warehouse,
  Wrench,
  CheckCircle2,
  Users,
  Building2,
  Hotel,
  Mail,
  Phone,
  UserRound,
  Home,
  ArrowRight,
  CalendarDays,
  Heart,
  Award,
  Shield,
} from "lucide-react";

const HERO_IMAGE = "/images/hero-background-image.jpeg";
const DONE_RIGHT_IMAGE = "/images/center-section-background-image.jpeg";
const CONTACT_BG_IMAGE = "/images/bottom-section-background-image.jpeg";

const services = [
  {
    title: "Delivery Services",
    description:
      "Modern, on-time delivery with careful handling every step of the way.",
    icon: Truck,
  },
  {
    title: "Receiving & Inspection",
    description:
      "Detailed receiving and inspection to ensure accuracy and quality.",
    icon: PackageCheck,
  },
  {
    title: "Storage & Inventory",
    description:
      "Secure storage with real-time inventory management and reporting.",
    icon: Warehouse,
  },
  {
    title: "White-Glove Installation",
    description:
      "Expert installation and final placement with meticulous attention to detail.",
    icon: Wrench,
  },
  {
    title: "Relocation Services",
    description:
      "Full relocation services for homes, offices, and hospitality.",
    icon: Building2,
  },
  {
    title: "Hospitality & Model Homes",
    description:
      "Model home logistics, resorts, and model furniture installation.",
    icon: Hotel,
  },
];

const doneRightItems = [
  "Precision scheduling and project coordination",
  "Receiving, inspection, storage, and inventory",
  "White-glove installation, assembly, and final placement",
  "Full relocation, hospitality, and model home execution",
  "Dedicated account management and real-time updates",
  "Fully insured with trained, professional teams",
];

const audiences = [
  {
    title: "Interior Designers",
    copy:
      "We bring your vision to life with flawless execution and careful handling from start to finish.",
    image: "/images/image-1.jpeg",
    icon: Users,
  },
  {
    title: "Hospitality",
    copy:
      "Trusted logistics partner for hotels, resorts, and restaurants — delivering quality guest experiences.",
    image: "/images/image-2.jpeg",
    icon: Hotel,
  },
  {
    title: "Model Homes",
    copy:
      "On-time, on-budget logistics and installation that keeps your property show-ready and stunning.",
    image: "/images/image-3.jpeg",
    icon: Home,
  },
  {
    title: "Relocation Clients",
    copy:
      "Seamless relocation logistics for homes and offices with care, professionalism, and discretion.",
    image: "/images/image-4.jpeg",
    icon: Building2,
  },
];

const values = [
  "Established service, modernized presentation",
  "Premium handling without unnecessary complexity",
  "Dependable crews and thoughtful execution",
  "Built for trust, referrals, and long-term partnerships",
];

const warehousePreview = [
  { label: "Receiving", rate: "$45 / hr" },
  { label: "Inspection", rate: "$45 / hr" },
  { label: "Storage (per pallet)", rate: "$85 / mo" },
  { label: "Inventory Management", rate: "$40 / hr" },
];

const deliveryPreview = [
  { label: "2 Man / Truck", rate: "$145 / hr" },
  { label: "3 Man / Truck", rate: "$185 / hr" },
  { label: "White-Glove Install", rate: "$195 / hr" },
  { label: "Specialty / After Hours", rate: "Custom Quote" },
];

const RATE_SHEET_URL =
  "https://media.base44.com/files/public/69e69f79d0c52d4408902941/34e04b9b4_Delivery_Rate_Sheet_Updated.docx";
const QUOTE_EMAIL = "mailto:michelle@platinumonelogistics.net?subject=Quote%20request";
const INFO_EMAIL = "mailto:michelle@platinumonelogistics.net?subject=Info%20request";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c41e2a]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#050505] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(0,0,0,1.0)_0%,rgba(0,0,0,0.75)_100%)]" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-center px-6 py-24 lg:px-8">
          {/* centered content block, text left-aligned within */}
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-6 flex justify-center">
              <Image
                src="/logo/platinum-one-logo.png"
                alt="Platinum One Logistics"
                width={200}
                height={46}
                priority
              />
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Full White-Glove Logistics
              Services Delivered{" "}
              <span className="italic text-[#c9a843]">Seamlessly.</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg">
              From receiving and inspection to delivery, white-glove installation,
              storage and full relocation services, Platinum One Logistics delivers
              complete, high-touch logistics solutions tailored for designers,
              hospitality, model homes, and move-in ready projects.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={QUOTE_EMAIL}
                className="inline-flex items-center justify-center gap-2 rounded bg-[#c41e2a] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d72633]"
              >
                <ArrowRight className="h-4 w-4" />
                Request a Quote
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                <CalendarDays className="h-4 w-4" />
                Schedule Delivery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1c1c1c]">
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

      <section className="bg-[#0a0a0a] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Our Full-Service Logistics Solutions
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-20 bg-[#c41e2a]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-xl border border-white/[0.06] bg-[#1a1a1a] p-6 transition duration-300 hover:border-[#c41e2a]/40"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#3a0f12] transition duration-300 group-hover:bg-[#5a1520]">
                    <Icon className="h-7 w-7 text-[#c41e2a]" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        {/* Section background image with same mask as hero */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${DONE_RIGHT_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(0,0,0,1.0)_0%,rgba(0,0,0,0.75)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left: heading + checklist */}
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                Full-Service White-Glove<br />
                Logistics.{" "}
                <span className="italic text-[#c41e2a]">Done Right.</span>
              </h2>
              <div className="mt-4 h-[3px] w-16 bg-[#c41e2a]" />

              <ul className="mt-10 space-y-5">
                {doneRightItems.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-white/80">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c41e2a]" />
                    <span className="text-base leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: framed image panel — swap src when the white-glove service photo is available */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/center-section-background-image.jpeg"
                  alt="White glove service"
                  width={700}
                  height={500}
                  className="h-[420px] w-full object-cover"
                />
              </div>
              {/* Red L-shaped corner accent */}
              <div className="pointer-events-none absolute -bottom-3 -left-3 h-16 w-16 border-b-2 border-l-2 border-[#c41e2a]" />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Who We Serve
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-20 bg-[#c41e2a]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <div
                  key={audience.title}
                  className="group relative overflow-hidden rounded-xl border border-white/10"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${audience.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="relative flex h-[280px] flex-col justify-end p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60">
                        <Icon className="h-4 w-4 text-[#c41e2a]" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {audience.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-6 text-white/70">
                      {audience.copy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
              The Platinum One White-Glove Promise
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-20 bg-[#c41e2a]" />
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Unparalleled Care",
                description: "We treat every home like our own — with the utmost care and respect.",
              },
              {
                icon: Award,
                title: "Consistent Excellence",
                description: "Dependable execution every project, every time.",
              },
              {
                icon: Shield,
                title: "Peace of Mind",
                description: "We handle the details so you can focus on what matters most to you and your clients.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#3a0f12]">
                  <Icon className="h-8 w-8 text-[#c41e2a]" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-white/55">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1.35fr_1.35fr]">

            {/* Left: heading + CTA */}
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight text-white">
                Transparent Rates.{" "}
                <span className="italic text-[#c41e2a]">No Surprises.</span>
              </h2>
              <div className="mt-4 h-[3px] w-16 bg-[#c41e2a]" />
              <p className="mt-5 text-sm leading-7 text-white/60">
                Clear, competitive pricing for warehouse and delivery services.
                View our rate charts.
              </p>
              <a
                href={RATE_SHEET_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded border border-[#c41e2a]/50 px-5 py-2.5 text-sm font-semibold text-[#c41e2a] transition hover:bg-[#c41e2a]/10"
              >
                View Rates <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Warehouse table */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0e0e0e]">
              <div className="bg-gradient-to-r from-[#3a0f12] to-[#1a0608] px-6 py-4">
                <h3 className="font-semibold text-white">Warehouse Rate Chart</h3>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {warehousePreview.map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-6 py-3">
                    <span className="text-sm text-white/55">{item.label}</span>
                    <div className="text-right">
                      <span className="text-xs text-white/35">Starting at </span>
                      <span className="font-semibold text-white">{item.rate}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/[0.06] px-6 py-3 text-center text-xs text-white/35">
                Full chart available on Rates page
              </div>
            </div>

            {/* Delivery table */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0e0e0e]">
              <div className="bg-gradient-to-r from-[#3a0f12] to-[#1a0608] px-6 py-4">
                <h3 className="font-semibold text-white">Delivery Rate Chart</h3>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {deliveryPreview.map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-6 py-3">
                    <span className="text-sm text-white/55">{item.label}</span>
                    <div className="text-right">
                      {item.rate !== "Custom Quote" && (
                        <span className="text-xs text-white/35">Starting at </span>
                      )}
                      <span className="font-semibold text-white">{item.rate}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/[0.06] px-6 py-3 text-center text-xs text-white/35">
                Full chart available on Rates page
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CONTACT_BG_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(0,0,0,1.0)_0%,rgba(0,0,0,0.82)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left: heading + contact info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
                Let&apos;s Get Your Project Moving
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
                Ready to experience the Platinum One difference? Our team is here to deliver excellence.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c41e2a]/15 ring-1 ring-[#c41e2a]/30">
                    <Phone className="h-4 w-4 text-[#c41e2a]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/45">Michelle Casanova</p>
                    <p className="font-semibold text-white">(661) 208-7228</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c41e2a]/15 ring-1 ring-[#c41e2a]/30">
                    <Mail className="h-4 w-4 text-[#c41e2a]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/45">Email Us</p>
                    <a href={INFO_EMAIL} className="font-semibold text-white hover:text-white/80 transition-colors">
                      michelle@platinumonelogistics.net
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: quote card */}
            <div className="rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-md">
              <h3 className="font-display text-2xl font-bold text-white">
                Request a Quote
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Tell us about your project and we&apos;ll provide a custom quote within 24 hours.
              </p>
              <a
                href={QUOTE_EMAIL}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-[#c41e2a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d72633]"
              >
                <ArrowRight className="h-4 w-4" />
                Get Your Free Quote
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}