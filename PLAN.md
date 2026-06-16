# Plan: Yuriy Rubanov – Rubanov Airport Consulting Website

## Context

The repo is a **Next.js 16 + Tailwind CSS 4 + TypeScript** site originally built
for "Kosmetiksalon Kleopatra" (a Vienna cosmetics studio). We repurpose it into a
modern, Apple-style professional personal website for **Yuriy Rubanov**, launching
**Rubanov Airport Consulting** after 25+ years at Airport Competence GmbH.
Framework, design system, and core component patterns are solid and reused; only
content, branding, and cosmetics-specific pages/components are replaced.

---

## Confirmed Details

| Field | Value |
|---|---|
| Company | **Rubanov Airport Consulting** |
| Domain | rubanov.com |
| Email | yuriy@rubanov.com |
| LinkedIn | https://www.linkedin.com/in/yuriy-rubanov-9693061b/ |
| Language | English only |
| Dark mode | **Removed** — light only |
| Hero layout | Cinematic full-width image card, his name + title overlaid |

---

## Key Facts — Yuriy Rubanov (from CV)

| Field | Detail |
|---|---|
| Full name | Yuriy Rubanov |
| Title | Independent Airport Consultant |
| Based | Vienna, Austria |
| Aviation experience | 36 years total |
| AC tenure | 25+ years at Airport Competence GmbH |
| Languages | English · German · Russian · Ukrainian |
| Photo | `project-plan/image.png` — professional headshot, navy suit, glasses, red tie |

**Core competences:**
- Traffic Forecasting & Market Assessment (advanced mathematical modelling)
- Airport Master Planning
- Feasibility & Pre-feasibility Studies
- Capacity Calculation
- Strategic Airport Development
- Project / Programme Management
- Airline Marketing & Route Development
- Civil & Military Airspace Coordination
- IFP Design (Instrument Flight Procedures)

**Notable clients / financiers:** World Bank · EBRD · IFC · TACIS

**Geographic specialisation:** ex-USSR / CIS + global (25+ countries across Europe, Africa, Asia, Americas)

**Career timeline:**
| Period | Role | Organisation |
|---|---|---|
| 1986–1994 | Air Traffic Controller (First Grade) — Approach Control & Tower | UkSATSE, Kharkiv International Airport |
| 1994–1996 | General Manager, Foreign Relations / Contracts | Azov Shipping Company, Mariupol |
| 1996–2000 | Managing Director | Azov Shipping Holding GmbH, Vienna |
| 2000–2025 | Manager Central & Eastern Europe | Airport Competence GmbH, Vienna |
| 2008 | Chairman of the Board | Airport "Baikal" Ulan-Ude, Russia |
| 2002–2004 | Member of the Board of Directors | JSC "TOPCART Sheremetyevo", Moscow |
| 2025– | Independent Consultant | Rubanov Airport Consulting, Vienna |

**Education:**
- Engineer Diploma with Honour — Operation of Air Transport / Air Traffic Controller  
  St. Petersburg University of Civil Aviation, 1982–1986
- Diploma — All-Union Courses of Foreign Languages, Moscow, 1988–1990

---

## Image Mapping (aviation_images → src/images/)

All 11 provided images catalogued and assigned to specific site sections:

| Source file | → Destination name | Usage |
|---|---|---|
| `artur-tumasjan-*.jpg` (PNG) | `hero-airport-terminal-sunset.jpg` | **Hero** — dramatic terminal silhouette at golden sunset, people with luggage |
| `niklas-jonasson-*.jpg` | `runway-at-dusk.jpg` | **CTA strip** background — empty runway at dusk with edge lights, moody & vast |
| `patrick-tomasso-*.jpg` | `aircraft-ascending-sunset.jpg` | **About page** header — aircraft climbing against pink/purple sky, aspirational |
| `bao-menglong-*.jpg` | `aircraft-on-taxiway.jpg` | **Projects page** header — wide-body head-on at modern terminal |
| `doug-bagg-*.jpg` | `aerial-airport-apron.jpg` | **Expertise section** — aerial apron view, multiple planes at gates |
| `chris-leipelt-*.jpg` | `aerial-aircraft-at-gate.jpg` | **Master Planning card** — top-down detail, airport ground ops |
| `chuttersnap-*.jpg` | `airport-departures-board.jpg` | **Traffic Forecasting card** — classic FIDS departures board close-up |
| `dennis-gecaj-*.jpg` | `airport-gate-lounge-lufthansa.jpg` | **Contact page** or decorative section |
| `oskar-kadaksoo-*.jpg` | `airport-gate-lounge-klm.jpg` | **About page** interior / experience section |
| `luka-slapnicar-*.jpg` | `jet-engine-turbine.jpg` | **Decorative** — dramatic engine close-up for visual texture |
| `merve-sensoy-*.jpg` | `aircraft-runway-approach.jpg` | **Expertise page** or secondary decorative |
| `project-plan/image.png` | `portrait-yuriy-rubanov.png` | **About page** — professional headshot |

