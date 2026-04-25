import Image from "next/image";
import Link from 'next/link';
import { Phone } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Who We Serve' },
  { href: '/about', label: 'About Us' },
  { href: '/rates', label: 'Rates' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo/platinum-one-logo.png"
            alt="Platinum One Logistics"
            width={140}
            height={32}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 text-sm lg:flex">
          {links.map((link) => (
            link.href === '/' ? (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-3 py-1.5 font-medium text-white ring-1 ring-brandPrimary transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-3 py-1.5 text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+16612087228"
            className="hidden items-center gap-2 text-sm text-white/70 transition-colors hover:text-white lg:flex"
          >
            <Phone className="h-4 w-4 text-brandPrimary" />
            (661) 208-7228
          </a>
          <a
            href="mailto:michelle@platinumonelogistics.net?subject=Quote%20request"
            className="rounded px-4 py-2 text-sm font-semibold text-white bg-brandPrimary transition-colors hover:bg-brandAccent"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
