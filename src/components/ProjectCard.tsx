'use client'

import { type Project } from '@/lib/projects'

// ─── Country → ISO-2 code (used as ghost watermark) ─────────────────────────

const COUNTRY_CODE: Record<string, string> = {
  Kazakhstan: 'KZ', Philippines: 'PH', Uzbekistan: 'UZ', France: 'FR',
  'The Gambia': 'GM', Germany: 'DE', Ukraine: 'UA', Russia: 'RU',
  Georgia: 'GE', Bulgaria: 'BG', Estonia: 'EE', Brazil: 'BR',
  Oman: 'OM', Nigeria: 'NG', 'South Africa': 'ZA', Montenegro: 'ME',
  Croatia: 'HR', Hungary: 'HU', Mexico: 'MX', Tajikistan: 'TJ',
  Moldova: 'MD', Romania: 'RO',
}

// ─── Role → short label ───────────────────────────────────────────────────────

function shortRole(role: string) {
  const r = role.split(',')[0].trim()
  if (r.includes('Project Manager')) return 'Project Manager'
  if (r.includes('Deputy'))          return 'Deputy PM'
  if (r.includes('Traffic Forecast')) return 'Traffic Expert'
  if (r.includes('Market'))          return 'Market Expert'
  if (r.includes('Strategy'))        return 'Strategy Expert'
  return r
}

// ─── Card ─────────────────────────────────────────────────────────────────────

export function ProjectCard({
  project,
  showScope = false,
}: {
  project: Project
  showScope?: boolean
}) {
  const code = COUNTRY_CODE[project.country] ?? project.country.slice(0, 2).toUpperCase()

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
      style={{ boxShadow: '0 2px 16px -4px rgba(11,30,61,0.12)' }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 20px 48px -8px rgba(11,30,61,0.26)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px -4px rgba(11,30,61,0.12)'
      }}
    >
      {/* ── Navy header ──────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden px-5 py-4"
        style={{ background: 'linear-gradient(135deg, #0B1E3D 0%, #1a3666 100%)' }}
      >
        {/* Ghost country code watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-2 select-none font-black leading-none tracking-tighter"
          style={{ fontSize: '80px', color: 'rgba(255,255,255,0.09)' }}
        >
          {code}
        </span>

        {/* Location · country · year */}
        <div className="flex items-start justify-between gap-3">
          {/* Left: city + country */}
          <div className="min-w-0">
            <p className="text-sm font-bold leading-snug text-white">
              {project.location}
            </p>
            <p className="mt-0.5 text-xs font-medium text-white/70">
              {project.country}
            </p>
          </div>

          {/* Right: year */}
          <span
            className="relative flex-shrink-0 text-2xl font-black tabular-nums leading-none"
            style={{ color: '#C9A84C' }}
          >
            {project.year}
          </span>
        </div>

        {/* Gold accent line — expands on hover */}
        <div
          className="mt-4 h-px w-8 transition-all duration-500 group-hover:w-full"
          style={{ background: 'linear-gradient(90deg, #C9A84C, #D4AF37)' }}
        />
      </div>

      {/* ── White body ───────────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-3 bg-white px-5 py-4">
        <div className="flex-1">
          <h3 className="text-sm font-bold leading-snug text-zinc-900">
            {project.airport}
          </h3>
          {showScope ? (
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              {project.scope}
            </p>
          ) : (
            <p className="mt-1.5 text-xs font-medium text-zinc-400">
              {project.title}
            </p>
          )}
        </div>

        {/* Footer: period + role badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-100 pt-3">
          <span className="text-[10px] text-zinc-400">{project.period}</span>
          <div className="flex flex-wrap gap-1.5">
            <span
              className="rounded-md px-2 py-0.5 text-[10px] font-semibold"
              style={{ background: 'rgba(11,30,61,0.07)', color: '#0B1E3D' }}
            >
              {shortRole(project.role)}
            </span>
            {project.client && (
              <span
                className="rounded-md px-2 py-0.5 text-[10px] font-semibold"
                style={{ background: 'rgba(201,168,76,0.12)', color: '#92700a' }}
              >
                {project.client}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
