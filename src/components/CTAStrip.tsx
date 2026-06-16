import Image from 'next/image'
import Link from 'next/link'
import runwayImage from '@/images/photos/runway-at-dusk.jpg'
import { ScrollReveal } from '@/components/ScrollReveal'

// ─── CTA Strip ────────────────────────────────────────────────────────────────
//
// Full-width cinematic strip using the runway-at-dusk photo as background.
// Deep navy overlay keeps text readable; gold CTA button stands out.

export function CTAStrip() {
  return (
    <section
      className="relative w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={runwayImage}
          alt="Empty runway at dusk"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 60%' }}
          sizes="100vw"
        />
        {/* Navy overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(11,30,61,0.92) 0%, rgba(30,58,95,0.85) 100%)',
          }}
        />
        {/* Subtle texture grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-8 py-16 text-center sm:py-20 lg:py-24">
        <ScrollReveal fade>
          {/* Gold ornament */}
          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-12"
                style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }}
              />
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                style={{ color: '#C9A84C' }}
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              <span
                className="h-px w-12"
                style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }}
              />
            </div>
          </div>

          <p
            className="mb-3 text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60"
          >
            Ready to get started?
          </p>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&rsquo;s chart your airport&rsquo;s
            <br className="hidden sm:block" />
            future together.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Whether you need a traffic forecast, a master plan review or strategic
            advisory — Yuriy brings 36 years of hands-on aviation expertise to your
            project. Available for worldwide engagements.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 active:scale-[0.97]"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
                boxShadow: '0 4px 24px rgba(201,168,76,0.45)',
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              Learn about Yuriy
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {['World Bank', 'EBRD', 'IFC', 'TACIS'].map((org) => (
              <span key={org} className="text-[11px] font-semibold tracking-[0.15em] text-white/40 uppercase">
                {org}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
