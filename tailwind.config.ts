import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './brand/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        backgroundAlt: 'var(--background-alt)',
        surface: 'var(--surface)',
        surfaceElevated: 'var(--surface-elevated)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textMuted: 'var(--text-muted)',
        brandPrimary: 'var(--brand-primary)',
        brandAccent: 'var(--brand-accent)',
        brandGlow: 'var(--brand-glow)',
        borderSubtle: 'var(--border-subtle)'
      },
      boxShadow: {
        glow: '0 0 50px rgba(196, 30, 42, 0.22)'
      },
      backgroundImage: {
        'hero-gradient': 'var(--gradient-hero)',
        'panel-gradient': 'var(--gradient-panel)',
        'red-glow-gradient': 'var(--gradient-red-glow)',
        'metallic-gradient': 'var(--gradient-metallic)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
