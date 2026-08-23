# Platinum One Logistics — CLAUDE.md

## Pending — Questions for Michelle / IT

## Presentation — COMPLETE ✅

File: `docs/presentation/Platinum_One_Logistics_Website_Overview.pptx`
Script: rebuild via Python pptx in this session — see conversation history for full script.

**Changes needed before final version:**
1. **White background** on all slides (was dark/black — white makes new site screenshots pop)
2. **Old site image (Slide 2)** — crop out affiliations section at bottom (ASID/CURE/SLC logos reference old brand partnerships not yet confirmed for new site)
3. **Side-by-side comparison slide** — move toward end; reframe as "Why we also built a one-page option" — explaining one-page vs multi-page tradeoffs (campaign use, ad spend, no nav friction, faster load) rather than just old-vs-new visual
4. **Mobile slide image didn't render** — `homepage_mobile_hero.png` (644×1400) wasn't visible in the slide. Fix: check z-order, or use `add_image` with explicit width instead of height, or embed differently
5. **Replace "WCAG 2.2" language** — not board-friendly. Use: "Optimized for visitors who are visually impaired or use screen readers" or similar plain English
6. **Slide order after changes** — Title → Old Site Problems → Two Sites → SEO/Reach → Mobile & Accessibility → Pricing → Progress → One-Page vs Multi-Page → Bottom Line

**Assets in** `docs/presentation/`:
- `old_site_homepage.png` — full old site scroll
- `new_site_homepage_desktop.png` — new site desktop
- `homepage_mobile_hero.png` — mobile hero crop (644×1400)
- `onepage_sections.png` — one-page Who We Serve + Core Values
- `rates_page.png` — rates page full scroll

---

- **Truck photo branding update** — `public/images/gallery/truck.jpg` is the old Design Logistics branded truck (sourced from the old site). It is live in the Gallery under "Delivery." Before launch, use ChatGPT image editing (or similar AI tool) to replace the "Design Logistics" lettering on the truck with "Platinum One Logistics." Swap the file in place when done — no code changes needed.
- **SMTP credentials** — Contact form (`app/contact/page.tsx`) currently uses a `mailto:` GET fallback. A real Server Action + Nodemailer form is designed and ready to wire up the moment IT provides: SMTP host, port, username, and password for the platinumonelogistics.net email hosting.
- **Years in business / company history** — The old Design Logistics site said "25+ years." The new site mentions no founding year or tenure. This is a major credibility signal for the premium market. Need to confirm the actual number with Michelle before adding it to the About page and hero stats.
- **ASID affiliation** — The old site displayed ASID (American Society of Interior Designers) membership. Not yet on the new site. Need logo/badge and confirmation it is current before adding.
- **SLC affiliation** — Shown on old site trucks. Meaning unknown — ask Michelle.
- **Service area states** — JSON-LD currently says `areaServed: Georgia`. Old site said "greater Southeast." Need Michelle to confirm exact states so we can update schema and page copy accurately.

---

## Accessibility — Status (audited 2026-04-26)

### Implemented (WCAG 2.2 Level AA)
- **Skip-to-content link** — first tab stop on every page, targets `#main-content`
- **Focus trap + Escape key on mobile nav** — `components/layout/Header.tsx` — `role="dialog"`, `aria-modal="true"`, focus moved into drawer on open, returned to hamburger on close, Tab cycles within drawer, Escape closes
- **`aria-label` on repeated CTAs** — all "Get a Quote" links on Services and Industries pages now have `aria-label="Get a quote for {service name}"` so screen reader link lists are meaningful
- **Phone number as link** — homepage contact section phone number is now `<a href="tel:+17703688900">`
- **Semantic tables on Rates page** — both the Delivery table and the Warehouse table are proper `<table>` elements with `scope="col"`, `scope="row"`, and `aria-labelledby` pointing to their section headings; warehouse was previously a div layout
- **Section landmarks** — all major `<section>` elements sitewide now have `aria-labelledby` or `aria-label` so screen reader landmark navigation is useful
- **`prefers-reduced-motion`** — `Animate.tsx` HeroFadeUp now sets `duration: 0` when reduced motion is preferred (CSS fallback was already in place via globals.css)
- **Gallery image `sizes` prop** — prevents Next.js from serving oversized images on mobile
- **Favicon** — `public/logo/favicon_multi.ico` wired into root metadata (`app/layout.tsx`) via `icons: { icon: '/logo/favicon_multi.ico' }`

