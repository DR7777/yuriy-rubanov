import Image from 'next/image'
import Link from 'next/link'
import heroImage from '@/images/photos/hero-airport-terminal-sunset.jpg'

// ─── Hero ─────────────────────────────────────────────────────────────────────
//
// Full-width cinematic image card with a deep-navy gradient overlay.
// Text and CTAs animate in on load via CSS keyframes (no JS required).
// The terminal-sunset photo sets a dramatic, professional atmosphere.

export function Hero() {
  return (
    <div className="px-4 pt-4 sm:px-8 sm:pt-6">
      <section
        className="mx-auto w-full max-w-5xl pb-16 sm:pb-20"
        style={{ animation: 'hero-fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            boxShadow:
              '0 32px 80px -12px rgba(11,30,61,0.28), 0 8px 24px -4px rgba(0,0,0,0.12)',
          }}
        >
          {/* ── Background image ── */}
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/8] lg:aspect-[21/9]">
            <Image
              src={heroImage}
              alt="Airport terminal at sunset — Rubanov Airport Consulting"
              fill
              className="object-cover"
              style={{ objectPosition: 'center 40%' }}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
            />

            {/* Deep navy gradient overlay — bottom two-thirds */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(11,30,61,0.95) 0%, rgba(11,30,61,0.70) 35%, rgba(11,30,61,0.20) 65%, transparent 100%)',
              }}
            />

            {/* Subtle top vignette */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-24"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(11,30,61,0.35) 0%, transparent 100%)',
              }}
            />

            {/* ── Text block — bottom-anchored ── */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-8 text-center sm:pb-10 lg:pb-14">

              {/* Eyebrow */}
              <p
                className="mb-3 text-[10px] font-semibold tracking-[0.35em] uppercase text-white/70 sm:text-[11px]"
                style={{ animation: 'hero-fade-in 1s 0.3s both' }}
              >
                Independent Airport Consultant &nbsp;·&nbsp; Vienna, Austria
              </p>

              {/* Name */}
              <h1
                className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ animation: 'hero-fade-up 0.85s 0.15s cubic-bezier(0.22,1,0.36,1) both' }}
              >
                Yuriy Rubanov
              </h1>

              {/* Title */}
              <p
                className="mt-2 text-base font-medium text-white/80 sm:mt-3 sm:text-xl"
                style={{ animation: 'hero-fade-up 0.85s 0.25s cubic-bezier(0.22,1,0.36,1) both' }}
              >
                Rubanov Airport Consulting
              </p>

              {/* Gold ornamental divider */}
              <div
                className="mt-4 flex items-center justify-center gap-3 sm:mt-5"
                style={{ animation: 'hero-fade-in 1s 0.4s both' }}
              >
                <span
                  className="h-px w-10 sm:w-16"
                  style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }}
                />
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ backgroundColor: '#C9A84C' }}
                />
                <span
                  className="h-px w-10 sm:w-16"
                  style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }}
                />
              </div>

              {/* Tagline */}
              <p
                className="mt-4 max-w-lg px-4 text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base"
                style={{ animation: 'hero-fade-up 0.9s 0.35s cubic-bezier(0.22,1,0.36,1) both' }}
              >
                36 years of aviation expertise — traffic forecasting, master planning
                and strategic airport development across 25+ countries.
              </p>

              {/* CTA buttons */}
              <div
                className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
                style={{ animation: 'hero-fade-up 0.9s 0.45s cubic-bezier(0.22,1,0.36,1) both' }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 active:scale-[0.97]"
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
                    boxShadow: '0 4px 20px rgba(201,168,76,0.40)',
                  }}
                >
                  Get in Touch
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-[0.97]"
                >
                  View Projects
                </Link>
              </div>

              {/* Scroll indicator */}
              <div
                className="mt-8 flex flex-col items-center gap-1.5 text-white/40 sm:mt-10"
                style={{ animation: 'hero-fade-in 1.2s 0.9s both' }}
              >
                <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                <svg
                  className="h-4 w-4 animate-bounce"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
