# Platinum One Logistics — CLAUDE.md

## Project Overview
Premium logistics & white-glove moving website for Platinum One Logistics.
Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **pnpm**.

## Tech Stack
- Framework: Next.js 14 App Router
- Language: TypeScript
- Styling: Tailwind CSS (custom design tokens in `tailwind.config.ts`)
- Fonts: Playfair Display (`--font-heading`) + Inter (`--font-body`)
- Icons: lucide-react
- Package manager: pnpm

## Brand Identity
- Primary red: `#c41e2a` (CSS var: `--brand-primary`, Tailwind: `brandPrimary`)
- Red glow: `#ff4d57` (CSS var: `--brand-glow`, Tailwind: `brandGlow`)
- Background: `#0A0A0A` — almost pure black
- Surface: `#151515`
- Text primary: white; text secondary: `#C8C8C8`; text muted: `#8D8D8D`
- Border subtle: `rgba(255,255,255,0.08)`

## Design Language
- Dark, premium, minimal — black background with red accents
- Rounded corners: `rounded-[24px]` to `rounded-[30px]` on cards
- Glassmorphism: `backdrop-blur-md`, `bg-white/5`, `border-white/10`
- Section dividers: 2px red line (`h-[2px] w-20 bg-brandPrimary`)
- Eyebrow labels: uppercase, tight letter-spacing, `text-brandPrimary`

## Directory Structure
```
app/
  layout.tsx          — Root layout (Header + Footer wrapping)
  page.tsx            — Homepage (most complete, some TODOs remain)
  globals.css         — CSS custom props + Tailwind utility classes
  about/page.tsx      — Placeholder only
  contact/page.tsx    — Placeholder only
  services/page.tsx   — Placeholder only
  rates/page.tsx      — Placeholder only (check if exists)
  gallery/page.tsx    — Placeholder only (check if exists)
  industries/page.tsx — Placeholder only (check if exists)

components/
  layout/
    Header.tsx        — Sticky nav with logo, links, "Request Quote" CTA
    Footer.tsx        — Simple footer with nav links
  sections/           — Reusable section components (Hero, CTASection, etc.)
  ui/
    Button.tsx
    Card.tsx
    Section.tsx

brand/
  colors.ts / gradients.ts / motion.ts / tokens.ts

public/
  logo/platinum-one-logo.png       — Official logo (confirmed exists)
  images/
    hero-background-image.jpeg
    center-section-background-image.jpeg
    bottom-section-background-image.jpeg
    image-1.jpeg  (Interior Designers audience card)
    image-2.jpeg  (Hospitality audience card)
    image-3.jpeg  (Model Homes audience card)
    image-4.jpeg  (Relocation audience card)
```

## Known Issues / TODO

### Homepage (`app/page.tsx`)
- `HERO_IMAGE`, `DONE_RIGHT_IMAGE`, `CONTACT_BG_IMAGE` constants are still `"TODO_..."` placeholders
  - Fix: `HERO_IMAGE = "/images/hero-background-image.jpeg"`
  - Fix: `DONE_RIGHT_IMAGE = "/images/center-section-background-image.jpeg"`
  - Fix: `CONTACT_BG_IMAGE = "/images/bottom-section-background-image.jpeg"`
- Contact section at bottom of page is structurally broken (missing outer container divs)
- Mobile nav (hamburger menu) is missing in Header

### All Inner Pages
Every sub-page (`about`, `contact`, `services`, `rates`, `gallery`, `industries`) is placeholder-only and needs real content built out.

## Content Reference (from inspiration materials)
**Core Values**: Integrity, Honesty & Transparency, Accountability, Respect, Collaboration
**Key services**: Delivery, Receiving & Inspection, Storage & Inventory, White-Glove Installation, Relocation, Hospitality & Model Homes
**Contact**: Michelle (name/phone/email — ask user for actuals)
**Warehouse rates**: Receiving $1.05/cu ft, Inspection $1.05/cu ft, Staging $1.05/cu ft, Storage $1.25/cu ft/mo
**Rate sheet URL**: https://media.base44.com/files/public/69e69f79d0c52d4408902941/34e04b9b4_Delivery_Rate_Sheet_Updated.docx

## Development Commands
```bash
pnpm dev      # Start dev server (http://localhost:3000)
pnpm build    # Production build
pnpm lint     # ESLint
```

