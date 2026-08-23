"use client";

import Image from "next/image";
import { useState } from "react";
import { HeroFadeUp, FadeUp } from "@/components/ui/Animate";

const categories = ["All", "Installation", "Model Homes", "Warehouse", "Hospitality", "Relocation", "Team", "Delivery"];

const galleryItems = [
  { src: "/images/gallery/installation-1.jpeg",  alt: "Interior design installation",  category: "Installation" },
  { src: "/images/gallery/model-homes-1.jpeg",   alt: "Model home",                    category: "Model Homes"  },
  { src: "/images/gallery/warehouse.jpeg",        alt: "Warehouse operations",          category: "Warehouse"    },
  { src: "/images/gallery/hospitality.jpeg",      alt: "Hospitality project",           category: "Hospitality"  },
  { src: "/images/gallery/installation-2.jpeg",   alt: "White glove delivery",          category: "Installation" },
  { src: "/images/gallery/relocation.jpeg",       alt: "Relocation project",            category: "Relocation"   },
  { src: "/images/gallery/model-homes-2.jpeg",    alt: "Luxury home",                   category: "Model Homes"  },
  { src: "/images/gallery/team.jpeg",             alt: "Team at work",                  category: "Team"         },
  { src: "/images/gallery/delivery.jpeg",         alt: "Delivery fleet",                category: "Delivery"     },
  { src: "/images/gallery/truck.jpg",             alt: "Platinum One Logistics truck",   category: "Delivery"     },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === active);

  return (
    <main id="main-content" className="bg-background text-white">

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/hero.jpeg"
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
              Gallery
            </h1>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-brandPrimary" />
            <p className="mt-5 text-base text-white/60">
              A look at our work and the spaces we serve.
            </p>
          </HeroFadeUp>
        </div>
      </section>

      {/* Filter + Grid */}
      <section aria-label="Gallery filter and images" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Filter pills */}
          <FadeUp>
            <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap justify-center gap-2 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  aria-pressed={active === cat}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brandPrimary ${
                    active === cat
                      ? "bg-brandPrimary text-white"
                      : "bg-card border border-white/[0.06] text-white/70 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Live region announces filter results to screen readers */}
            <p role="status" aria-live="polite" className="sr-only">
              {filtered.length} {filtered.length === 1 ? 'photo' : 'photos'} shown
            </p>
          </FadeUp>

          {/* Image grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {filtered.map((item) => (
              <div
                key={item.src}
                className="group overflow-hidden rounded-2xl border border-white/[0.06]"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-card px-4 py-3">
                  <span className="text-sm text-textMuted">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
