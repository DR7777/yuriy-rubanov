import Link from 'next/link'
import { ContainerOuter, ContainerInner } from '@/components/Container'

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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  )
}

function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21c-4.418-4.418-7-8.582-7-11a7 7 0 1 1 14 0c0 2.418-2.582 6.582-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function PlaneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  )
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[11px] font-bold tracking-[0.18em] text-zinc-400 uppercase">
      {children}
    </p>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isExternal = href.startsWith('http')
  return (
    <li>
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="text-sm text-zinc-500 transition-colors duration-150 hover:text-zinc-900"
      >
        {children}
      </Link>
    </li>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="mt-24 flex-none sm:mt-32">
      <ContainerOuter>
        <ContainerInner>
          {/* ── Main card ──────────────────────────────────────────────────── */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_40px_-8px_rgba(0,0,0,0.10)] ring-1 ring-zinc-900/5">
            {/* Navy top accent */}
            <div className="h-[3px] w-full gold-line" />

            <div className="px-8 py-12 sm:px-10 lg:px-14 lg:py-14">
              <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.6fr]">

                {/* ── Col 1: Brand ─────────────────────────────────────────── */}
                <div className="flex flex-col gap-5">
                  {/* RAC Badge + wordmark */}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white shadow-sm"
                      style={{ background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)' }}
                    >
                      R<span style={{ color: '#C9A84C' }}>A</span>C
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="text-[14px] font-semibold tracking-wide text-zinc-900">
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

                  <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
                    Independent airport consulting. 36 years of aviation expertise
                    in traffic forecasting, master planning and strategic
                    development across 25+ countries.
                  </p>

                  {/* Contact details */}
                  <ul className="flex flex-col gap-2.5">
                    <li>
                      <a
                        href="mailto:yuriy@rubanov.com"
                        className="flex items-center gap-2.5 text-sm text-zinc-500 transition hover:text-zinc-900"
                      >
                        <EnvelopeIcon className="h-4 w-4 flex-shrink-0 text-[#C9A84C]" />
                        yuriy@rubanov.com
                      </a>
                    </li>
                    <li>
                      <span className="flex items-center gap-2.5 text-sm text-zinc-500">
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
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 ring-1 ring-zinc-200 transition hover:text-[#0A66C2] hover:ring-[#0A66C2]/40"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </a>
                </div>

                {/* ── Col 2: Navigation ────────────────────────────────────── */}
                <div className="lg:pt-1">
                  <ColHeading>Navigation</ColHeading>
                  <ul className="flex flex-col gap-3.5">
                    <FooterLink href="/">Home</FooterLink>
                    <FooterLink href="/about">About</FooterLink>
                    <FooterLink href="/expertise">Expertise</FooterLink>
                    <FooterLink href="/projects">Projects</FooterLink>
                    <FooterLink href="/contact">Contact</FooterLink>
                  </ul>
                </div>

                {/* ── Col 3: Expertise ─────────────────────────────────────── */}
                <div className="lg:pt-1">
                  <ColHeading>Expertise</ColHeading>
                  <ul className="flex flex-col gap-3.5">
                    <FooterLink href="/expertise">Traffic Forecasting</FooterLink>
                    <FooterLink href="/expertise">Master Planning</FooterLink>
                    <FooterLink href="/expertise">Feasibility Studies</FooterLink>
                    <FooterLink href="/expertise">Capacity Analysis</FooterLink>
                    <FooterLink href="/expertise">Strategic Development</FooterLink>
                  </ul>
                </div>

                {/* ── Col 4: CTA ───────────────────────────────────────────── */}
                <div className="flex flex-col justify-between gap-6 rounded-xl bg-zinc-50 px-6 py-7">
                  <div>
                    <ColHeading>Start a Conversation</ColHeading>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      Available for project-based engagements, expert reviews
                      and long-term advisory mandates worldwide.
                    </p>

                    <div className="mt-5 flex flex-col gap-2.5">
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-[0.98]"
                        style={{
                          background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
                        }}
                      >
                        <PlaneIcon className="h-4 w-4" />
                        Get in Touch
                      </Link>
                      <Link
                        href="/projects"
                        className="flex items-center justify-center gap-2 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-900"
                      >
                        View Projects
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-zinc-200 pt-5">
                    <p className="text-[11px] font-semibold tracking-[0.15em] text-zinc-400 uppercase">
                      Based in
                    </p>
                    <p className="mt-1.5 text-sm text-zinc-500">Vienna, Austria</p>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      Available for worldwide engagements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Copyright bar ──────────────────────────────────────────────── */}
          <div className="flex flex-col items-center justify-between gap-3 px-2 py-5 sm:flex-row">
            <p className="text-xs text-zinc-400">
              &copy; {new Date().getFullYear()} Rubanov Airport Consulting. All rights reserved.
            </p>
            <p className="text-xs text-zinc-400">
              Vienna, Austria &middot;{' '}
              <a
                href="mailto:yuriy@rubanov.com"
                className="hover:text-zinc-600 transition-colors"
              >
                yuriy@rubanov.com
              </a>
            </p>
          </div>
        </ContainerInner>
      </ContainerOuter>
    </footer>
  )
}
