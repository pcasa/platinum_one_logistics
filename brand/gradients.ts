// All gradient/overlay values used across the site.
// Import from here rather than writing inline values.

export const gradients = {
  // Standard full-bleed section overlay (hero, done-right, contact, about approach/story)
  // Left = full black, right = 75% black — lets background image show on right
  sectionOverlay:
    'linear-gradient(95deg, rgba(0,0,0,1.0) 0%, rgba(0,0,0,0.75) 100%)',

  // Slightly darker right side — used on contact section
  sectionOverlayDark:
    'linear-gradient(95deg, rgba(0,0,0,1.0) 0%, rgba(0,0,0,0.82) 100%)',

  // Near-opaque overlay — about hero (image barely visible)
  nearOpaque:
    'rgba(0,0,0,0.95)',

  // Rate table header gradient
  tableHeader:
    'linear-gradient(to right, #3A0F12, #1A0608)',

  // Legacy gradients (kept for reference)
  panel:
    'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
  redGlow:
    'linear-gradient(90deg, #C41E2A 0%, #E02828 55%, #FF4D57 100%)',
  metallic:
    'linear-gradient(90deg, #8E8E8E 0%, #D7D7D7 50%, #8E8E8E 100%)',
} as const;

// Tailwind-compatible overlay class strings
// Use these when you need a Tailwind class instead of an inline style
export const overlayClasses = {
  section:     'bg-[linear-gradient(95deg,rgba(0,0,0,1.0)_0%,rgba(0,0,0,0.75)_100%)]',
  sectionDark: 'bg-[linear-gradient(95deg,rgba(0,0,0,1.0)_0%,rgba(0,0,0,0.82)_100%)]',
  nearOpaque:  'bg-black/95',
  tableHeader: 'bg-gradient-to-r from-[#3A0F12] to-[#1A0608]',
} as const;