**Unsplash search placeholders needed** (if any extra images wanted later):
- World map with airport pins: *"world map airport connections aviation"*
- Vienna cityscape for location section: *"Vienna aerial cityscape"*

---

## Approach

Keep the proven Next.js shell (routing, Container/Layout primitives). Strip every
cosmetics page, component, and asset. Remove dark-mode logic entirely. Build a
clean **5-page aviation-consultant site** with **Apple-style scroll animations**
(sections fade/slide in on scroll using Intersection Observer), using
**@21st-dev/magic MCP** for polished UI components.

### Design System
| Token | Value | Usage |
|---|---|---|
| Deep Navy | `#0B1E3D` | Hero overlay, section accents, timeline dots |
| Midnight Blue | `#1E3A5F` | Gradient partner for dark sections |
| Sky Blue | `#38BDF8` | Active links, highlights |
| Gold | `#C9A84C` / `#D4AF37` | CTA buttons, decorative dividers (reused from existing) |
| White | `#FFFFFF` | Body cards, backgrounds |
| Zinc-50 | `#FAFAFA` | Section alternating backgrounds |

### Font
Switch from **Playfair Display** to **Inter** (clean, modern, executive sans-serif).
Weights 400/500/600/700.

### Animations (Apple-style)
All sections use `IntersectionObserver` to trigger:
- `fade-up`: opacity 0→1 + translateY(24px→0), cubic-bezier(0.22,1,0.36,1)
- `fade-in`: opacity 0→1 for images and cards
- `stagger`: sequential delays for card grids (100ms per card)
- Counter animation on StatsSection when it enters viewport

### Site Map
| Route | Purpose |
|---|---|
| `/` | Landing — cinematic hero, 4 stat counters, expertise cards, 6 featured projects, CTA strip |
| `/about` | Bio, portrait, career timeline, education, languages, skills |
| `/expertise` | 9 competence areas with full descriptions |
| `/projects` | Full 50+ project list grouped by region |
| `/contact` | Contact form (mailto) + Vienna location + LinkedIn |

---

## Files to REMOVE (cosmetics-specific)

### Full directory trees
- `src/app/behandlungen/`
- `src/app/artikel/`
- `src/app/cookie-richtlinie/`
- `src/app/datenschutz/`
- `src/app/impressum/`
- `src/app/feed.xml/`
- `src/app/kontakt/`
- `src/app/about/` → will be rebuilt from scratch

### Components (delete)
- `src/components/TreatmentCard.tsx`
- `src/components/TreatmentCTAStrip.tsx`
- `src/components/TreatmentPageHero.tsx`
- `src/components/TreatmentsSection.tsx`
- `src/components/TestimonialSection.tsx`
- `src/components/FAQSection.tsx`
- `src/components/GoogleMapEmbed.tsx`
- `src/components/ContactInfoCard.tsx`
- `src/components/SocialIcons.tsx`
- `src/components/IntroSection.tsx`

### Lib
- `src/lib/treatments.ts`
- `src/lib/articles.ts`

### Assets
- `src/images/behandlungen/` (all treatment photos)
- `src/images/photos/Header_Faded*.jpg`
- `src/images/logos/` (Kleopatra logos)
- `src/images/avatar.jpg`, `src/images/portrait.jpg`
- `src/app/icon.png` → replaced with "RAC" favicon placeholder

### Root scripts (not needed)
- `generate-pdfs.mjs`
- `merge-pdfs.mjs`

---

## Files to KEEP / REUSE

| File | What changes |
|---|---|
| `src/app/providers.tsx` | Remove ThemeWatcher + dark-mode logic; keep AppContext only |
| `src/components/Layout.tsx` | Keep structure — Header + main + Footer |
| `src/components/Container.tsx` | **Keep as-is** |
| `src/components/Button.tsx` | **Keep as-is** |
| `src/components/Card.tsx` | **Keep as-is** |
| `src/components/SimpleLayout.tsx` | **Keep as-is** |
| `src/components/Prose.tsx` | **Keep as-is** |
| `src/components/ArticleLayout.tsx` | Keep (could be reused for project detail) |
| `src/lib/formatDate.ts` | **Keep as-is** |
| `mdx-components.tsx` | Keep |
| `next.config.mjs` | Remove MDX redirects, simplify |
| `package.json` | Rename to `rubanov-airport-consulting` |
| `src/styles/tailwind.css` | Swap `--font-display` to Inter; remove dark variant; add scroll-animation utilities |

