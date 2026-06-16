import Image from 'next/image'
import Link from 'next/link'
import runwayImage from '@/images/photos/runway-at-dusk.jpg'

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Runway image bg */}
      <div className="absolute inset-0">
        <Image
          src={runwayImage}
          alt="Empty runway at dusk"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 70%' }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(11,30,61,0.75) 0%, rgba(11,30,61,0.92) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center gap-6"
        style={{ animation: 'hero-fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        {/* 404 badge */}
        <div
          className="rounded-2xl px-5 py-3 text-5xl font-black tracking-tighter text-white"
          style={{ background: 'rgba(201,168,76,0.20)', border: '1px solid rgba(201,168,76,0.35)' }}
        >
          404
        </div>

        {/* Runway icon */}
        <div style={{ color: '#C9A84C', opacity: 0.8 }}>
          <svg viewBox="0 0 64 32" fill="currentColor" className="h-8 w-16 opacity-70">
            <rect x="0" y="14" width="64" height="4" rx="2"/>
            <rect x="28" y="6" width="8" height="20" rx="1"/>
            <rect x="10" y="14" width="6" height="4" rx="1"/>
            <rect x="48" y="14" width="6" height="4" rx="1"/>
          </svg>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Wrong Runway
          </h1>
          <p className="mt-2 text-sm text-white/65 sm:text-base">
            This page doesn&rsquo;t exist — but we can get you back on course.
          </p>
        </div>

        {/* Gold divider */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#C9A84C' }} />
          <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
        </div>

        {/* Nav options */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)' }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd"/>
            </svg>
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Contact
          </Link>
        </div>

        <p className="text-xs text-white/40">
          rubanov.com &nbsp;·&nbsp; Rubanov Airport Consulting &nbsp;·&nbsp; Vienna, Austria
        </p>
      </div>
    </div>
  )
}
