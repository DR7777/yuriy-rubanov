import Link from 'next/link'

// ─── Icons ────────────────────────────────────────────────────────────────────

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EnvelopeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  )
}

function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 21c-4.418-4.418-7-8.582-7-11a7 7 0 1 1 14 0c0 2.418-2.582 6.582-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
// Full-width dark navy footer — no floating card, no border/ring.
// Flows directly from the CTAStrip above with no visual break.

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{ background: 'linear-gradient(180deg, #0B1E3D 0%, #081228 100%)' }}
    >
      {/* Gold accent line at the very top */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #C9A84C 25%, #D4AF37 50%, #C9A84C 75%, transparent 100%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">

          {/* ── Col 1: Brand ───────────────────────────────────────────────── */}
          <div className="flex flex-col gap-5">
            {/* RAC Badge + wordmark */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white"
                style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.30)' }}
              >
                R<span style={{ color: '#C9A84C' }}>A</span>C
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[14px] font-semibold tracking-wide text-white">
                  Rubanov Airport
                </span>
                <span
                  className="text-[10px] font-medium tracking-[0.18em] uppercase"
                  style={{ color: '#C9A84C' }}
                >
                  Consulting
                </span>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              Independent airport consulting. 36 years of aviation expertise
              in traffic forecasting, master planning and strategic development
              across 25+ countries.
            </p>

            {/* Contact */}
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:yuriy@rubanov.com"
                  className="flex items-center gap-2.5 text-sm text-white/55 transition hover:text-white"
                >
                  <EnvelopeIcon className="h-4 w-4 flex-shrink-0 text-[#C9A84C]" />
                  yuriy@rubanov.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-sm text-white/55">
                  <MapPinIcon className="h-4 w-4 flex-shrink-0 text-[#C9A84C]" />
                  Vienna, Austria
                </span>
              </li>
            </ul>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yuriy-rubanov-9693061b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/40 ring-1 ring-white/10 transition hover:text-[#0A66C2] hover:ring-[#0A66C2]/40"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>

          {/* ── Col 2: Navigation ──────────────────────────────────────────── */}
          <div>
            <p className="mb-5 text-[11px] font-bold tracking-[0.18em] text-white/30 uppercase">
              Navigation
            </p>
            <ul className="flex flex-col gap-3.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/expertise', label: 'Expertise' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Expertise ───────────────────────────────────────────── */}
          <div>
            <p className="mb-5 text-[11px] font-bold tracking-[0.18em] text-white/30 uppercase">
              Services
            </p>
            <ul className="flex flex-col gap-3.5">
              {[
                'Traffic Forecasting',
                'Master Planning',
                'Feasibility Studies',
                'Capacity Analysis',
                'Strategic Development',
                'IFP Design',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/expertise"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: CTA ─────────────────────────────────────────────────── */}
          <div
            className="flex flex-col gap-5 rounded-xl p-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-[11px] font-bold tracking-[0.18em] text-white/30 uppercase">
              Start a Conversation
            </p>
            <p className="text-sm leading-relaxed text-white/50">
              Available for project-based engagements, expert reviews and
              long-term advisory mandates worldwide.
            </p>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
                }}
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
              >
                View Projects
              </Link>
            </div>

            {/* Clients */}
            <div className="mt-auto border-t border-white/8 pt-5">
              <p className="mb-2.5 text-[10px] font-bold tracking-[0.18em] text-white/25 uppercase">
                Trusted by
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {['World Bank', 'EBRD', 'IFC', 'TACIS'].map((org) => (
                  <span key={org} className="text-[10px] font-semibold tracking-wide text-white/35">
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ──────────────────────────────────────────────────── */}
      <div
        className="border-t border-white/8"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row sm:px-8">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Rubanov Airport Consulting. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Vienna, Austria &middot;{' '}
            <a href="mailto:yuriy@rubanov.com" className="hover:text-white/60 transition-colors">
              yuriy@rubanov.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