## Style Conventions
- Use existing CSS utility classes from `globals.css` (e.g. `.pl-card`, `.pl-eyebrow`, `.pl-section-heading`)
- Use Tailwind's custom color names: `brandPrimary`, `brandGlow`, `textMuted`, `textSecondary`, `borderSubtle`
- Always use `next/image` for images (not `<img>`)
- Always use `next/link` for internal links (not `<a>`)
- Sections use `mx-auto max-w-7xl px-6 lg:px-8` for consistent container width

## Priorities (in order)
1. ✅ Fix homepage image TODOs and broken contact section
2. ✅ Fix tailwind.config.ts font variables (Playfair Display wasn't wiring through)
3. ✅ Pull down brand assets from base44 and organize in project
4. Typography/spacing pass — align with base44 design (custom-2.png is the reference)
5. Add mobile hamburger nav to Header
6. Build out About page with company story + leadership + core values
7. Build out Services page (detailed service cards)
8. Build out Contact page with real info + inquiry form structure
9. Build out Rates page with full rate tables
10. Build out Industries / Who We Serve page
11. Build Gallery page (if photos are available)

---

## Session Log

### Session 1 — 2026-04-25
**What was done:**
- Created this CLAUDE.md with full project context
- Searched base44 sample HTML for image assets; found 4 URLs, downloaded all
  - `public/logo/platinum-one-icon.png` — wing/bird brand icon (dark red bg)
  - `public/logo/platinum-one-logo.png` — already matched (no change needed)
  - `public/images/downloaded/custom-1.png` — slide deck / presentation reference
  - `public/images/downloaded/custom-2.png` — **KEY REFERENCE**: full base44 site screenshot (use this to match design)
- Fixed `tailwind.config.ts`: `font-display` and `font-sans` now use CSS variables so Playfair Display actually loads
- Fixed `app/page.tsx`:
  - Replaced 3 TODO image constants with local paths (`/images/hero-background-image.jpeg`, `center-section-background-image.jpeg`, `bottom-section-background-image.jpeg`)
  - Removed unused `WHO_WE_SERVE_IMAGES` constant
  - Rebuilt broken contact section — was missing `relative` container so content was invisible behind absolute backgrounds; now has heading, layout grid, contact items, and CTA card

**Homepage sections completed:**
- ✅ Hero — full background, logo, gold italic heading, dark gradient mask `linear-gradient(95deg, black 0%, black/75 100%)`
- ✅ Services grid — centered heading + red underline, dark cards with maroon icon square, hover: red border + brighter icon
- ✅ Done Right — full background image with same mask, new heading/checklist, framed right panel + red L-corner accent
  - ⚠️ Right panel image is a placeholder (`center-section-background-image.jpeg`) — replace with actual white-glove installation photo when available

**Homepage sections completed:**
- ✅ Hero
- ✅ Rebranding banner strip ("Formerly Design Logistics — Now Platinum One Logistics")
- ✅ Services grid ("Our Full-Service Logistics Solutions")
- ✅ Done Right (full background, new heading/checklist, framed panel + red L-corner)
- ✅ Who We Serve (centered heading, 4 image cards)
- ✅ White-Glove Promise (3-column icon layout)
- ✅ Rates ("Transparent Rates. No Surprises." + two rate tables with "Starting at")
  - Rate sheet URL: `RATE_SHEET_URL` constant at top of page.tsx — update when permanent link is available

**Homepage — COMPLETE.** All sections matched to reference design.

**Contact form — ON HOLD**
- All quote/email buttons use mailto: links which require a configured mail client
- Plan: use Next.js Server Action + Nodemailer + existing SMTP credentials (no third-party service)
- Need from IT: SMTP host, port, username, password for platinumonelogistics.net email hosting
- Once credentials are available, build contact form on /contact page and wire up server action

**What's next (continue from here):**
- Resume contact form once IT provides SMTP credentials
- Mobile nav (hamburger) missing from Header.tsx
- All inner pages are still placeholder shells (About, Services, Contact, Rates, Gallery, Industries)

**Key files to know:**
- Design reference: `public/images/downloaded/custom-2.png`
- Homepage: `app/page.tsx`
- Header: `components/layout/Header.tsx`
- Styles: `app/globals.css` + `tailwind.config.ts`
- Images: all in `public/images/` — hero, center-section, bottom-section backgrounds + image-1 through image-4