### Components to REWRITE
- `src/components/Hero.tsx` → aviation hero (full image card, text overlay, two CTAs)
- `src/components/Header.tsx` → new nav, "RAC" initials logo, remove dark toggle
- `src/components/Footer.tsx` → Yuriy's contact info, LinkedIn, copyright
- `src/app/layout.tsx` → swap font, new metadata, remove CookieYes, remove dark class
- `src/app/not-found.tsx` → aviation-themed 404

---

## New Files to CREATE

### Data
- `src/lib/projects.ts` — Full structured project data (50+ entries): `{ title, location, country, year, role, scope, highlight }`

### Images (copy from source)
All to `src/images/photos/` and `src/images/`:

```
project-plan/image.png                         → src/images/portrait-yuriy-rubanov.png
project-plan/aviation_images/artur-tumasjan-*  → src/images/photos/hero-airport-terminal-sunset.jpg
project-plan/aviation_images/niklas-jonasson-* → src/images/photos/runway-at-dusk.jpg
project-plan/aviation_images/patrick-tomasso-* → src/images/photos/aircraft-ascending-sunset.jpg
project-plan/aviation_images/bao-menglong-*    → src/images/photos/aircraft-on-taxiway.jpg
project-plan/aviation_images/doug-bagg-*       → src/images/photos/aerial-airport-apron.jpg
project-plan/aviation_images/chris-leipelt-*   → src/images/photos/aerial-aircraft-at-gate.jpg
project-plan/aviation_images/chuttersnap-*     → src/images/photos/airport-departures-board.jpg
project-plan/aviation_images/dennis-gecaj-*    → src/images/photos/airport-gate-lounge-lufthansa.jpg
project-plan/aviation_images/oskar-kadaksoo-*  → src/images/photos/airport-gate-lounge-klm.jpg
project-plan/aviation_images/luka-slapnicar-*  → src/images/photos/jet-engine-turbine.jpg
project-plan/aviation_images/merve-sensoy-*    → src/images/photos/aircraft-runway-approach.jpg
```

### New Components (via @21st-dev/magic MCP + Tailwind patterns)
- `src/components/Hero.tsx` — Full-width cinematic image card (terminal sunset photo), deep navy gradient overlay, "Rubanov Airport Consulting" wordmark, Yuriy's name, title, two CTA buttons (Get in Touch / View Projects), scroll-down chevron
- `src/components/StatsSection.tsx` — 4 animated counters on scroll: "36 Years" · "60+ Projects" · "25+ Countries" · "4 Languages"  
- `src/components/ExpertiseSection.tsx` — 9 competence cards with SVG icons, fade-up stagger on scroll; uses aerial-airport-apron image as section background
- `src/components/FeaturedProjects.tsx` — 6 curated projects in a grid/cards, fade-in stagger
- `src/components/CTAStrip.tsx` — Full-width section (runway-at-dusk as bg), "Ready to chart your airport's future?" + Contact button
- `src/components/TimelineSection.tsx` — Career timeline, alternating left/right layout, animated dots
- `src/components/ProjectCard.tsx` — Reusable card: title, location flag, year, role badge
- `src/components/ContactForm.tsx` — Name / Email / Subject / Message, mailto action to yuriy@rubanov.com
- `src/components/ScrollReveal.tsx` — Thin wrapper using IntersectionObserver for scroll animations (reusable)

### New Pages
- `src/app/page.tsx` — Hero + StatsSection + ExpertiseSection + FeaturedProjects + CTAStrip
- `src/app/about/page.tsx` — portrait + bio + TimelineSection + education + languages
- `src/app/expertise/page.tsx` — Full 9-card competence layout + detailed descriptions
- `src/app/projects/page.tsx` — Full project list from `projects.ts`, grouped by region
- `src/app/contact/page.tsx` — ContactForm + address block + LinkedIn

---

## Implementation Steps

