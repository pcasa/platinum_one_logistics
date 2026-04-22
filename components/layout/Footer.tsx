import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-borderSubtle bg-black/40">
      <div className="container-shell flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold tracking-[0.24em] text-white">PLATINUM ONE LOGISTICS</div>
          <p className="mt-2 max-w-xl text-sm text-textSecondary">
            Premium logistics and moving services tailored to high-end designers, manufacturers,
            hospitality teams, and white-glove clients.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-textSecondary">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Who We Serve</Link>
          <Link href="/rates">Rates</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
