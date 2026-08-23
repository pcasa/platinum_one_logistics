import { baseColors } from './colors';

// Semantic design tokens — maps intent to value.
// NOTE: Tailwind config uses hardcoded hex values (not CSS vars) for JIT reliability.
// These tokens serve as the canonical reference — keep in sync with tailwind.config.ts.
export const tokens = {
  // Backgrounds
  background:       baseColors.nearBlack,    // #0A0A0A — page default
  backgroundAlt:    baseColors.black,        // #000000
  backgroundAlt2:   baseColors.sectionAlt,   // #080808 — alternating sections
  footer:           baseColors.footer,       // #111111
  banner:           baseColors.banner,       // #1C1C1C — rebranding strip

  // Surfaces / Cards
  surface:          baseColors.graphite,     // #151515
  surfaceElevated:  baseColors.darkGray,     // #202020
  card:             baseColors.card,         // #1A1A1A — service/value cards
  cardTable:        baseColors.cardTable,    // #0E0E0E — rate table cards

  // Icon containers
  iconBg:           baseColors.iconBg,       // #3A0F12 — default
  iconBgHover:      baseColors.iconBgHover,  // #5A1520 — on card hover

  // Text
  textPrimary:      baseColors.white,
  textSecondary:    baseColors.softGray,
  textMuted:        baseColors.mutedGray,

  // Brand
  brandPrimary:     baseColors.redPrimary,   // #C41E2A — buttons, icons, underlines, active nav
  brandHover:       baseColors.redHover,     // #D72633 — red hover
  brandAccent:      baseColors.redAccent,    // #E02828
  brandGlow:        baseColors.redGlow,      // #FF4D57
  brandGold:        baseColors.gold,         // #C9A843 — italic taglines ONLY

  // Borders
  borderSubtle:     'rgba(255,255,255,0.06)',
  borderMedium:     'rgba(255,255,255,0.10)',
  borderStrong:     'rgba(255,255,255,0.16)',
  borderBrand:      'rgba(196,30,42,0.40)',  // red border on card hover
} as const;
