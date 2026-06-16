'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

// ─── Icons ────────────────────────────────────────────────────────────────────

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── RAC Logo badge ───────────────────────────────────────────────────────────

function RacLogo() {
  return (
    <Link
      href="/"
      aria-label="Rubanov Airport Consulting — Home"
      className="group flex flex-shrink-0 items-center gap-2.5 transition-opacity hover:opacity-85"
    >
      {/* Initials badge */}
      <div
        className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold tracking-tight text-white shadow-sm"
        style={{
          background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)',
        }}
      >
        <span>
          R<span style={{ color: '#C9A84C' }}>A</span>C
        </span>
      </div>

      {/* Word mark — hidden on xs, visible from sm */}
      <div className="hidden flex-col leading-none sm:flex">
        <span className="text-[13px] font-semibold tracking-wide text-zinc-900">
          Rubanov Airport
        </span>
        <span
          className="text-[10px] font-medium tracking-[0.18em] uppercase"
          style={{ color: '#C9A84C' }}
        >
          Consulting
        </span>
      </div>
    </Link>
  )
}

// ─── Nav items ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

// ─── Mobile nav ───────────────────────────────────────────────────────────────

function MobileNavItem({
  href,
  label,
  isActive,
}: {
  href: string
  label: string
  isActive: boolean
}) {
  return (
    <li>
      <PopoverButton
        as={Link}
        href={href}
        className={clsx(
          'block py-2.5 text-base font-medium transition-colors',
          isActive ? 'text-[#C9A84C]' : 'text-zinc-700 hover:text-zinc-900',
        )}
      >
        {label}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  const pathname = usePathname()

  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-900">
        Menu
        <ChevronDownIcon className="h-auto w-2 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-2xl bg-white p-8 shadow-xl ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-500" />
          </PopoverButton>
          {/* RAC logo in mobile menu */}
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)' }}
            >
              <span>R<span style={{ color: '#C9A84C' }}>A</span>C</span>
            </div>
            <span className="text-sm font-semibold text-zinc-900">
              Rubanov Airport Consulting
            </span>
          </div>
        </div>

        {/* Gold line */}
        <div className="mt-5 h-px w-full" style={{ background: 'linear-gradient(90deg, #C9A84C, #D4AF37, #C9A84C)' }} />

        <nav className="mt-5">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ href, label }) => (
              <MobileNavItem
                key={href}
                href={href}
                label={label}
                isActive={pathname === href}
              />
            ))}
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

// ─── Desktop nav ──────────────────────────────────────────────────────────────

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 text-sm font-medium transition',
          isActive
            ? 'text-[#C9A84C]'
            : 'text-zinc-600 hover:text-zinc-900',
        )}
      >
        {children}
        {isActive && (
          <span
            className="absolute inset-x-1 -bottom-px h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            }}
          />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex font-medium">
        {NAV_LINKS.map(({ href, label }) => (
          <NavItem key={href} href={href}>
            {label}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  return (
    <>
      {/*
       * Fixed floating glass pill — sits above all page content.
       * Animation: slides down on first load.
       */}
      <div
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-8"
        style={{ animation: 'slide-down 0.6s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        <div
          className={clsx(
            'flex w-full max-w-5xl items-center rounded-2xl px-4 py-2.5',
            'bg-white/80 backdrop-blur-md',
            'ring-1 ring-zinc-900/8',
            'shadow-lg shadow-black/[0.05]',
          )}
        >
          {/* Logo */}
          <RacLogo />

          {/* Nav — centred */}
          <div className="flex flex-1 justify-center">
            <MobileNavigation className="md:hidden" />
            <DesktopNavigation className="hidden md:block" />
          </div>

          {/* Contact button (right side) */}
          <div className="hidden flex-shrink-0 sm:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:opacity-90 active:scale-[0.97]"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* In-flow spacer so content starts below the fixed pill */}
      <div className="h-24 shrink-0" aria-hidden="true" />
    </>
  )
}
