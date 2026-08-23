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
        // Backgrounds
        background:      '#0A0A0A',
        backgroundAlt:   '#000000',
        backgroundAlt2:  '#080808',
        footer:          '#111111',
        banner:          '#1C1C1C',

        // Surfaces / Cards
        surface:         '#151515',
        surfaceElevated: '#202020',
        card:            '#1A1A1A',
        cardTable:       '#0E0E0E',

        // Icon containers
        iconBg:          '#3A0F12',
        iconBgHover:     '#5A1520',

        // Text
        textPrimary:     '#FFFFFF',
        textSecondary:   '#C8C8C8',
        textMuted:       '#8D8D8D',

        // Brand — using withOpacity format so /10, /50 etc. work
        brandPrimary:    '#C41E2A',
        brandHover:      '#D72633',
        brandAccent:     '#E02828',
        brandGlow:       '#FF4D57',
        brandGold:       '#C9A843',

        // Borders
        borderSubtle:    'rgba(255,255,255,0.06)',
        borderMedium:    'rgba(255,255,255,0.10)',
        borderStrong:    'rgba(255,255,255,0.16)',
        borderBrand:     'rgba(196,30,42,0.40)',
      },
      backgroundImage: {
        'section-overlay':      'linear-gradient(95deg, rgba(0,0,0,1.0) 0%, rgba(0,0,0,0.75) 100%)',
        'section-overlay-dark': 'linear-gradient(95deg, rgba(0,0,0,1.0) 0%, rgba(0,0,0,0.82) 100%)',
        'table-header':         'linear-gradient(to right, #3A0F12, #1A0608)',
        'panel-gradient':       'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        'red-glow-gradient':    'linear-gradient(90deg, #C41E2A 0%, #E02828 55%, #FF4D57 100%)',
        'metallic-gradient':    'linear-gradient(90deg, #8E8E8E 0%, #D7D7D7 50%, #8E8E8E 100%)',
      },
      boxShadow: {
        glow: '0 0 50px rgba(196, 30, 42, 0.22)',
      },
      fontFamily: {
        sans:    ['var(--font-body)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-heading)', 'Georgia', 'Times New Roman', 'serif'],
      },
    }
  },
  plugins: []
};

export default config;
