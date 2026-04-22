import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-red-glow-gradient text-white border-transparent shadow-glow hover:opacity-90'
      : 'border border-borderSubtle bg-white/5 text-textPrimary hover:border-brandPrimary hover:bg-white/10';

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${styles}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
