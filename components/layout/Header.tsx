import Image from "next/image";
import Link from 'next/link';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Who We Serve' },
  { href: '/rates', label: 'Rates' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-borderSubtle bg-background/80 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/platinum-one-logo.png"
            alt="Platinum One Logistics"
            width={180}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-textSecondary md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-brandPrimary/40 bg-brandPrimary/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brandPrimary/20"
        >
          Request Quote
        </Link>
      </div>
    </header>
  );
}
