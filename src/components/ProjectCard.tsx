// ─── ProjectCard — reusable card for the /projects listing ───────────────────

import { type Project } from '@/lib/projects'

const REGION_STYLES: Record<string, { bg: string; text: string }> = {
  'CIS & Eastern Europe': { bg: 'bg-blue-50',    text: 'text-blue-700' },
  'Western Europe':       { bg: 'bg-sky-50',     text: 'text-sky-700' },
  'Africa':               { bg: 'bg-amber-50',   text: 'text-amber-700' },
  'Asia & Pacific':       { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  'Middle East':          { bg: 'bg-orange-50',  text: 'text-orange-700' },
  'Americas':             { bg: 'bg-purple-50',  text: 'text-purple-700' },
}

const COUNTRY_FLAGS: Record<string, string> = {
  Kazakhstan: '🇰🇿', Philippines: '🇵🇭', Uzbekistan: '🇺🇿', France: '🇫🇷',
  'The Gambia': '🇬🇲', Germany: '🇩🇪', Ukraine: '🇺🇦', Russia: '🇷🇺',
  Georgia: '🇬🇪', Bulgaria: '🇧🇬', Estonia: '🇪🇪', Brazil: '🇧🇷',
  Oman: '🇴🇲', Nigeria: '🇳🇬', 'South Africa': '🇿🇦', Montenegro: '🇲🇪',
  Croatia: '🇭🇷', Hungary: '🇭🇺', Mexico: '🇲🇽', Tajikistan: '🇹🇯',
  Moldova: '🇲🇩', Romania: '🇷🇴',
}

export function ProjectCard({ project }: { project: Project }) {
  const regionStyle =
    REGION_STYLES[project.region] ?? { bg: 'bg-zinc-50', text: 'text-zinc-600' }
  const flag = COUNTRY_FLAGS[project.country] ?? '🌍'

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.07)] ring-1 ring-zinc-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_-6px_rgba(11,30,61,0.12)]">
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <span className="text-xl leading-none" role="img" aria-label={project.country}>
          {flag}
        </span>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${regionStyle.bg} ${regionStyle.text}`}
        >
          {project.region}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-[10px] font-semibold tracking-wide text-zinc-400 uppercase">
          {project.location}, {project.country} · {project.year}
        </p>
        <h3 className="mt-1 text-sm font-semibold leading-snug text-zinc-900">
          {project.airport}
        </h3>
        <p className="mt-1 text-xs font-medium text-zinc-500">{project.title}</p>
      </div>

      {/* Role badge */}
      <div className="flex flex-wrap items-center gap-1.5 border-t border-zinc-100 pt-3">
        <span className="rounded-md bg-zinc-50 px-2 py-0.5 text-[10px] font-medium text-zinc-600 ring-1 ring-zinc-200">
          {project.role.split(',')[0]}
        </span>
        {project.client && (
          <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700 ring-1 ring-amber-200">
            {project.client}
          </span>
        )}
      </div>
    </div>
  )
}
