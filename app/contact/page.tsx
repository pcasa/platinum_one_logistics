import type { Metadata } from 'next';
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Request a quote from Platinum One Logistics. Call (770) 368-8900 or email michelle@platinumonelogistics.net. Serving Georgia — Mon–Fri 7am–5pm, after-hours available.',
  openGraph: { url: 'https://platinumonelogistics.net/contact' },
};
import { HeroFadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";

const contactDetails = [
  { icon: Phone, label: "Phone",    value: "(770) 368-8900",                   href: "tel:7703688900" },
  { icon: Mail,  label: "Email",    value: "michelle@platinumonelogistics.net", href: "mailto:michelle@platinumonelogistics.net" },
  { icon: MapPin,label: "Location", value: "Georgia",                         href: null },
  { icon: Clock, label: "Hours",    value: "Mon – Fri: 7am – 5pm",            href: null },
];

const services = [
  "Delivery Services",
  "Receiving & Inspection",
  "Storage & Inventory",
  "White-Glove Installation",
  "Relocation Services",
  "Hospitality & Model Homes",
  "Other",
];

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-background text-white">

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact/hero.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <HeroFadeUp className="text-center">
            <h1 className="font-display text-5xl font-bold text-white sm:text-6xl">
              Contact Us
            </h1>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-brandPrimary" />
            <p className="mt-5 text-base text-white/60">
              Ready to experience the Platinum One difference? Get in touch today.
            </p>
          </HeroFadeUp>
        </div>
      </section>

      {/* Content */}
      <section aria-label="Contact information and quote request form" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left — contact info */}
            <SlideLeft>
              <h2 className="font-display text-3xl font-bold text-white">Get In Touch</h2>
              <div className="mt-3 h-[3px] w-14 bg-brandPrimary" />

              <div className="mt-8 space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brandPrimary/10">
                      <Icon className="h-5 w-5 text-brandPrimary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40">{label}</p>
                      {href ? (
                        <a href={href} className="mt-0.5 text-sm font-medium text-white hover:text-brandPrimary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-white">{value}</p>
                      )}
                      {label === "Hours" && (
                        <p className="text-xs text-white/40">After-hours available by request</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <blockquote className="mt-10 rounded-xl border border-white/[0.06] bg-card p-6">
                <p className="text-sm italic leading-6 text-white/65">
                  &ldquo;We respond to all inquiries within 24 hours. For urgent requests, please call us directly.&rdquo;
                </p>
                <footer className="mt-3 text-xs font-semibold text-brandPrimary">
                  — Michelle Casanova, Operations
                </footer>
              </blockquote>
            </SlideLeft>

            {/* Right — form */}
            <SlideRight>
              <div className="rounded-2xl border border-white/[0.06] bg-card p-8">
                <h2 className="font-display text-2xl font-bold text-white">Request a Quote</h2>
                <div className="mt-3 h-[3px] w-14 bg-brandPrimary" />

                <form
                  action={`mailto:michelle@platinumonelogistics.net`}
                  method="get"
                  encType="text/plain"
                  className="mt-7 space-y-5"
                >
                  {/* Name + Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">
                        Full Name <span className="text-brandPrimary" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        aria-required="true"
                        placeholder="John Smith"
                        className="w-full rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">
                        Email <span className="text-brandPrimary" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        aria-required="true"
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-phone" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">Phone</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="(555) 123-4567"
                        className="w-full rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">Company</label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        placeholder="Company name"
                        className="w-full rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="contact-service" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">Service Needed</label>
                    <select
                      id="contact-service"
                      name="service"
                      className="w-full rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white/70 outline-none focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40 transition-colors"
                    >
                      <option value="" className="bg-card">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-card">{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project details */}
                  <div>
                    <label htmlFor="contact-details" className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">
                      Project Details <span className="text-brandPrimary" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-details"
                      name="details"
                      required
                      aria-required="true"
                      rows={5}
                      placeholder="Tell us about your project, timeline, and any special requirements..."
                      className="w-full resize-none rounded-lg border border-white/[0.08] bg-background px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-brandPrimary/60 focus:ring-1 focus:ring-brandPrimary/40 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-brandPrimary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brandHover"
                  >
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
