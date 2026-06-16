## 1. What this project is

**Kosmetiksalon Kleopatra** is a cosmetics studio for women and men at
Herrengasse 6-8, 1010 Wien (Vienna's 1st district). The owner has run it for
over 20 years. The site has existing Google rankings that must not be lost.

We are migrating the site **from WordPress (Avada / Fusion Builder theme) to
Next.js 14 (App Router)**. The migration is incremental — pages are being
rebuilt one at a time. The old WordPress site is still live while this is
developed.

The goal is a clean, fast, modern Next.js site that looks nothing like the old
Fusion Builder output but carries **100 % of the same textual content** so
Google sees no meaningful change during re-indexing.

## 2. ⚠️ SEO preservation rules — CRITICAL, non-negotiable

Google has already indexed the WordPress site at **beauty-kleopatra.at**.
Every rule in this section exists to prevent a rankings drop during the
domain cutover.

So when the user gives you insgtructions to prevent the text and headings, you have to follow the modern SEO conventions and do that!
The main goal is not to disrupt the current SEO status of the page!

## 3. Component architecture — always build reusably

**Rule:** Whenever a UI element could appear on more than one page, or is
complex enough to deserve its own concern, extract it into a dedicated file
inside `src/components/`. Never leave reusable markup as a large inline block
inside a page file.

**Guidelines:**

- One component per file. File name = component name (PascalCase).
- Export a named TypeScript interface for the props alongside the component.
- Keep page files (`app/**/page.tsx`) thin — they import components and
  assemble data; they do not contain large chunks of JSX.
- Before writing new markup, check `src/components/` first — the component
  may already exist.
- If a component is only used inside one page _for now_ but is clearly
  reusable in nature (cards, banners, section headers, CTA strips …),
  still put it in `src/components/`.

Shared UI building blocks live in `src/components/`. Always check there before
creating inline markup for something that may be reused across pages.