### Intentionally Not Fixed (by design or out of scope)
- **Contrast (1.4.3)** — semi-transparent white text (`text-white/35`, `/40`, `/45`) on dark backgrounds is intentional brand design; not being changed
- **CSS background images (1.1.1)** — decorative and audience card background images applied via `style={{ backgroundImage }}` have no alt text; accepted as-is since text in those cards conveys the content
- **Focus obscured by sticky header (2.4.11)** — sticky header may partially cover focused elements near top of page; accepted as-is
- **Error identification on contact form (3.3.1 / 3.3.3)** — form relies on browser native validation; full error UX blocked on SMTP infrastructure
- **Contact form functionality (3.3.4)** — `mailto:` GET fallback is a placeholder until SMTP credentials are provided by IT

---

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

> **Important:** Changes to `tailwind.config.ts` or `globals.css` require a **full server restart** (`Ctrl+C` then `pnpm dev`) — hot reload is not enough for config changes.

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

**Inner pages status:**
- ✅ About Us (`app/about/page.tsx`)
- ✅ Who We Serve (`app/industries/page.tsx`)
- ⬜ Services (`app/services/page.tsx`) — placeholder
- ⬜ Rates (`app/rates/page.tsx`) — placeholder
- ⬜ Gallery (`app/gallery/page.tsx`) — placeholder
- ⬜ Contact (`app/contact/page.tsx`) — placeholder

**What's next (continue from here):**
- Resume contact form once IT provides SMTP credentials
- Mobile nav (hamburger) missing from Header.tsx
- Build remaining inner pages using the established bundle extraction workflow

---

---

## Page Build Workflow (Established on About Us page)

Use this process for every new inner page. It's faster than guessing at styles.

### Step 1 — Save reference screenshots
Put them in `docs/<pageName>/` alongside the HTML file. Screenshot every visible section before starting to code.

### Step 2 — Fetch the JS bundle from the base44 preview
The base44 app is a React SPA. All styles and content are in the JS bundle.
```bash
# Get the shell HTML to find the bundle filename
curl -s https://preview--splendid-platinum-one-logistics.base44.app/<page> -o /tmp/page.html

# Extract the JS bundle filename from the HTML
grep -o 'assets/index-[^"]*\.js' /tmp/page.html

# Download the bundle (reuse if already fetched — it's the same bundle for all pages)
curl -s https://preview--splendid-platinum-one-logistics.base44.app/assets/index-DXdE39ql.js -o /tmp/about_bundle.js
```

### Step 3 — Extract content strings and classNames
```python
import re
content = open('/tmp/about_bundle.js').read()

# Find a unique string from the page (section heading, body text, etc.)
idx = content.find("unique string from page")

# Get a large window around it
window = content[max(0, idx-3000):idx+3000]

# Extract classNames
classes = re.findall(r'className[=:]["\'\`]([^"\'\`]{5,300})["\'\`]', window)
for c in classes:
    print(c)
```

### Step 4 — Find icon names
Icons are lucide-react, minified to 2-3 char variable names. Find the mapping:
```python
icon_defs = re.findall(r'(\w{2,3})=Be\("([^"]+)"', content)
# Returns: [('Xo', 'ArrowRight'), ('Lw', 'Heart'), ...]
```
Then search the page content for which variable is used near each section.

### Step 5 — Find section padding
```python
containers = re.findall(
    r'className[=:]["\'\`]([^"\'\`]*(?:py-|pt-|pb-|max-w-|mx-auto)[^"\'\`]{0,150})["\'\`]',
    window
)
```
The base44 app consistently uses:
- **Hero sections**: `relative py-24 md:py-32 overflow-hidden` with `bg-background/95` overlay
- **Content sections**: `py-16 md:py-24` with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container
- **Card backgrounds**: `bg-card rounded-2xl border border-border p-8`

### Step 6 — Find images
```python
imgs = re.findall(r'https://images\.unsplash\.com/[^\s"\'\\<>]+', content)
# Download at w=1920&q=85 and save to public/images/<page>/
```

### Background Image Pattern
Use `Next/Image` with `fill` for hero/section background images — more reliable than CSS `background-image` in the App Router. Always pair with an overlay div after it.

```tsx
<section className="relative isolate overflow-hidden">
  <div className="absolute inset-0">
    <Image src="..." alt="" fill className="object-cover object-center" priority />
  </div>
  <div className="absolute inset-0 bg-black/90" />  {/* adjust opacity as needed */}
  <div className="relative ...">content</div>
</section>
```

Overlay opacity guide (from testing):
- `/90` — about hero (image barely visible, 10% through)
- `bg-section-overlay` — homepage hero, done-right, contact (gradient left→right)
- `bg-section-overlay-dark` — contact section (slightly darker right side)

### Brand Token System
All colors, gradients, and design values live in `brand/`. Import via `@/brand`.
CSS variables in `globals.css`, Tailwind names in `tailwind.config.ts`.

**Never write inline hex values in components.** Use the token names below.

