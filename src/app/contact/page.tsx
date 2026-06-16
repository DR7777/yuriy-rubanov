import { type Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ContactForm } from '@/components/ContactForm'
import loungeImage from '@/images/photos/airport-gate-lounge-lufthansa.jpg'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Yuriy Rubanov — Independent Airport Consultant based in Vienna. Available for traffic forecasting, master planning, feasibility studies and strategic advisory engagements worldwide.',
}

// ─── Contact info blocks ──────────────────────────────────────────────────────

const INFO_BLOCKS = [
  {
    label: 'Email',
    value: 'yuriy@rubanov.com',
    href: 'mailto:yuriy@rubanov.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m2 7 10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Vienna, Austria',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 21c-4.418-4.418-7-8.582-7-11a7 7 0 1 1 14 0c0 2.418-2.582 6.582-7 11Z"/>
        <circle cx="12" cy="10" r="2.5"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Yuriy Rubanov',
    href: 'https://www.linkedin.com/in/yuriy-rubanov-9693061b/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Availability',
    value: 'Open to worldwide engagements',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* ── Page header — lounge image ── */}
      <div className="relative -mt-24 h-72 overflow-hidden sm:h-80">
        <Image
          src={loungeImage}
          alt="Airport departure lounge with aircraft at gate"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 60%' }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(11,30,61,0.5) 0%, rgba(11,30,61,0.82) 100%)',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <ScrollReveal>
            <p className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60">
              Get in Touch
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contact
            </h1>
          </ScrollReveal>
        </div>
      </div>

      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">

          {/* ── Left: Form ── */}
          <div>
            <ScrollReveal className="mb-8">
              <p
                className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={{ color: '#C9A84C' }}
              >
                Send a Message
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Start the Conversation
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Describe your airport, project type and timeline. Yuriy typically responds
                within 1–2 business days.
              </p>
            </ScrollReveal>

            <ScrollReveal delay="0.1s">
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* ── Right: Info ── */}
          <div className="flex flex-col gap-6">
            {/* Info card */}
            <ScrollReveal
              delay="0.08s"
              className="rounded-2xl bg-gradient-to-br from-[#0B1E3D] to-[#1E3A5F] p-7 text-white shadow-[0_8px_32px_-8px_rgba(11,30,61,0.30)]"
            >
              <div className="gold-line mb-6 rounded-full" />
              <h3 className="mb-5 text-base font-bold">Contact Information</h3>

              <ul className="flex flex-col gap-5">
                {INFO_BLOCKS.map(({ label, value, href, icon }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ background: 'rgba(201,168,76,0.15)' }}
                    >
                      <span style={{ color: '#C9A84C' }}>{icon}</span>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wide text-white/40 uppercase">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="mt-0.5 block text-sm font-medium text-white/90 transition hover:text-white"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-white/90">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Languages */}
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="mb-3 text-[11px] font-semibold tracking-wide text-white/40 uppercase">
                  Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {['English', 'German', 'Russian', 'Ukrainian'].map((lang) => (
                    <span
                      key={lang}
                      className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Services reminder */}
            <ScrollReveal
              delay="0.15s"
              className="rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200"
            >
              <h4 className="mb-4 text-sm font-bold text-zinc-900">
                Available Services
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  'Traffic Forecasting & Market Assessment',
                  'Airport Master Planning',
                  'Feasibility & Pre-feasibility Studies',
                  'Capacity Calculation',
                  'Strategic Development',
                  'IFP & Airspace Design',
                  'Expert Reviews & Second Opinions',
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-zinc-600">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: '#C9A84C' }}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </>
  )
}
