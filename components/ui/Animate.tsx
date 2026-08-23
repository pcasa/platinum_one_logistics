'use client';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';

const VIEWPORT = { once: true, amount: 0.15 };
const ease = { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] };

/** Returns motion props that respect prefers-reduced-motion */
function useMotionProps(
  full: { initial: object; animate?: object; whileInView?: object; transition?: object; variants?: object },
): object {
  const reduced = useReducedMotion();
  if (reduced) {
    // Skip all transforms/opacity changes — render children immediately visible
    return { initial: false };
  }
  return full;
}

export function FadeUp({
  children, delay = 0, y = 20, className, ...props
}: { children: React.ReactNode; delay?: number; y?: number; className?: string } & HTMLMotionProps<'div'>) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ ...ease, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideLeft({
  children, delay = 0, x = 20, className, ...props
}: { children: React.ReactNode; delay?: number; x?: number; className?: string } & HTMLMotionProps<'div'>) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, x: -x }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={{ ...ease, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideRight({
  children, delay = 0, x = 20, className, ...props
}: { children: React.ReactNode; delay?: number; x?: number; className?: string } & HTMLMotionProps<'div'>) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, x }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={{ ...ease, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children, delay = 0, className, ...props
}: { children: React.ReactNode; delay?: number; className?: string } & HTMLMotionProps<'div'>) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0 }}
      whileInView={reduced ? undefined : { opacity: 1 }}
      viewport={VIEWPORT}
      transition={{ ...ease, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerList({
  children, className,
}: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={VIEWPORT}
      variants={reduced ? undefined : {
        visible: { transition: { staggerChildren: 0.1 } },
        hidden:  {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children, className, y = 15,
}: { children: React.ReactNode; className?: string; y?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={reduced ? undefined : {
        hidden:  { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: ease },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroFadeUp({
  children, delay = 0, y = 30, className,
}: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 0.61, 0.36, 1], delay: reduced ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
