import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'

// ─── Competence data ──────────────────────────────────────────────────────────

const COMPETENCES = [
  {
    number: '01',
    title: 'Traffic Forecasting',
    subtitle: 'Demand analysis underpinning every investment decision.',
    description:
      'Advanced mathematical models identifying key traffic drivers and market dynamics. Comprehensive short-, medium- and long-term demand forecasts for airports and financiers worldwide.',
    featured: true, // col-span-2 on lg
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Master Planning',
    subtitle: '20–40 year infrastructure roadmaps.',
    description:
      'Holistic masterplans balancing capacity, operational efficiency, infrastructure requirements and commercial development across all airport typologies.',
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Feasibility Studies',
    subtitle: 'From concept to investment decision.',
    description:
      'Rigorous pre-feasibility and full feasibility assessments for terminals, runways, commercial facilities and airport city concepts — meeting World Bank / EBRD standards.',
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Capacity Calculation',
    subtitle: 'Identifying constraints before they become crises.',
    description:
      'Detailed capacity analysis for terminals, aprons, runways and landside infrastructure. Peak-hour modelling to define bottlenecks and expansion triggers.',
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Strategic Development',
    subtitle: 'Market positioning for airports at every scale.',
    description:
      'Competitive landscape analysis and long-term strategic roadmaps for airport operators, governments and private investors — delivering clarity backed by rigorous market intelligence.',
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Project Management',
    subtitle: 'Complex multi-stakeholder programmes, delivered.',
    description:
      'End-to-end project and programme management — from tender stage through final report delivery — for international financial institutions and private investors alike.',
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Airline Marketing',
    subtitle: 'Connecting airports with the routes that grow them.',
    description:
      'Target strategy and airline marketing programmes to attract new routes, grow network connectivity and strengthen an airport\'s competitive position in its catchment area.',
    featured: true, // col-span-2 on lg
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
  },
  {
    number: '08',
    title: 'Airspace Coordination',
    subtitle: 'Rooted in 8 years of First Grade ATC.',
    description:
      'Civil and military airspace structure analysis, coordination and optimisation — informed by genuine operational expertise as a First Grade Air Traffic Controller.',
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
  {
    number: '09',
    title: 'IFP Design',
    subtitle: 'Safe procedures from first principles.',
    description:
      'Design of Instrument Flight Procedures and airspace structures for civil and military aerodromes, ensuring safe and efficient operations in all weather conditions.',
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/>
      </svg>
    ),
  },
]

// ─── Standard card ────────────────────────────────────────────────────────────

function Card({
  number,
  title,
  subtitle,
  description,
  icon,
  delay,
}: {
  number: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  delay: string
}) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 shadow-[0_2px_16px_-4px_rgba(11,30,61,0.08)] ring-1 ring-zinc-900/5 transition-all duration-300 hover:shadow-[0_8px_40px_-8px_rgba(11,30,61,0.14)]"
        style={{ background: '#fff' }}
      >
        {/* Hover glow overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)',
            boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.20)',
          }}
        />

        {/* Ghost number watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-3 -top-4 select-none font-black leading-none tabular-nums"
          style={{ fontSize: '96px', color: 'rgba(11,30,61,0.055)' }}
        >
          {number}
        </span>

        {/* Icon */}
        <div
          className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)',
            color: '#C9A84C',
          }}
        >
          {icon}
        </div>

        {/* Title + subtitle */}
        <div className="relative mb-4">
          <h3 className="text-base font-bold text-zinc-900">{title}</h3>
          <p className="mt-1 text-xs font-medium" style={{ color: '#C9A84C' }}>
            {subtitle}
          </p>
        </div>

        {/* Gold line */}
        <div
          className="relative mb-4 h-px w-8 transition-all duration-500 group-hover:w-full"
          style={{ background: 'linear-gradient(90deg, #C9A84C, #D4AF37)' }}
        />

        {/* Description */}
        <p
          className="relative mt-auto text-sm leading-relaxed text-zinc-500 transition-colors duration-300"
        >
          {description}
        </p>
      </div>
    </ScrollReveal>
  )
}

// ─── Featured card (col-span-2, horizontal layout) ───────────────────────────