| Token name | Value | Usage |
|---|---|---|
| `bg-background` | `#0A0A0A` | Page default background |
| `bg-backgroundAlt2` | `#080808` | Alternating section bg |
| `bg-footer` | `#111111` | Footer background |
| `bg-banner` | `#1C1C1C` | Rebranding banner strip |
| `bg-card` | `#1A1A1A` | Service/value cards |
| `bg-cardTable` | `#0E0E0E` | Rate table cards |
| `bg-iconBg` | `#3A0F12` | Icon container default |
| `bg-iconBgHover` | `#5A1520` | Icon container on hover |
| `bg-brandPrimary` | `#C41E2A` | Red buttons, filled elements |
| `bg-brandHover` | `#D72633` | Red hover state |
| `text-brandPrimary` | `#C41E2A` | Icons, underlines, titles |
| `text-brandGold` | `#C9A843` | Italic taglines ONLY |
| `text-brandGlow` | `#FF4D57` | Glowing accent text |
| `text-textMuted` | `#8D8D8D` | Body/description text |
| `bg-section-overlay` | gradient 0→75% black | Hero/Done-Right/Contact BG |
| `bg-section-overlay-dark` | gradient 0→82% black | Contact section |
| `bg-table-header` | maroon→dark gradient | Rate table headers |
| `border-brandPrimary` | `#C41E2A` | Red borders |
| `border-borderSubtle` | `rgba(255,255,255,0.06)` | Card borders |

**Opacity modifiers** (`/10`, `/40` etc.) work with named tokens: `bg-brandPrimary/10`, `border-brandPrimary/40`

### Style Token Mapping (base44 → our Tailwind)
| base44 token | Our equivalent |
|---|---|
| `text-primary` | `text-[#c41e2a]` |
| `text-accent` | `text-[#c9a843]` (gold — italic taglines only) |
| `text-foreground` | `text-white` |
| `text-muted-foreground` | `text-white/60` |
| `bg-primary/10` | `bg-[#c41e2a]/10` |
| `bg-card` | `bg-[#1a1a1a]` |
| `bg-background` | `bg-[#0a0a0a]` |
| `border-border` | `border-white/[0.06]` |
| `font-heading` | `font-display` (Playfair Display) |
| `font-body` | default (Inter) |
| `h-0.5 bg-primary` | `h-[3px] bg-[#c41e2a]` (section underline) |
| `py-16 md:py-24` | `py-16 md:py-24` ✓ same |
| `gap-12` (2-col grid) | `gap-12` ✓ same |

### Color Rules (learned from About Us)
- **Red `#c41e2a`**: section underlines, icons, value/item titles, CTA buttons, nav active state
- **Gold `#c9a843`**: italic taglines only ("We don't just move furniture...", "Experienced. Proven. Accountable.")
- **White**: all headings, body text
- **White/60**: muted body text, descriptions

---

## Image Replacements Needed

### About Us page (`app/about/page.tsx`)
- **Our Story section background** — currently using `/images/center-section-background-image.jpeg` as a placeholder
  - Original Unsplash photo `photo-1558618666-fcd25c85f82e` returned 404 (removed from Unsplash)
  - Replace with a real photo of the team, a job site, or a furnished space
  - The `style={{ backgroundImage: ... }}` is in the **"Our Story + Leadership"** section (~line 95 of about/page.tsx)

### Done Right section (`app/page.tsx`)
- **Right panel image** — currently using `/images/center-section-background-image.jpeg` as a placeholder
  - Original was a "white glove service" installation photo that was missing from base44
  - Replace with an actual white-glove installation/placement photo
  - The `<Image src=...>` is in the Done Right section right panel (~line 270 of page.tsx)

**Key files to know:**
- Design reference: `public/images/downloaded/custom-2.png`
- Homepage: `app/page.tsx`
- Header: `components/layout/Header.tsx`

---

## Accessibility & SEO — Strategic Notes

### Why Accessibility Matters for Marketing
Accessibility is not just a legal/compliance concern — it directly impacts marketing reach and SEO:

- **ADA compliance** reduces legal risk for a business serving premium commercial clients (interior designers, hospitality venues, developers). These clients expect professional-grade digital presence.
- **Google uses accessibility signals** in ranking — semantic HTML, heading hierarchy, alt text, and mobile usability all factor into search ranking.
- **Screen reader users = real customers.** Interior designers and hospitality decision-makers use every device type.
- **A11y = better UX for everyone.** Focus rings help keyboard power-users. Reduced motion respects users with vestibular disorders. High-contrast text is easier in bright light on mobile.

