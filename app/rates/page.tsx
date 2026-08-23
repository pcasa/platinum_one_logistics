import { Fragment } from 'react';
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroFadeUp, FadeUp } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: 'Rates & Pricing',
  description: 'Transparent logistics pricing with no hidden fees. Delivery starting at $130 (Zone 1). Warehouse services starting at $1.05/cu ft. Storage starting at $1.25/cu ft per month. Contact us for a custom quote.',
  openGraph: { url: 'https://platinumonelogistics.net/rates' },
};

const deliveryRows = [
  { crew: "2 Man + Truck", z1: "$130 / $65",  z2: "$205 / $65",  z3: "$280 / $65"  },
  { crew: "3 Man Crew",    z1: "+$90 / $65",  z2: "+$50 / $65",  z3: "+$50 / $65"  },
  { crew: "4 Man Crew",    z1: "+$50 / $45",  z2: "+$130 / $45", z3: "+$170 / $65" },
];

const deliveryExtras = [
  { service: "Additional Truck", rate: "Starting at $40 / hr", note: "" },
  { service: "Installations",    rate: "By Quote",             note: "For projects exceeding 4 hours" },
];

const warehouseRows = [
  {
    service: "Receiving",
    rate: "Starting at $1.05 per cubic foot",
    note: "Receiving is billed based on the total cubic footage of each item.",
  },
  {
    service: "Inspection",
    rate: "Starting at $1.05 per cubic foot",
    note: "Inspection services are performed upon request to ensure items arrive in good condition.",
  },
  {
    service: "Staging / Preparation",
    rate: "Starting at $1.05 per cubic foot",
    note: "Staging includes preparing items for delivery or installation, including consolidation and readiness.",
  },
  {
    service: "Storage",
    rate: "Starting at $1.25 per cubic foot / mo",
    note: "We provide a 15-day grace period for each item upon arrival to allow time for scheduling and coordination. After this period, storage is billed monthly.",
  },
];

export default function RatesPage() {
  return (
    <main id="main-content" className="bg-background text-white">

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/warehouse.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <HeroFadeUp className="text-center">
            <h1 className="font-display text-5xl font-bold text-white sm:text-6xl">
              Our Rates
            </h1>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-brandPrimary" />
            <p className="mt-5 text-base text-white/60">
              Transparent pricing. No hidden fees. No surprises.
            </p>
          </HeroFadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-16 sm:px-6 md:py-24 lg:px-8">

        {/* Delivery & Service Rate Sheet */}
        <FadeUp>
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-card">

            {/* Card header */}
            <div className="border-b border-white/[0.06] bg-brandPrimary/10 px-6 py-5">
              <h2 id="delivery-table-heading" className="font-display text-xl font-bold text-white">
                Delivery &amp; Service Rate Sheet
              </h2>
              <p className="mt-1 text-xs text-white/50">Format: Minimum / Per Additional Hour</p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table aria-labelledby="delivery-table-heading" className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.03]">
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white/40">Crew</th>
                    <th scope="col" className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white/40">Zone 1</th>
                    <th scope="col" className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white/40">Zone 2</th>
                    <th scope="col" className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white/40">Zone 3</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {deliveryRows.map((row) => (
                    <tr key={row.crew} className="transition-colors hover:bg-white/[0.02]">
                      <th scope="row" className="px-6 py-4 text-left font-normal text-white/60">{row.crew}</th>
                      <td className="px-4 py-4 text-center font-semibold text-white">{row.z1}</td>
                      <td className="px-4 py-4 text-center font-semibold text-white">{row.z2}</td>
                      <td className="px-4 py-4 text-center font-semibold text-white">{row.z3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Additional rows below table */}
            <div className="divide-y divide-white/[0.04] border-t border-white/[0.06]">
              {deliveryExtras.map((row) => (
                <div key={row.service} className="px-6 py-4 transition-colors hover:bg-white/[0.02]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm text-white/60">{row.service}</span>
                    <span className="shrink-0 text-right text-sm font-semibold text-white">{row.rate}</span>
                  </div>
                  {row.note && (
                    <p className="mt-1 text-xs text-white/50">{row.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Warehouse Services Pricing */}
        <FadeUp>
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-card">

            {/* Card header */}
            <div className="border-b border-white/[0.06] bg-brandPrimary/10 px-6 py-5">
              <h2 id="warehouse-table-heading" className="font-display text-xl font-bold text-white">
                Warehouse Services Pricing
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table aria-labelledby="warehouse-table-heading" className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.03]">
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white/40">Service</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-white/40">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {warehouseRows.map((row) => (
                    <Fragment key={row.service}>
                      <tr className="transition-colors hover:bg-white/[0.02]">
                        <th scope="row" className="px-6 pt-4 pb-1 text-left font-normal text-white/60">{row.service}</th>
                        <td className="px-6 pt-4 pb-1 text-right font-semibold text-white">{row.rate}</td>
                      </tr>
                      <tr className="border-b border-white/[0.04] transition-colors hover:bg-white/[0.02]">
                        <td colSpan={2} className="px-6 pb-4 text-xs text-white/50">{row.note}</td>
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeUp>

        {/* Disclaimer + CTA */}
        <FadeUp>
          <div className="rounded-2xl border border-white/[0.06] bg-card p-8 text-center">
            <p className="text-sm text-white/55">
              Rates may vary based on project scope, location, and complexity. Contact us for a custom quote.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brandPrimary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brandHover"
            >
              Request Custom Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeUp>

      </div>
    </main>
  );
}
