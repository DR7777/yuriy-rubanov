import { ScrollReveal } from '@/components/ScrollReveal'

// ─── Timeline data ────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    period: '2026 – Present',
    role: 'Independent Airport Consultant',
    org: 'Rubanov Airport Consulting',
    location: 'Vienna, Austria',
    description:
      'Launching independent practice offering traffic forecasting, master planning, feasibility studies and strategic advisory for airports, governments and financial institutions worldwide.',
    highlight: true,
    type: 'current',
  },
  {
    period: '2000 – 2026',
    role: 'Manager Central & Eastern Europe',
    org: 'Airport Competence GmbH',
    location: 'Vienna, Austria',
    description:
      'Over 26 years as senior manager and lead expert at one of Europe\'s leading airport consultancies (formerly Airport Consulting Vienna GmbH). Led projects across CIS, Eastern Europe and globally for clients including World Bank, EBRD, IFC and TACIS.',
    highlight: false,
    type: 'work',
  },
  {
    period: '2008',
    role: 'Chairman of the Board of Directors',
    org: 'Airport "Baikal" Ulan-Ude',
    location: 'Ulan-Ude, Russia',
    description:
      'Oversaw overall airport strategy development in a board leadership capacity.',
    highlight: false,
    type: 'board',
  },
  {
    period: '2002 – 2004',
    role: 'Member of the Board of Directors',
    org: 'JSC "TOPCART Sheremetyevo"',
    location: 'Moscow, Russia',
    description:
      'Board responsibility for company operational activities at Sheremetyevo International Airport.',
    highlight: false,
    type: 'board',
  },
  {
    period: '1996 – 2000',
    role: 'Managing Director',
    org: 'Azov Shipping Holding GmbH',
    location: 'Vienna, Austria',
    description:
      'Day-to-day operations management, supervision of subsidiary companies and strategy development for an Austrian holding of the Azov Shipping Company group.',
    highlight: false,
    type: 'work',
  },
  {
    period: '1994 – 1996',
    role: 'General Manager, Foreign Relations & Contracts',
    org: 'Azov Shipping Company (AZSCO)',
    location: 'Mariupol, Ukraine',
    description:
      'Managed agent network organisation, supervision and control of subsidiary companies; led sale & purchase department.',
    highlight: false,
    type: 'work',
  },
  {
    period: '1986 – 1994',
    role: 'Air Traffic Controller, First Grade',
    org: 'UkSATSE (Ukrainian State Air Traffic Services Enterprise)',
    location: 'Kharkiv International Airport, Ukraine',
    description:
      'Eight years as a First Grade ATC in Approach Control and Tower. This operational foundation underpins an unmatched depth of understanding of airport and airspace systems.',
    highlight: false,
    type: 'atc',
  },
]

const TYPE_ICON: Record<string, React.ReactNode> = {
  current: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  work: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  ),
  board: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  atc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="22" y2="12"/>
    </svg>
  ),
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function TimelineSection() {
  return (
    <section className="py-16 sm:py-20">
      <ScrollReveal className="mb-10">
        <p
          className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase"
          style={{ color: '#C9A84C' }}
        >
          Professional Journey
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Career Timeline
        </h2>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px sm:left-6"
          style={{ background: 'linear-gradient(to bottom, #C9A84C, #1E3A5F, transparent)' }}
          aria-hidden="true"
        />

        <ol className="flex flex-col gap-0">
          {TIMELINE.map((item, i) => (
            <ScrollReveal
              as="li"
              key={i}
              delay={`${i * 0.07}s`}
              className="relative pl-14 sm:pl-16 pb-10 last:pb-0"
            >
              {/* Dot */}
              <div
                className="absolute left-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white shadow-md ring-4 ring-white"
                style={{
                  background: item.highlight
                    ? 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)'
                    : 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)',
                  top: '0px',
                }}
              >
                {TYPE_ICON[item.type]}
              </div>

              {/* Card */}
              <div
                className={`rounded-xl p-5 sm:p-6 ${
                  item.highlight
                    ? 'bg-gradient-to-br from-[#0B1E3D] to-[#1E3A5F] shadow-[0_8px_32px_-8px_rgba(11,30,61,0.35)]'
                    : 'bg-white shadow-[0_2px_16px_-4px_rgba(0,0,0,0.07)] ring-1 ring-zinc-900/5'
                }`}
              >
                {/* Period badge */}
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide mb-2 ${
                    item.highlight
                      ? 'bg-white/15 text-white/80'
                      : 'text-zinc-500 bg-zinc-100'
                  }`}
                >
                  {item.period}
                </span>

                <h3
                  className={`text-sm font-bold leading-snug ${
                    item.highlight ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  {item.role}
                </h3>
                <p
                  className={`mt-0.5 text-sm font-medium ${
                    item.highlight ? 'text-white/80' : 'text-zinc-600'
                  }`}
                >
                  {item.org}
                </p>
                <p
                  className={`mt-0.5 text-xs ${
                    item.highlight ? 'text-white/50' : 'text-zinc-400'
                  }`}
                >
                  {item.location}
                </p>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    item.highlight ? 'text-white/70' : 'text-zinc-500'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