### What Was Implemented
- **Skip-to-content link** — first tab stop on every page, jumps to `#main-content`
- **Single `<main>` per page** — fixed nested `<main>` issue (was a WCAG failure); each page's `<main>` has `id="main-content"`
- **`prefers-reduced-motion`** — `Animate.tsx` respects OS setting via framer-motion's `useReducedMotion`; CSS layer also disables transitions globally via media query in `globals.css`
- **Focus-visible ring** — red `#c41e2a` outline appears only on keyboard focus (`:focus-visible`), invisible on mouse click
- **Header ARIA** — `aria-expanded`, `aria-controls`, `aria-current="page"`, `aria-label` on navs, mobile drawer has `role="dialog"`
- **Form label associations** — all `<label>` elements now use `htmlFor` paired with input `id`; required fields have `aria-required="true"` and `aria-hidden` on the decorative `*` asterisk
- **Gallery filter** — `aria-pressed` on category buttons; `role="status"` + `aria-live="polite"` announces result count to screen readers
- **Contrast fix** — `text-white/30` (fails WCAG AA) upgraded to `text-white/50` on rates page notes
- **Semantic landmarks** — `<header>`, `<nav>`, `<main>`, `<footer>` all present; nav elements have `aria-label` to distinguish primary from mobile

### Still To Do (Accessibility)
- **One-page form** needs the same `htmlFor`/`id` treatment as contact page
- **Image `sizes` prop** on `fill` images — Next.js serves full-size on mobile without it
- **Table `scope` attributes** on the rates page `<th>` elements (`scope="col"`, `scope="row"`)
- **Keyboard trap in mobile nav** — Escape key closes drawer (partially done); true focus trap would prevent tabbing outside the open menu
- **Error states on form** — invalid fields need `aria-invalid="true"` and `aria-describedby` pointing to an error message
- Styles: `app/globals.css` + `tailwind.config.ts`
- Images: all in `public/images/` — hero, center-section, bottom-section backgrounds + image-1 through image-4

---

## Session Log — 2026-04-25 (continued)

### Pages Completed This Session
- ✅ Gallery (`app/gallery/page.tsx`) — hero + filter tabs (All / 7 categories) + 3-col grid with hover zoom. Client component with `useState` filter.
- ✅ Industries / Who We Serve (`app/industries/page.tsx`) — previously done

### Pages Still To Build
- ⬜ **Rates** (`app/rates/page.tsx`) — two tables, no form needed
- ⬜ **Contact** (`app/contact/page.tsx`) — contact info column + quote request form

---

## Rates Page — Content Reference

### Hero
- Heading: "Our Rates"
- Subtitle: "Transparent pricing. No hidden fees. No surprises."
- Background: reuse `hero-background-image.jpeg` or `gallery/warehouse.jpeg` (dark overlay)

### Table 1 — Delivery & Service Rate Sheet
Format: **Minimum / Per Additional Hour**

| CREW | ZONE 1 | ZONE 2 | ZONE 3 |
|---|---|---|---|
| 2 Man + Truck | $130 / $65 | $205 / $65 | $280 / $65 |
| 3 Man Crew | +$90 / $65 | +$50 / $65 | +$50 / $65 |
| 4 Man Crew | +$50 / $45 | +$130 / $45 | +$170 / $65 |
| Additional Truck | — | — | $40 / hr |
| Installations (>4 hrs) | — | — | By Quote |

### Table 2 — Warehouse Services Pricing

| SERVICE | RATE | NOTES |
|---|---|---|
| Receiving | $1.05 / cu ft | Billed on total cubic footage per item |
| Inspection | $1.05 / cu ft | Performed upon request |
| Staging / Preparation | $1.05 / cu ft | Includes consolidation and readiness |
| Storage | $1.25 / cu ft / mo | 15-day grace period on arrival; billed monthly after |

Disclaimer: "Rates may vary based on project scope, location, and complexity. Contact us for a custom quote."
CTA button: "Request Custom Quote →" (links to /contact)

### Design Notes
- Both tables: dark card (`bg-cardTable`) with maroon→dark gradient header row
- Section heading + red underline, then table card below
- Disclaimer + CTA at very bottom

---

## Contact Page — Content Reference

### Hero
- Heading: "Contact Us"
- Subtitle: "Ready to experience the Platinum One difference? Get in touch today."
- Background: truck/fleet photo — need to download. Scania semi-truck highway shot.
  - Try: `photo-1601584115197-04ecc0da31d7` (truck on highway)
  - Save to: `public/images/contact/hero.jpeg`

### Layout: 2-column (left info | right form)

**Left — "Get In Touch"**
- Phone: (661) 208-7228
- Email: michelle@platinumonelogistics.net
- Location: Georgia
- Hours: Mon – Fri: 7am – 5pm (After-hours available by request)
- Pull quote: *"We respond to all inquiries within 24 hours. For urgent requests, please call us directly."* — Michelle Casanova, Operations

