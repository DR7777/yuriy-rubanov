'use client'

import { type Project } from '@/lib/projects'

// ─── Country code → ISO 2-letter abbreviation ─────────────────────────────────

const COUNTRY_CODE: Record<string, string> = {
  Kazakhstan: 'KZ', Philippines: 'PH', Uzbekistan: 'UZ', France: 'FR',
  'The Gambia': 'GM', Germany: 'DE', Ukraine: 'UA', Russia: 'RU',
  Georgia: 'GE', Bulgaria: 'BG', Estonia: 'EE', Brazil: 'BR',
  Oman: 'OM', Nigeria: 'NG', 'South Africa': 'ZA', Montenegro: 'ME',
  Croatia: 'HR', Hungary: 'HU', Mexico: 'MX', Tajikistan: 'TJ',
  Moldova: 'MD', Romania: 'RO',
}

const COUNTRY_FLAGS: Record<string, string> = {
  Kazakhstan: '🇰🇿', Philippines: '🇵🇭', Uzbekistan: '🇺🇿', France: '🇫🇷',
  'The Gambia': '🇬🇲', Germany: '🇩🇪', Ukraine: '🇺🇦', Russia: '🇷🇺',
  Georgia: '🇬🇪', Bulgaria: '🇧🇬', Estonia: '🇪🇪', Brazil: '🇧🇷',
  Oman: '🇴🇲', Nigeria: '🇳🇬', 'South Africa': '🇿🇦', Montenegro: '🇲🇪',
  Croatia: '🇭🇷', Hungary: '🇭🇺', Mexico: '🇲🇽', Tajikistan: '🇹🇯',
  Moldova: '🇲🇩', Romania: '🇷🇴',
}

// Role → short label
function shortRole(role: string) {
  const r = role.split(',')[0].trim()
  if (r.includes('Project Manager')) return 'Project Manager'
  if (r.includes('Deputy')) return 'Deputy PM'
  if (r.includes('Traffic Forecast')) return 'Traffic Expert'
  if (r.includes('Market')) return 'Market Expert'
  if (r.includes('Strategy')) return 'Strategy Expert'
  return r
}

// ─── Card ─────────────────────────────────────────────────────────────────────

export function ProjectCard({ project }: { project: Project }) {
  const code = COUNTRY_CODE[project.country] ?? project.country.slice(0, 2).toUpperCase()
  const flag = COUNTRY_FLAGS[project.country] ?? '🌍'

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
      style={{
        boxShadow: '0 2px 16px -4px rgba(11,30,61,0.12)',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow =
          '0 20px 48px -8px rgba(11,30,61,0.26)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow =
          '0 2px 16px -4px rgba(11,30,61,0.12)'
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
          className="pointer-events-none absolute -right-2 -top-1 select-none font-black leading-none tracking-tighter text-white/[0.07]"
          style={{ fontSize: '72px' }}
        >
          {code}
        </span>

        {/* Top row: flag + year */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-2xl leading-none" role="img" aria-label={project.country}>
              {flag}
            </span>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-white/45">
              {project.location}
            </p>
          </div>
          <div className="text-right">
            <span
              className="text-2xl font-black tabular-nums leading-none"
              style={{ color: 'rgba(201,168,76,0.22)' }}
            >
              {project.year}
            </span>
            <p className="mt-1 text-[9px] font-semibold tracking-[0.14em] uppercase text-white/30">
              {project.country}
            </p>
          </div>
        </div>

        {/* Gold accent line */}
        <div
          className="mt-4 h-px w-8 transition-all duration-500 group-hover:w-full"
          style={{ background: 'linear-gradient(90deg, #C9A84C, #D4AF37)' }}
        />
      </div>

      {/* ── White body ───────────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-3 bg-white px-5 py-4">
        {/* Airport name */}
        <div className="flex-1">
          <h3 className="text-sm font-bold leading-snug text-zinc-900">
            {project.airport}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            {project.title}
          </p>
        </div>

        {/* Footer: period + role */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-100 pt-3">
          <span className="text-[10px] text-zinc-400">{project.period}</span>
          <div className="flex flex-wrap gap-1.5">
            <span
              className="rounded-md px-2 py-0.5 text-[10px] font-semibold"
              style={{
                background: 'rgba(11,30,61,0.07)',
                color: '#0B1E3D',
              }}
            >
              {shortRole(project.role)}
            </span>
            {project.client && (
              <span
                className="rounded-md px-2 py-0.5 text-[10px] font-semibold"
                style={{
                  background: 'rgba(201,168,76,0.12)',
                  color: '#92700a',
                }}
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
