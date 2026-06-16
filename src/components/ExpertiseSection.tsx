import { ScrollReveal } from '@/components/ScrollReveal'

// ─── Expertise cards data ─────────────────────────────────────────────────────

const COMPETENCES = [
  {
    title: 'Traffic Forecasting',
    description:
      'Advanced mathematical models identifying key traffic drivers and market dynamics. Comprehensive short-, medium- and long-term demand forecasts for airports and financiers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Master Planning',
    description:
      'Holistic airport masterplans balancing capacity, operational efficiency, infrastructure requirements and commercial development over 20–40 year horizons.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    title: 'Feasibility Studies',
    description:
      'Rigorous pre-feasibility and full feasibility assessments for new terminals, runways, commercial facilities and airport city concepts, including World Bank / EBRD standards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: 'Capacity Calculation',
    description:
      'Detailed capacity analysis for terminals, aprons, runways and landside infrastructure. Peak-hour modelling to identify bottlenecks and define expansion triggers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2v20M2 12h20"/>
        <circle cx="12" cy="12" r="9"/>
      </svg>
    ),
  },
  {
    title: 'Strategic Development',
    description:
      'Market positioning, competitive landscape analysis and long-term strategic roadmaps for airport operators, governments and private investors across all airport sizes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Project Management',
    description:
      'End-to-end project and programme management for complex, multi-stakeholder aviation consultancy engagements — from tender stage through final report delivery.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Airline Marketing',
    description:
      'Target strategy and airline marketing programmes to attract new routes, grow network connectivity and improve an airport\'s competitive position in its catchment area.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'Airspace Coordination',
    description:
      'Civil and military airspace structure analysis, coordination and optimisation. Deep operational expertise rooted in 8 years as a First Grade Air Traffic Controller.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'IFP Design',
    description:
      'Design of Instrument Flight Procedures and airspace structures for civil and military aerodromes, ensuring safe and efficient operations under all weather conditions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="10" x2="15" y2="10"/>
        <line x1="12" y1="7" x2="12" y2="13"/>
      </svg>
    ),
  },
]

// ─── Card component ───────────────────────────────────────────────────────────

interface ExpertiseCardProps {
  title: string
  description: string
  icon: React.ReactNode
  delayIndex: number
}

function ExpertiseCard({ title, description, icon, delayIndex }: ExpertiseCardProps) {
  const delay = `${delayIndex * 0.08}s`

  return (
    <ScrollReveal
      delay={delay}
      className="group flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.07)] ring-1 ring-zinc-900/5 transition-shadow duration-300 hover:shadow-[0_8px_32px_-8px_rgba(11,30,61,0.16)]"
    >
      {/* Icon circle */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)' }}
        >
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-zinc-900 leading-snug">{title}</h3>
      </div>

      {/* Gold accent line */}
      <div
        className="h-px w-10 transition-all duration-500 group-hover:w-full"
        style={{ background: 'linear-gradient(90deg, #C9A84C, #D4AF37)' }}
      />

      <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
    </ScrollReveal>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function ExpertiseSection() {
  return (
    <section
      className="bg-zinc-50 py-20 sm:py-24"
      aria-label="Areas of expertise"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {/* Heading */}
        <ScrollReveal className="mb-12 text-center">
          <p
            className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase"
            style={{ color: '#C9A84C' }}
          >
            Core Competences
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            End-to-End Airport Expertise
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
            From first operational principles as an Air Traffic Controller to senior
            strategic advisory — every engagement draws on the full depth of the aviation stack.
          </p>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPETENCES.map((competence, i) => (
            <ExpertiseCard
              key={competence.title}
              {...competence}
              delayIndex={i % 3}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <ScrollReveal className="mt-12 text-center">
          <a
            href="/expertise"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: '#0B1E3D' }}
          >
            Explore all competences
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
