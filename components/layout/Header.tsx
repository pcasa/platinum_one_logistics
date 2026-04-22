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
          <div className="text-lg font-semibold tracking-[0.24em] text-white">PLATINUM ONE</div>
          <div className="hidden h-6 w-px bg-white/15 md:block" />
          <div className="hidden text-xs uppercase tracking-[0.26em] text-textMuted md:block">
            Logistics
          </div>
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
