'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// ─── Nav data ─────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

// ─── Logo ─────────────────────────────────────────────────────────────────────

function RacLogo({ transparent }: { transparent: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Rubanov Airport Consulting"
      className="group flex flex-shrink-0 items-center gap-3"
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white transition-all duration-500"
        style={
          transparent
            ? { background: 'rgba(201,168,76,0.18)', border: '1px solid rgba(201,168,76,0.40)' }
            : { background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)', boxShadow: '0 2px 8px rgba(11,30,61,0.25)' }
        }
      >
        R<span style={{ color: '#C9A84C' }}>A</span>C
      </div>
      <div className="hidden flex-col leading-none sm:flex">
        <span
          className="text-[13px] font-semibold tracking-wide transition-colors duration-500"
          style={{ color: transparent ? 'rgba(255,255,255,0.92)' : '#111827' }}
        >
          Rubanov Airport
        </span>
        <span className="text-[10px] font-medium tracking-[0.20em] uppercase" style={{ color: '#C9A84C' }}>
          Consulting
        </span>
      </div>
    </Link>
  )
}

// ─── Desktop nav with sliding pill ───────────────────────────────────────────

function DesktopNav({ transparent }: { transparent: boolean }) {
  const pathname = usePathname()
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false })

  const measurePill = useCallback(() => {
    const activeIdx = NAV_LINKS.findIndex((l) => l.href === pathname)
    const el = linkRefs.current[activeIdx]
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth, ready: true })
  }, [pathname])

  useEffect(() => {
    measurePill()
    window.addEventListener('resize', measurePill, { passive: true })
    return () => window.removeEventListener('resize', measurePill)
  }, [measurePill])

  return (
    <nav className="hidden flex-1 items-center justify-center md:flex" aria-label="Main">
      <ul className="relative flex items-center gap-1">
        {pill.ready && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 rounded-lg"
            style={{
              left: pill.left,
              width: pill.width,
              background: transparent ? 'rgba(201,168,76,0.18)' : 'rgba(11,30,61,0.07)',
              transition:
                'left 0.35s cubic-bezier(0.34,1.56,0.64,1), width 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.5s ease',
            }}
          />
        )}
        {NAV_LINKS.map(({ href, label }, i) => {
          const isActive = pathname === href
          return (
            <li key={href}>
              <Link
                ref={(el) => { linkRefs.current[i] = el }}
                href={href}
                className={clsx(
                  'relative block rounded-lg px-4 py-2 text-sm font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#C9A84C]',
                  isActive
                    ? 'text-[#C9A84C]'
                    : transparent
                      ? 'text-white/75 hover:text-white'
                      : 'text-zinc-500 hover:text-zinc-900',
                )}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

// ─── Full-screen mobile overlay ───────────────────────────────────────────────

function MobileOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()

  // Close on route change
  useEffect(() => { onClose() }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={clsx(
        'fixed inset-0 z-[200] transition-all duration-500',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      )}
      style={{ background: 'linear-gradient(150deg, #060f1f 0%, #0B1E3D 50%, #1a3460 100%)' }}
    >
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,1) 60px, rgba(201,168,76,1) 61px),' +
            'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,1) 60px, rgba(201,168,76,1) 61px)',
        }}
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)' }}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition duration-200 hover:border-white/30 hover:text-white sm:right-8 sm:top-8"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="h-5 w-5">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <div className="flex h-full flex-col justify-center px-8 sm:px-16">

        {/* Logo */}
        <div
          className="mb-10 flex items-center gap-4 transition-all duration-500"
          style={{ transitionDelay: open ? '0.05s' : '0s', opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(-12px)' }}
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-base font-bold text-white"
            style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.30)' }}
          >
            R<span style={{ color: '#C9A84C' }}>A</span>C
          </div>
          <div>
            <p className="text-[17px] font-semibold text-white">Rubanov Airport</p>
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase" style={{ color: '#C9A84C' }}>
              Consulting
            </p>
          </div>
        </div>

        {/* Gold accent line */}
        <div
          className="mb-10 h-px transition-all duration-700"
          style={{
            transitionDelay: open ? '0.10s' : '0s',
            opacity: open ? 1 : 0,
            width: open ? '180px' : '0px',
            background: 'linear-gradient(90deg, #C9A84C, #D4AF37 60%, transparent)',
          }}
        />

        {/* Nav items */}
        <nav>
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ href, label }, i) => {
              const isActive = pathname === href
              return (
                <li
                  key={href}
                  className="transition-all duration-500"
                  style={{
                    transitionDelay: open ? `${0.13 + i * 0.07}s` : '0s',
                    opacity: open ? 1 : 0,
                    transform: open ? 'none' : 'translateX(-24px)',
                  }}
                >
                  <Link
                    href={href}
                    onClick={onClose}
                    className={clsx(
                      'group flex items-center gap-5 py-3.5 transition-all duration-200',
                      isActive ? 'text-[#C9A84C]' : 'text-white/65 hover:text-white',
                    )}
                  >
                    <span className="w-6 text-right text-xs font-semibold tabular-nums"
                      style={{ color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.20)' }}>
                      0{i + 1}
                    </span>
                    <span className="h-px w-5 flex-shrink-0"
                      style={{ background: isActive ? '#C9A84C' : 'rgba(255,255,255,0.18)' }} />
                    <span className="text-3xl font-bold tracking-tight sm:text-4xl">{label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Bottom contact strip */}
        <div
          className="mt-10 transition-all duration-500"
          style={{ transitionDelay: open ? '0.55s' : '0s', opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(12px)' }}
        >
          <div className="mb-6 h-px w-full bg-white/8" />
          <div className="flex items-center justify-between">
            <div>
              <a href="mailto:yuriy@rubanov.com" className="block text-sm text-white/45 transition hover:text-white/75">
                yuriy@rubanov.com
              </a>
              <p className="mt-0.5 text-xs text-white/25">Vienna, Austria</p>
            </div>
            <Link
              href="/contact"
              onClick={onClose}
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)', boxShadow: '0 4px 16px rgba(201,168,76,0.30)' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = !scrolled

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 flex justify-center"
        style={{ animation: 'slide-down 0.7s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        <div
          className="mt-4 mx-3 flex w-full max-w-5xl items-center rounded-2xl px-3 py-2 sm:mx-8 sm:px-4 sm:py-2.5 transition-all duration-500"
          style={{
            background: transparent ? 'rgba(8, 20, 50, 0.28)' : 'rgba(255, 255, 255, 0.88)',
            backdropFilter: transparent ? 'blur(6px)' : 'blur(24px)',
            WebkitBackdropFilter: transparent ? 'blur(6px)' : 'blur(24px)',
            border: transparent ? '1px solid rgba(255,255,255,0.13)' : '1px solid rgba(0,0,0,0.07)',
            boxShadow: transparent
              ? '0 4px 32px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.08)'
              : '0 2px 24px rgba(0,0,0,0.08), 0 1px 0 rgba(0,0,0,0.04)',
          }}
        >
          {/* Logo */}
          <RacLogo transparent={transparent} />

          {/* Desktop nav — hidden on mobile */}
          <DesktopNav transparent={transparent} />

          {/* Mobile: "Menu ↓" centered — hidden on desktop */}
          <div className="flex flex-1 justify-center md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className={clsx(
                'group flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300',
                transparent ? 'text-white/85 hover:text-white' : 'text-zinc-600 hover:text-zinc-900',
              )}
            >
              Menu
              <svg
                viewBox="0 0 8 6"
                aria-hidden="true"
                className={clsx(
                  'h-auto w-2 transition-colors duration-300',
                  transparent ? 'stroke-white/70' : 'stroke-zinc-500',
                )}
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1.75 1.75 4 4.25l2.25-2.5" />
              </svg>
            </button>
          </div>

          {/* CTA button — desktop only */}
          <div className="hidden flex-shrink-0 md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg px-4 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-200 hover:scale-[1.04] hover:opacity-90 active:scale-[0.96]"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
                boxShadow: '0 2px 12px rgba(201,168,76,0.40)',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <MobileOverlay open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* In-flow spacer — hero cancels with -mt-24 */}
      <div className="h-24" aria-hidden="true" />
    </>
  )
}
