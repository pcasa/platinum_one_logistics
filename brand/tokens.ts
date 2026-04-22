import { baseColors } from './colors';

export const tokens = {
  background: baseColors.nearBlack,
  backgroundAlt: baseColors.black,
  surface: baseColors.graphite,
  surfaceElevated: baseColors.darkGray,
  textPrimary: baseColors.white,
  textSecondary: baseColors.softGray,
  textMuted: baseColors.mutedGray,
  brandPrimary: baseColors.redPrimary,
  brandAccent: baseColors.redAccent,
  brandGlow: baseColors.redGlow,
  borderSubtle: 'rgba(255,255,255,0.08)',
  borderStrong: 'rgba(255,255,255,0.16)',
  overlayDark: 'rgba(0,0,0,0.56)'
} as const;
