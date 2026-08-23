'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';

const quickLinks = [
  { href: '/services',   label: 'Services'      },
  { href: '/about',      label: 'About Us'      },
  { href: '/rates',      label: 'Rates'         },
  { href: '/gallery',    label: 'Gallery'       },
  { href: '/contact',    label: 'Contact'       },
];

const onePageQuickLinks = [
  { href: '#home',         label: 'Home'          },
  { href: '#services',     label: 'Services'      },
  { href: '#who-we-serve', label: 'Who We Serve'  },
  { href: '#about',        label: 'About Us'      },
  { href: '#contact',      label: 'Contact'       },
];

const serviceLinks = [
  'Delivery Services',
  'Receiving & Inspection',
  'Storage & Inventory',
  'White-Glove Installation',
  'Relocation Services',
  'Hospitality & Model Homes',
];

export function Footer() {
  const pathname = usePathname();
  const isOnePage = pathname === '/onepage';
  const nav = isOnePage ? onePageQuickLinks : quickLinks;

  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Col 1: Logo + tagline */}
          <div>
            <Image
              src="/logo/platinum-one-logo.png"
              alt="Platinum One Logistics"
              width={160}
              height={36}
            />
            <p className="mt-6 text-sm leading-7 text-white/45">
              Formerly Design Logistics — Now Platinum One Logistics. Built stronger.
              Structured better. Focused on service excellence.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul aria-label="Quick links" className="mt-5 space-y-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-semibold text-white">Services</h4>
            <ul aria-label="Services navigation" className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href={isOnePage ? '#services' : '/services'}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul aria-label="Contact information" className="mt-5 space-y-4">
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="h-4 w-4 shrink-0 text-brandPrimary" aria-hidden="true" />
                <a href="tel:+17703688900" className="hover:text-white transition-colors">
                  (770) 368-8900
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="h-4 w-4 shrink-0 text-brandPrimary" aria-hidden="true" />
                <a href="mailto:michelle@platinumonelogistics.net?subject=Info%20request" className="hover:text-white transition-colors">
                  michelle@platinumonelogistics.net
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="h-4 w-4 shrink-0 text-brandPrimary" aria-hidden="true" />
                <span>Georgia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider + copyright */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/35">
          © 2026 Platinum One Logistics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