- [ ] **1. Copy all images** to `src/images/` with clean names (as mapped above)
- [ ] **2. Create `src/lib/projects.ts`** — All 50+ projects as typed data array
- [ ] **3. Strip cosmetics** — Delete all dirs/files listed in "Files to REMOVE"
- [ ] **4. Clean config** — `package.json` name, `next.config.mjs` (remove redirects + WP-era config), `tsconfig` unchanged
- [ ] **5. Rewrite `src/app/layout.tsx`** — Inter font, new metadata, remove CookieYes script, light-only (no `dark` class)
- [ ] **6. Simplify `src/app/providers.tsx`** — Remove ThemeProvider/ThemeWatcher/dark-mode; keep AppContext/pathname tracking only
- [ ] **7. Update `src/styles/tailwind.css`** — Remove dark variant; update `--font-display` to Inter; add `fade-up`, `fade-in`, `stagger-*` animation keyframes and utilities
- [ ] **8. Build `src/components/ScrollReveal.tsx`** — IntersectionObserver wrapper for Apple-style section reveals
- [ ] **9. Rewrite `src/components/Header.tsx`** — "RAC" badge logo, nav: Home / About / Expertise / Projects / Contact, remove ThemeToggle
- [ ] **10. Rewrite `src/components/Footer.tsx`** — Company name, Vienna, yuriy@rubanov.com, LinkedIn, copyright 2025
- [ ] **11. Build `src/components/Hero.tsx`** — Cinematic card with `hero-airport-terminal-sunset` image, navy overlay gradient, animated text reveal
- [ ] **12. Build `src/components/StatsSection.tsx`** — 4 counters with CountUp animation on scroll
- [ ] **13. Build `src/components/ExpertiseSection.tsx`** — 9 cards (Traffic Forecast, Master Planning, Feasibility Studies, Capacity Calc, Strategic Development, Project Mgmt, Airline Marketing, Airspace Coordination, IFP Design)
- [ ] **14. Build `src/components/FeaturedProjects.tsx`** — 6 highlighted recent projects
- [ ] **15. Build `src/components/CTAStrip.tsx`** — runway-at-dusk background, CTA text + button
- [ ] **16. Compose `src/app/page.tsx`** — Wire all home sections
- [ ] **17. Build `src/components/TimelineSection.tsx`** — Animated career timeline
- [ ] **18. Build `src/app/about/page.tsx`** — Portrait (right column) + bio (left) + timeline + education + languages
- [ ] **19. Build `src/app/expertise/page.tsx`** — Detailed competence descriptions with images
- [ ] **20. Build `src/components/ProjectCard.tsx` + `src/app/projects/page.tsx`** — Full list by region
- [ ] **21. Build `src/components/ContactForm.tsx` + `src/app/contact/page.tsx`** — Form + contact block
- [ ] **22. Rewrite `src/app/not-found.tsx`** — Runway/aviation 404
- [ ] **23. Final sweep** — `npm run build && npm run lint`, check all 5 pages mobile + desktop

---

## Reused Existing Code

| Existing code | Where reused |
|---|---|
| `ContainerOuter/Inner/Container` from `Container.tsx` | All pages — consistent max-width layout |
| `Card.tsx` | ProjectCard, expertise cards wrap |
| `SimpleLayout.tsx` | Expertise & Projects page shells |
| `Button.tsx` | CTA buttons |
| Glass-pill header pattern | New Header reuses the same fixed floating pill approach |
| `fade-up` + `fade-in` keyframes in `tailwind.css` | Extended for scroll-triggered version |
| Gold accent colours `#C9A84C` / `#D4AF37` | Reused in CTAs, dividers, decorative lines |

---

## Verification

```bash
npm run dev        # Dev server at localhost:3000 — check all 5 pages
npm run build      # Must compile with zero TypeScript errors
npm run lint       # ESLint must pass
```

Manual checks:
- [ ] Mobile responsive at 360px, 768px, 1280px, 1920px
- [ ] No dark mode UI or toggle visible anywhere
- [ ] All nav links (Home / About / Expertise / Projects / Contact) resolve
- [ ] Zero German text, zero cosmetics references remain
- [ ] Father's portrait visible on About page
- [ ] Hero image loads (terminal sunset)
- [ ] Scroll animations fire on all sections
- [ ] Stats counter animates when scrolled into view
- [ ] All 50+ projects listed on /projects
- [ ] Contact form `mailto:yuriy@rubanov.com` fires correctly
- [ ] LinkedIn link opens https://www.linkedin.com/in/yuriy-rubanov-9693061b/
- [ ] Footer copyright says "Rubanov Airport Consulting"
