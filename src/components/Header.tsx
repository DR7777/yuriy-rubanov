'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
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
      aria-label="Rubanov Airport Consulting — Home"
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

// ─── Mobile nav — popover "Menu ↓" ───────────────────────────────────────────

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MobileNav({ transparent }: { transparent: boolean }) {
  const pathname = usePathname()

  return (
    <Popover className="md:hidden">
      {/* Trigger */}
      <PopoverButton
        className={clsx(
          'group flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium outline-none transition-colors duration-300',
          transparent
            ? 'text-white/85 hover:text-white'
            : 'text-zinc-600 hover:text-zinc-900',
        )}
      >
        Menu
        <ChevronDownIcon
          className={clsx(
            'h-auto w-2 transition-all duration-300 group-data-open:rotate-180',
            transparent ? 'stroke-white/70' : 'stroke-zinc-500',
          )}
        />
      </PopoverButton>

      {/* Backdrop */}
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-40 bg-zinc-900/30 backdrop-blur-sm duration-200 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />

      {/* Panel */}
      <PopoverPanel
        focus
        transition
        className="absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[calc(100vw-2rem)] max-w-sm -translate-x-1/2 origin-top overflow-hidden rounded-2xl shadow-2xl duration-200 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
        style={{ background: 'linear-gradient(150deg, #0a1628 0%, #0B1E3D 100%)' }}
      >
        {/* Gold top accent */}
        <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, #D4AF37, transparent)' }} />

        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold text-white"
              style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.30)' }}
            >
              R<span style={{ color: '#C9A84C' }}>A</span>C
            </div>
            <span className="text-sm font-semibold text-white">Rubanov Airport Consulting</span>
          </div>
          <PopoverButton aria-label="Close menu" className="-mr-1 rounded-lg p-1.5 text-white/40 transition hover:text-white">
            <CloseIcon className="h-4 w-4" />
          </PopoverButton>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px bg-white/8" />

        {/* Nav links */}
        <nav className="p-2">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ href, label }, i) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <PopoverButton
                    as={Link}
                    href={href}
                    className={clsx(
                      'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150',
                      isActive
                        ? 'text-[#C9A84C]'
                        : 'text-white/65 hover:bg-white/6 hover:text-white',
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] tabular-nums text-white/20">0{i + 1}</span>
                      {label}
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#C9A84C' }} />
                    )}
                  </PopoverButton>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="mx-5 mb-4 mt-1 rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <PopoverButton
            as={Link}
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)' }}
          >
            Get in Touch
          </PopoverButton>
          <p className="mt-3 text-center text-[10px] text-white/25">
            yuriy@rubanov.com · Vienna, Austria
          </p>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false)

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
          className="mt-4 flex w-full max-w-5xl items-center rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 mx-3 sm:mx-8 transition-all duration-500"
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

          {/* Desktop nav */}
          <DesktopNav transparent={transparent} />

          {/* Right: mobile popover + desktop CTA */}
          <div className="flex flex-shrink-0 items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center rounded-lg px-4 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-200 hover:scale-[1.04] hover:opacity-90 active:scale-[0.96] md:inline-flex"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
                boxShadow: '0 2px 12px rgba(201,168,76,0.40)',
              }}
            >
              Get in Touch
            </Link>

            {/* Mobile popover trigger sits here */}
            <MobileNav transparent={transparent} />
          </div>
        </div>
      </header>

      {/* In-flow spacer — hero uses -mt-24 to cancel this */}
      <div className="h-24" aria-hidden="true" />
    </>
  )
}