**Right — "Request a Quote" form**
Fields:
- Full Name * | Email *
- Phone | Company
- Service Needed (select: Delivery, Receiving & Inspection, Storage & Inventory, White-Glove Installation, Relocation, Hospitality & Model Homes, Other)
- Project Details * (textarea)
- Submit button: "Submit Quote Request" (full-width red, with send icon)

**Form implementation:** On HOLD pending SMTP credentials from IT.
Plan: Next.js Server Action + Nodemailer. For now, wire to `mailto:` or show a "coming soon" toast.

---

## Image Inventory & Cleanup

### Exact Duplicates (confirmed by md5)
| Duplicate | Keep | Delete |
|---|---|---|
| `about/about-hospitality.jpeg` = `who-we-serve/hospitality.jpeg` | `who-we-serve/hospitality.jpeg` | `about/about-hospitality.jpeg` |
| `about/about-values.jpeg` = `who-we-serve/relocation.jpeg` | `who-we-serve/relocation.jpeg` | `about/about-values.jpeg` (mislabeled anyway) |
| `gallery/hero.jpeg` = `who-we-serve/hero.jpeg` | both (serve different pages) | — |

### Corrupt/Bad Downloads
- `about/about-story.jpeg` — 29 bytes (404). Either skip or replace with a suitable interior photo.

### Unused but Unique Images
- `about/about-approach.jpeg` (436KB) — not wired into any page. Could be used in About page "Our Approach" section as an image panel.

### Same Photo, Different Sizes (not duplicates, different downloads)
- `gallery/installation-1.jpeg` (86KB) ≈ `who-we-serve/designers.jpeg` (182KB) — same Unsplash photo at different w= params
- `gallery/model-homes-1.jpeg` (89KB) ≈ `who-we-serve/model-homes.jpeg` (175KB) — same
- `gallery/relocation.jpeg` (72KB) ≈ `who-we-serve/relocation.jpeg` (358KB) — same

### Original Homepage Images (image-1 through image-4)
Low-res versions used in the "Who We Serve" cards on `app/page.tsx`. Different files from the who-we-serve/ folder. Keep as-is — homepage cards are small enough that lower res is fine.

---

## One-Page Layout — Concept Notes

### Rationale
The multi-page site has significant content overlap (Services grid appears on both homepage and /services; Who We Serve appears on homepage and /industries; Rates appear summarized on homepage and fully on /rates). A single-page version eliminates nav friction and keeps the bounce rate low for users who just want to scan and call.

### Proposed Section Order (single page)
```
1. Hero              — bold opener, same as current homepage
2. Services          — 6-card grid with White-Glove Promise feature callouts below
3. Who We Work With  — 4 audience image cards (Interior Designers, Hospitality, Model Homes, Relocation)
4. About / Our Story — 2-col: story + core values (merges "Done Right" + About page story)
5. Contact           — 2-col: info left (phone/email/hours/quote), form right
```

### What Gets Merged / Dropped
| Multi-page element | One-page treatment |
|---|---|
| Homepage hero | Keep as-is |
| Rebranding banner strip | Drop |
| Homepage Services grid | → Section 2 (Services) |
| White-Glove Promise (3 icons) | → Folded into Section 2 below the service cards |
| Done Right section | → Dropped; key message absorbed into Section 4 (About) |
| Homepage Who We Serve (4 cards) | → Section 3 |
| Homepage Rates tables | → Dropped from one-pager; /rates page still exists |
| Homepage Contact/CTA strip | → Replaced by Section 5 (full contact form) |
| /about inner page heroes | Drop (no inner-page hero overlays on 1-pager) |
| /gallery | Standalone page only — not on the one-pager |
| /rates | Standalone page only — not on the one-pager |

