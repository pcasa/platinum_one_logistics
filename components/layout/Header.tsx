'use client';
import Image from "next/image";
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Who We Serve' },
  { href: '/about', label: 'About Us' },
  { href: '/rates', label: 'Rates' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const onePageLinks = [
  { href: '#home',          label: 'Home' },
  { href: '#services',      label: 'Services' },
  { href: '#who-we-serve',  label: 'Who We Serve' },
  { href: '#about',         label: 'About Us' },
  { href: '#contact',       label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const isOnePage = pathname === '/onepage';
  const nav = isOnePage ? onePageLinks : links;

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const prevOpenRef = useRef(false);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Focus management: move into drawer on open, return to hamburger on close
  useEffect(() => {
    if (open) {
      prevOpenRef.current = true;
      const firstFocusable = drawerRef.current?.querySelector<HTMLElement>('a[href], button');
      firstFocusable?.focus();
    } else if (prevOpenRef.current) {
      prevOpenRef.current = false;
      hamburgerRef.current?.focus();
    }
  }, [open]);

  // Escape key closes the drawer
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  // Focus trap: keep Tab within the drawer while it is open
  const handleDrawerKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !drawerRef.current) return;
    const focusable = Array.from(
      drawerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };

  // IntersectionObserver — highlight the section currently in view
  useEffect(() => {
    if (!isOnePage) return;
    const ids = onePageLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(`#${id}`); },
        { rootMargin: '-80px 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [isOnePage]);

  const isActive = (href: string) => {
    if (isOnePage) return activeSection === href;
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  };

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

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 text-sm lg:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={
                isActive(link.href)
                  ? "rounded px-3 py-1.5 font-medium text-white ring-1 ring-brandPrimary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brandPrimary"
                  : "rounded px-3 py-1.5 text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brandPrimary"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+17703688900"
            className="hidden items-center gap-2 text-sm text-white/70 transition-colors hover:text-white lg:flex"
          >
            <Phone className="h-4 w-4 text-brandPrimary" aria-hidden="true" />
            (770) 368-8900
          </a>
          <a
            href={isOnePage ? '#contact' : 'mailto:michelle@platinumonelogistics.net?subject=Quote%20request'}
            className="rounded px-4 py-2 text-sm font-semibold text-white bg-brandPrimary transition-colors hover:bg-brandHover"
          >
            Request a Quote
          </a>

          {/* Hamburger — mobile only */}
          <button
            ref={hamburgerRef}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 items-center justify-center rounded text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brandPrimary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onKeyDown={handleDrawerKeyDown}
          className="border-t border-white/10 bg-black/95 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={
                  isActive(link.href)
                    ? "border-l-2 border-brandPrimary py-3 pl-4 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brandPrimary"
                    : "border-l-2 border-transparent py-3 pl-4 text-sm text-white/60 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brandPrimary"
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+17703688900"
              className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-white/60"
            >
              <Phone className="h-4 w-4 text-brandPrimary" aria-hidden="true" />
              (770) 368-8900
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
