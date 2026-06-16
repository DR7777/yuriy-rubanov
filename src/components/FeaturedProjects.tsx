import Link from 'next/link'
import { featuredProjects } from '@/lib/projects'
import { ScrollReveal } from '@/components/ScrollReveal'

// ─── Region colour map ────────────────────────────────────────────────────────

const REGION_STYLES: Record<string, { bg: string; text: string }> = {
  'CIS & Eastern Europe': { bg: 'bg-blue-50', text: 'text-blue-700' },
  'Western Europe':       { bg: 'bg-sky-50',  text: 'text-sky-700' },
  'Africa':               { bg: 'bg-amber-50', text: 'text-amber-700' },
  'Asia & Pacific':       { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  'Middle East':          { bg: 'bg-orange-50', text: 'text-orange-700' },
  'Americas':             { bg: 'bg-purple-50', text: 'text-purple-700' },
}

// ─── Country flags (emoji) ────────────────────────────────────────────────────

const COUNTRY_FLAGS: Record<string, string> = {
  Kazakhstan: '🇰🇿',
  Philippines: '🇵🇭',
  Uzbekistan: '🇺🇿',
  France: '🇫🇷',
  'The Gambia': '🇬🇲',
  Germany: '🇩🇪',
  Ukraine: '🇺🇦',
  Russia: '🇷🇺',
  Georgia: '🇬🇪',
  Bulgaria: '🇧🇬',
  Estonia: '🇪🇪',
  Brazil: '🇧🇷',
  Oman: '🇴🇲',
  Nigeria: '🇳🇬',
  'South Africa': '🇿🇦',
  Montenegro: '🇲🇪',
  Croatia: '🇭🇷',
  Hungary: '🇭🇺',
  Mexico: '🇲🇽',
  Tajikistan: '🇹🇯',
  Moldova: '🇲🇩',
  Romania: '🇷🇴',
}

// ─── Single project card ──────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number]
  index: number
}) {
  const regionStyle = REGION_STYLES[project.region] ?? { bg: 'bg-zinc-50', text: 'text-zinc-600' }
  const flag = COUNTRY_FLAGS[project.country] ?? '🌍'
  const delay = `${index * 0.1}s`

  return (
    <ScrollReveal
      delay={delay}
      className="group flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.07)] ring-1 ring-zinc-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(11,30,61,0.14)]"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <span className="text-2xl leading-none" role="img" aria-label={project.country}>
          {flag}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide ${regionStyle.bg} ${regionStyle.text}`}
        >
          {project.region}
        </span>
      </div>

      {/* Project info */}
      <div className="flex-1">
        <p className="text-[11px] font-semibold tracking-wide text-zinc-400 uppercase">
          {project.location}, {project.country}
        </p>
        <h3 className="mt-1 text-sm font-semibold leading-snug text-zinc-900">
          {project.airport}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          {project.scope}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
        <div>
          <p className="text-[11px] text-zinc-400">{project.period}</p>
          <p className="text-xs font-medium text-zinc-600">{project.role}</p>
        </div>
        {project.client && (
          <span className="rounded-md bg-zinc-50 px-2 py-1 text-[10px] font-medium text-zinc-500 ring-1 ring-zinc-200">
            {project.client}
          </span>
        )}
      </div>
    </ScrollReveal>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-8 sm:py-24">
      {/* Heading */}
      <ScrollReveal className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase"
            style={{ color: '#C9A84C' }}
          >
            Recent Work
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-500">
            A selection of recent high-profile engagements across four continents —
            from IFC-mandated traffic forecasts to national master plans.
          </p>
        </div>
        <Link
          href="/projects"
          className="flex-shrink-0 text-sm font-semibold transition-colors hover:opacity-75"
          style={{ color: '#0B1E3D' }}
        >
          View all projects →
        </Link>
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