### Implementation path
- New file: `app/(one-page)/page.tsx` or keep at `app/page.tsx` and make the current multi-page site an archived branch.
- Header nav anchor links (#services, #gallery, #contact) instead of page routes.
- Footer simplified — same quick links but all as anchor hrefs.
- Recommended: build as a parallel page first (`/onepage`) so both can be compared side-by-side before switching.

---

## Old Site Audit — designlogisticsinc.com

Reviewed 2026-04-25. Source: https://designlogisticsinc.com/

### Key Facts Found (Not Yet on New Site)
- **Physical address**: 6610 Bay Circle, Suite B, Peachtree Corners, GA 30071
  - Peachtree Corners is a suburb of Atlanta — use as the home base / HQ location
  - **Service area is the greater Southeast** — not just Georgia, but the broader Southeast region
  - Currently the new site only says "Georgia" — undersells the actual reach
- **25+ years in business** — powerful credibility stat, not mentioned anywhere on new site
- **Service area**: Greater Southeast — headquartered in Peachtree Corners, GA
- **Industry affiliations**:
  - **ASID** (American Society of Interior Designers) — huge credibility signal for the interior designer audience
  - **CURE** (Childhood Cancer charity) — on the truck; shows community involvement
  - **SLC** — unknown abbreviation, ask Michelle
- **Art Gallery & Museum Logistics** — listed as a service on old site, not on new site
- **Architecture & Design Market Services** — listed on old site, not on new site

### Content Gaps (Old Site Has / New Site Lacks)
| Gap | Recommendation |
|---|---|
| Physical address | Add to footer, contact page, and JSON-LD schema |
| "25+ years experience" | Add as a stat/badge in the About section or hero |
| ASID affiliation | Add logo/badge to About page and contact page |
| City-level SEO (Peachtree Corners / Atlanta) | Update JSON-LD schema and page copy |
| Art & museum logistics | Consider adding to services page |
| CURE charity involvement | Mention in About page — builds trust and personality |
| Actual project photos | Now fixed — see below |

### Company Photos — Downloaded & Available
All saved to `public/images/company/`. These are real project photos, not stock images.

| File | What It Shows | Best Use |
|---|---|---|
| `installation-luxury-room.jpeg` | Fully furnished luxury room — leather chairs, bookshelves, vintage red car as showpiece | Gallery (Installation), About hero, Done Right panel |
| `installation-dining-room.jpeg` | High-end dining room with stone fireplace, pendant lights, formal table setting | Gallery (Installation), services hero |
| `hospitality-ballroom.jpeg` | Hotel ballroom with LED ceiling installation, western-themed furniture — stunning | Gallery (Hospitality), Who We Serve / Hospitality section |
| `installation-fine-art.jpeg` | Actual crew member leveling a massive fine art painting — perfect white-glove shot | Gallery (Installation), About page, white-glove section |
| `installation-ceiling-work.jpeg` | Team on ladders installing art/lighting ceiling grid at a commercial venue | Gallery (Installation), team/about section |
| `storage-specialty.jpeg` | Looking up through a tall specialty wine bottle storage rack | Gallery (Warehouse), storage service card |

**Do NOT use**: `luxury-home-relocation-home.jpg` — shows the old "Design Logistics" branded truck. Would need brand to be cropped or painted out first.

### Old Site Weaknesses (Avoid Repeating)
- No contact details on homepage (phone/email hidden behind contact page)
- No testimonials or client case studies
- No team bios or staff information
- No pricing transparency
- No service area specifics beyond "Atlanta and Southeast"
- Poor mobile experience
- No SEO metadata

---

## Old Site vs New Site — Comparison

### ✅ Improvements (New Site Wins)

| Area | Old (Design Logistics) | New (Platinum One) |
|---|---|---|
| **Visual design** | Generic WordPress theme, dated look | Premium dark aesthetic, Playfair Display + Inter, brand-consistent |
| **Mobile experience** | Poor, not optimized | Fully responsive, hamburger nav, mobile-first layout |
| **Pricing transparency** | No pricing anywhere | Full rates page with delivery zones and warehouse pricing |
| **Gallery** | 3–4 photos, no organization | Filterable gallery (7 categories, 9 photos) |
| **Services detail** | Short paragraph per service | Full service page with feature lists, images, and CTAs per service |
| **Audience targeting** | Generic "interior design market" | Dedicated "Who We Serve" page per audience with specific value props |
| **About / story** | Thin "who we are" paragraph | Full About page: story, leadership points, core values, agenda |
| **SEO** | No metadata, no sitemap, no schema | Title/description per page, Open Graph, LocalBusiness JSON-LD, sitemap.xml, robots.txt |
| **Accessibility** | None — no ARIA, no skip link, no focus rings | Skip link, ARIA landmarks, focus-visible rings, reduced motion, form labels |
| **One-page option** | Does not exist | `/onepage` — anchor nav, filterable for ad campaigns |
| **Font & typography** | System fonts, inconsistent hierarchy | Playfair Display headings, Inter body, consistent scale |
| **Core values** | Not stated | Explicitly listed (Integrity, Honesty, Accountability, Respect, Collaboration) |
| **Rebranding story** | N/A | Banner + About copy acknowledges the transition from Design Logistics |
| **Navigation** | Basic links, no active state | Active page highlighting, sticky header, mobile drawer |
| **Footer** | Minimal | 4-column: logo, quick links, services, contact — adapts for one-page |

---

### ⚠️ Regressions (Old Site Had / New Site Lost)

| Area | Old (Design Logistics) | New (Platinum One) | Priority |
|---|---|---|---|
| **Physical address** | 6610 Bay Circle, Suite B, Peachtree Corners, GA 30071 on contact page | Only "Georgia" — missing from footer, contact, and JSON-LD schema | 🔴 High — critical for local SEO |
| **Years in business** | "25+ years" mentioned prominently | Not mentioned anywhere | 🔴 High — major credibility signal |
| **Service area specificity** | "Atlanta and the greater Southeast" | Just "Georgia" — serves the greater Southeast | 🔴 High — significantly undersells reach and limits search visibility |
| **ASID affiliation** | ASID logo displayed prominently | Not mentioned | 🟡 Medium — trust signal for designer audience |
| **CURE charity partnership** | Visible on truck and site | Not mentioned | 🟢 Low — brand personality, nice-to-have |
| **Art Gallery & Museum Logistics** | Listed as a full service | Not on new site | 🟡 Medium — potential revenue category |
| **Architecture & Design Market Services** | Listed as a full service | Not on new site | 🟡 Medium — potential revenue category |
| **Real project photos** | Actual company work photos used | Unsplash stock photos used | 🔴 High — authenticity and conversion |
| **Working contact form** | WordPress form (presumably working) | mailto: fallback only — unreliable | 🔴 High — losing leads now |
| **SLC affiliation** | Displayed | Not mentioned | 🟢 Low — unclear what SLC stands for |

---

### 📋 Summary for Presentation

**The new site is a significant upgrade** in design quality, SEO foundation, accessibility, content depth, and marketing capability. The old site was functional but dated, with no pricing, no SEO, no mobile optimization, and minimal content.

**The regressions are fixable** and mostly fall into two categories:
1. **Missing content** — address, years of experience, affiliations, two service categories. These are copy/data additions, not design work.
2. **Pending infrastructure** — working contact form (waiting on SMTP credentials), GA4 analytics, real project photos (pending approval to use).

**Recommended presentation talking points:**
- The new brand identity matches the premium market you actually serve
- SEO is now properly structured — the old site was essentially invisible to search engines
- The one-page layout gives you a high-converting landing page for any ad spend
- The real company photos from the old site would make the new gallery significantly more compelling than stock images — worth prioritizing after launch
- The address + ASID affiliation are quick wins that can be added before launch with no design work

---

## SEO — Complete Reference

### What's Already Implemented ✅
- Unique `<title>` + `<meta description>` on every page via Next.js `metadata` exports
- Title template: `%s | Platinum One Logistics` on inner pages
- Open Graph tags (`og:title`, `og:description`, `og:image`) — defaults in root layout, overrides per page
- Twitter card meta tags
- `LocalBusiness` JSON-LD schema in root layout (name, phone, email, address, hours, services, area served)
- `/sitemap.xml` — auto-generated, includes all 7 public pages with priority scores
- `/robots.txt` — allows all crawlers, points to sitemap
- Canonical URL on `/onepage` pointing to `/` to prevent duplicate content penalty
- `metadataBase` set to `https://platinumonelogistics.net` in root layout

### Production Domain
**Assumed**: `https://platinumonelogistics.net` — hardcoded as `BASE_URL` in `app/layout.tsx` and `app/sitemap.ts`.
**Action needed**: Confirm this is the final domain before launch. If different, update `BASE_URL` in both files.

### Still To Implement — Ranked by Impact

**🔴 High priority (do before launch)**
1. **Physical address** — add `6610 Bay Circle, Suite B, Peachtree Corners, GA 30071` to:
   - `app/contact/page.tsx` contact details
   - `components/layout/Footer.tsx` contact column
   - `app/layout.tsx` JSON-LD schema (`streetAddress`, `addressLocality`, `postalCode`)
2. **Service area and location** — headquartered in Peachtree Corners, GA, serving clients throughout **the greater Southeast**. Copy and JSON-LD should reflect both:
   - HQ/contact: Peachtree Corners, GA 30071
   - `areaServed` in JSON-LD: Greater Southeast (GA, FL, TN, SC, NC, AL, MS — confirm exact states with Michelle)
   - Page copy: "Based in Peachtree Corners, GA — serving the greater Southeast"
3. **Google Business Profile** — see section below
4. **GA4 analytics** — see section below
5. **Working contact form** — `mailto:` fallback is losing leads; needs Server Action + Nodemailer (waiting on SMTP credentials from IT)
6. **Real company photos** — Unsplash stock images hurt credibility vs. actual project photos (pending approval; photos saved to `public/images/company/`)

**🟡 Medium priority**
7. **Image `sizes` prop** — all `<Image fill>` components are missing `sizes` attribute; Next.js serves full-size images on mobile. Fix: add `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"` (exact values depend on layout)
8. **Image `alt` text** — decorative hero backgrounds correctly use `alt=""` but service cards, gallery cards, and audience cards need descriptive alts (e.g., `alt="White-glove furniture installation by Platinum One Logistics"`). Avoid over-indexing on location since they serve nationwide — focus on the service description instead
9. **Rates table `scope` attributes** — `<th>` elements need `scope="col"` and `scope="row"` for accessibility and semantic correctness (also an SEO signal)
10. **"25+ years in business"** — add as a stat to About page and/or hero — credibility signal for both users and search
11. **ASID affiliation** — add to About page and Contact page; signals authority to the interior designer audience Google associates with luxury logistics
12. **Service area copy** — update from "Georgia" to "the greater Southeast" across pages and metadata. Acknowledge HQ in Peachtree Corners, GA. Confirm exact states served with Michelle before updating JSON-LD `areaServed`

**🟢 Lower priority (post-launch)**
13. **Google Search Console** — connect after GA4 is live; shows exact search queries driving traffic and any crawl errors
14. **Blog / content** — even 4–5 articles ("How to Choose a White-Glove Delivery Service", "Model Home Staging Logistics Guide") would dramatically improve organic reach for long-tail searches
15. **Core Web Vitals** — run Lighthouse audit after deployment to real domain; Next.js is well-optimized by default but large images (hero-background-image.jpeg is 730KB) may need further compression
16. **Social media links in footer** — if Platinum One has LinkedIn, Instagram, or Facebook, adding links builds social signals and provides another discovery path

### Google Business Profile — Not Yet Set Up
A verified Google Business Profile is one of the highest-leverage local SEO actions available. It puts the business on Google Maps and adds a knowledge panel in search results.

**How to set it up:**
1. Go to business.google.com
2. Search for "Platinum One Logistics" — if it exists, claim it; if not, create it
3. Use the physical address: 6610 Bay Circle, Suite B, Peachtree Corners, GA 30071
4. Category: "Moving and Storage Service" or "Delivery Service"
5. Add phone: (770) 368-8900
6. Add website: platinumonelogistics.net
7. Verify via postcard (Google mails a code to the address) or phone/email if available
8. Once verified: add photos (use the real company photos from `public/images/company/`), add services, set hours

**Why it matters:** Even for a nationwide company, a verified GBP establishes credibility and appears for local searches near the HQ ("white glove delivery Atlanta", "furniture logistics Peachtree Corners"). Clients researching the company will also see the GBP knowledge panel when they Google the business name directly. It's a trust signal regardless of where the client is located.

### Keyword Strategy — What to Target
Based on the services and audience, these are the highest-value keyword clusters:

Company is **headquartered in Peachtree Corners, GA** and serves clients throughout **the greater Southeast**. Keyword strategy should reflect both local authority (HQ city/Atlanta metro) and regional reach.

| Cluster | Regional terms | Local/HQ terms |
|---|---|---|
| Core service | "white glove logistics Southeast", "white glove delivery service" | "white glove delivery Atlanta", "white glove logistics Georgia" |
| Interior design | "interior designer logistics Southeast", "furniture delivery white glove" | "interior designer logistics Atlanta" |
| Model homes | "model home logistics Southeast", "model home staging delivery" | "model home logistics Georgia" |
| Hospitality | "hotel FF&E installation Southeast", "hospitality logistics company" | "hotel logistics Atlanta" |
| Relocation | "white glove relocation Southeast", "luxury home relocation" | "luxury relocation Atlanta" |
| Warehouse | "furniture receiving inspection", "white glove storage Southeast" | "furniture storage Peachtree Corners" |
| Brand | "Platinum One Logistics", "Design Logistics rebrand" | — |

**Copy guidance**: Use "Based in Peachtree Corners, GA — serving the greater Southeast" throughout the site.
**Action needed**: Confirm exact states served with Michelle so JSON-LD `areaServed` can list them specifically (more precise = better local ranking in those states).

These are naturally woven into the current page copy but should be reinforced when real content is written or updated.

---

## Google Analytics 4 — Pending Setup

**Status**: No GA4 account exists yet. Site is currently blind to all traffic.

### What needs to happen
1. Go to analytics.google.com using a **business Google account** (not personal Gmail)
2. Create account: "Platinum One Logistics"
3. Create property: `platinumonelogistics.net`, Eastern Time, USD
4. Create web data stream: `https://platinumonelogistics.net`
5. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
6. Bring that ID back — implementation takes ~5 minutes

### Also set up at the same time
- **Google Search Console** (search.google.com/search-console) — shows exact search queries driving traffic
- Link Search Console to GA4 after both are created for combined reporting

### What to track once live
| Event | What it measures |
|---|---|
| `phone_click` | Which pages drive phone calls |
| `email_click` | Which pages drive email contact |
| `quote_submit` | Primary conversion — form submissions |
| `gallery_filter` | Which service categories get the most interest |

### When ready
Provide the `G-XXXXXXXXXX` Measurement ID and it gets added to `app/layout.tsx` via `next/script` with `strategy="afterInteractive"`. No other changes needed.