function FeaturedCard({
  number,
  title,
  subtitle,
  description,
  icon,
  delay,
}: {
  number: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  delay: string
}) {
  return (
    <ScrollReveal delay={delay} className="h-full lg:col-span-2">
      <div
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 shadow-[0_2px_20px_-4px_rgba(11,30,61,0.10)] ring-1 ring-zinc-900/5 transition-all duration-300 hover:shadow-[0_12px_48px_-8px_rgba(11,30,61,0.16)] sm:flex-row sm:items-start sm:gap-8"
        style={{ background: '#fff' }}
      >
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
            boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.22)',
          }}
        />

        {/* Ghost number */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-5 select-none font-black leading-none tabular-nums"
          style={{ fontSize: '120px', color: 'rgba(11,30,61,0.045)' }}
        >
          {number}
        </span>

        {/* Left: icon + number */}
        <div className="relative mb-5 flex-shrink-0 sm:mb-0">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)',
              color: '#C9A84C',
            }}
          >
            {icon}
          </div>
          <p
            className="mt-3 text-center text-[11px] font-bold tracking-[0.1em] text-zinc-300"
          >
            {number}
          </p>
        </div>

        {/* Right: text */}
        <div className="relative flex flex-1 flex-col">
          <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">{title}</h3>
          <p className="mt-1 text-sm font-medium" style={{ color: '#C9A84C' }}>
            {subtitle}
          </p>

          {/* Gold line */}
          <div
            className="my-4 h-px w-10 transition-all duration-500 group-hover:w-full"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #D4AF37)' }}
          />

          <p className="text-sm leading-relaxed text-zinc-500">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}

// ─── CTA card ─────────────────────────────────────────────────────────────────

function CtaCard({ delay }: { delay: string }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <Link
        href="/contact"
        className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl p-7 text-center transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, #b8892a 0%, #C9A84C 40%, #D4AF37 100%)',
          boxShadow: '0 4px 32px rgba(201,168,76,0.20)',
        }}
      >
        {/* Glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'rgba(255,255,255,0.10)' }}
        />

        {/* Dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.6) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative">
          <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-4 h-8 w-8 text-white/80">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/70">
            Start a Project
          </p>
          <p className="mt-2 text-xl font-bold text-white">
            Let&rsquo;s work together
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/65">
            Available for engagements worldwide
          </p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-white">
            Get in Touch
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
            </svg>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function ExpertiseSection() {
  //
  // Bento layout on lg (3-column grid):
  //   Row 1: [Traffic Forecasting ── col-span-2 ──] [Master Planning]
  //   Row 2: [Feasibility]  [Capacity]  [Strategic Development]
  //   Row 3: [Project Mgmt] [Airline Marketing ── col-span-2 ───────]
  //   Row 4: [Airspace]     [IFP Design]           [CTA card]
  //
  const [feat1, ...rest] = COMPETENCES                         // Traffic (featured)
  const std1 = rest.slice(0, 4)                               // Master, Feasibility, Capacity, Strategic
  const feat2 = rest[4]                                       // Airline Marketing (featured)
  const std2 = rest.slice(5)                                  // Project Mgmt, Airspace, IFP

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-24 sm:py-32"
      aria-label="Areas of expertise"
    >

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* ── Heading ── */}
        <ScrollReveal className="mb-16 max-w-2xl">
          <p
            className="mb-3 text-[11px] font-bold tracking-[0.35em] uppercase"
            style={{ color: '#C9A84C' }}
          >
            Core Competences
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            End-to-End Airport<br className="hidden sm:block" /> Expertise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500">
            From first operational principles as an Air Traffic Controller to senior
            strategic advisory — every engagement draws on the full depth of the aviation stack.
          </p>
        </ScrollReveal>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">

          {/* Row 1: Traffic (wide) + Master Planning */}
          <FeaturedCard key={feat1.title} {...feat1} delay="0s" />
          <Card key={rest[0].title} {...rest[0]} delay="0.08s" />

          {/* Row 2: Feasibility, Capacity, Strategic */}
          {std1.slice(1).map((c, i) => (
            <Card key={c.title} {...c} delay={`${(i + 1) * 0.07}s`} />
          ))}

          {/* Row 3: Project Mgmt + Airline Marketing (wide) */}
          <Card key={std2[0].title} {...std2[0]} delay="0s" />
          <FeaturedCard key={feat2.title} {...feat2} delay="0.08s" />

          {/* Row 4: Airspace, IFP, CTA */}
          {std2.slice(1).map((c, i) => (
            <Card key={c.title} {...c} delay={`${i * 0.07}s`} />
          ))}
          <CtaCard delay="0.14s" />
        </div>

        {/* ── Footer link ── */}
        <ScrollReveal className="mt-12 text-center">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:opacity-80"
            style={{ color: '#C9A84C' }}
          >
            Explore full competence detail
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
