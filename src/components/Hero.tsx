import Image from 'next/image'
import Link from 'next/link'
// Head-on wide-body aircraft in front of modern curved terminal — maximum wow
import heroImage from '@/images/photos/aircraft-on-taxiway.jpg'

// ─── Hero ─────────────────────────────────────────────────────────────────────
//
// Full-viewport cinematic hero. Key design decisions:
//
//  1. `-mt-24`  — pulls the section up by the exact height of the Header
//     spacer, so the image runs edge-to-edge from the very top of the
//     viewport with the floating glass pill overlaid on top.
//
//  2. Ken Burns — the background image slowly zooms from scale(1) → scale(1.08)
//     over 14 s. Creates life without motion sickness.
//
//  3. Layered overlay — four gradient layers (top-vignette, centre-darken,
//     strong bottom-fade, overall tint) maximise text contrast while keeping
//     the aircraft and terminal clearly visible.
//
//  4. Text-shadow — every heading and body line has a tight multi-stop shadow
//     so white text pops on both light sky and dark tarmac areas.
//
//  5. Staggered CSS animations — eyebrow → name → company → divider → tagline
//     → buttons → scroll-cue, each 0.10 s apart.

export function Hero() {
  return (
    <section
      // -mt-24 cancels the header spacer → true full-bleed from page top
      className="relative -mt-24 flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Rubanov Airport Consulting — hero"
    >
      {/* ── Background image with Ken Burns zoom ──────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Wide-body commercial aircraft taxiing head-on in front of a modern airport terminal"
          fill
          className="object-cover"
          style={{
            objectPosition: 'center 55%',
            animation: 'ken-burns 16s ease-out both',
          }}
          priority
          sizes="100vw"
          quality={90}
        />

        {/* Layer 1 — overall deep blue-tinted darkening */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(8, 18, 40, 0.55)',
          }}
        />

        {/* Layer 2 — top vignette (header area) */}
        <div
          className="absolute inset-x-0 top-0 h-48"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8,18,40,0.70) 0%, transparent 100%)',
          }}
        />

        {/* Layer 3 — strong bottom fade so text zone is very readable */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              'linear-gradient(to top, rgba(8,18,40,0.92) 0%, rgba(8,18,40,0.60) 40%, transparent 100%)',
          }}
        />

        {/* Layer 4 — centre radial darkening behind the text block */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 65%, rgba(8,18,40,0.45) 0%, transparent 80%)',
          }}
        />
      </div>

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex w-full flex-col items-center px-6 pb-24 pt-40 text-center sm:pb-32 sm:pt-48 lg:pb-40">

        {/* Eyebrow — with slide-down entry */}
        <p
          className="mb-5 text-[11px] font-semibold tracking-[0.45em] uppercase text-white/75 sm:text-xs"
          style={{
            animation: 'hero-fade-in 1s 0.1s both',
            textShadow: '0 1px 12px rgba(0,0,0,0.9)',
          }}
        >
          Independent Airport Consultant &nbsp;·&nbsp; Vienna, Austria
        </p>

        {/* Name — the centrepiece */}
        <h1
          className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]"
          style={{
            animation: 'hero-fade-up 0.9s 0.20s cubic-bezier(0.22,1,0.36,1) both',
            textShadow:
              '0 2px 4px rgba(0,0,0,0.5), 0 4px 24px rgba(0,0,0,0.6), 0 8px 48px rgba(0,0,0,0.4)',
          }}
        >
          Yuriy Rubanov
        </h1>

        {/* Company name */}
        <p
          className="mt-3 text-lg font-medium tracking-wide text-white/85 sm:mt-4 sm:text-2xl"
          style={{
            animation: 'hero-fade-up 0.9s 0.32s cubic-bezier(0.22,1,0.36,1) both',
            textShadow: '0 2px 16px rgba(0,0,0,0.8)',
          }}
        >
          Rubanov Airport Consulting
        </p>

        {/* Gold ornamental divider */}
        <div
          className="my-6 flex items-center justify-center gap-4 sm:my-7"
          style={{ animation: 'hero-fade-in 1s 0.42s both' }}
        >
          <span
            className="h-px w-14 sm:w-20"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }}
          />
          <svg
            viewBox="0 0 24 24"
            fill="#C9A84C"
            className="h-4 w-4 opacity-90"
            aria-hidden="true"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
          <span
            className="h-px w-14 sm:w-20"
            style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }}
          />
        </div>

        {/* Tagline */}
        <p
          className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          style={{
            animation: 'hero-fade-up 0.9s 0.50s cubic-bezier(0.22,1,0.36,1) both',
            textShadow: '0 1px 12px rgba(0,0,0,0.9)',
          }}
        >
          36 years of aviation expertise — traffic forecasting, master planning
          and strategic airport development across{' '}
          <span style={{ color: '#D4AF37' }}>25+ countries</span>.
        </p>

        {/* CTA buttons */}
        <div
          className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:gap-4"
          style={{ animation: 'hero-fade-up 0.9s 0.62s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          <Link
            href="/contact"
            className="inline-flex min-w-[160px] items-center justify-center gap-2.5 rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-2xl transition-all duration-200 hover:scale-[1.03] hover:opacity-95 active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
              boxShadow: '0 4px 28px rgba(201,168,76,0.55), 0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            Get in Touch
          </Link>
          <Link
            href="/projects"
            className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/12 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:scale-[1.03] hover:bg-white/22 active:scale-[0.97]"
          >
            View Projects
          </Link>
        </div>

        {/* Trust signals */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:mt-14"
          style={{ animation: 'hero-fade-in 1.2s 1.0s both' }}
        >
          {['World Bank', 'EBRD', 'IFC', 'TACIS'].map((org) => (
            <span
              key={org}
              className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/35"
            >
              {org}
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll cue ─────────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ animation: 'hero-fade-in 1.2s 1.4s both' }}
        aria-hidden="true"
      >
        {/* Animated pill */}
        <div
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5"
        >
          <div
            className="h-2 w-1 rounded-full bg-white/70"
            style={{ animation: 'scroll-dot 2s ease-in-out infinite' }}
          />
        </div>
        <span className="text-[9px] font-medium tracking-[0.3em] uppercase text-white/40">
          Scroll
        </span>
      </div>
    </section>
  )
}
