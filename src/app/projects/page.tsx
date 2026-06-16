import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ProjectCard } from '@/components/ProjectCard'
import { projects, projectsByRegion, regionOrder, type ProjectRegion } from '@/lib/projects'
import headerImage from '@/images/photos/aircraft-on-taxiway.jpg'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Full project portfolio of Yuriy Rubanov: 60+ airport consulting engagements across 25+ countries spanning traffic forecasting, master planning, feasibility studies and strategic development.',
}

// ── Region config ─────────────────────────────────────────────────────────────

const REGION_META: Record<ProjectRegion, { icon: string; shortLabel: string; color: string }> = {
  'CIS & Eastern Europe': { icon: '🌍', shortLabel: 'CIS & East',  color: '#3B82F6' },
  'Western Europe':       { icon: '🇪🇺', shortLabel: 'W. Europe',  color: '#6366F1' },
  'Africa':               { icon: '🌍', shortLabel: 'Africa',      color: '#F59E0B' },
  'Asia & Pacific':       { icon: '🌏', shortLabel: 'Asia-Pacific', color: '#10B981' },
  'Middle East':          { icon: '🌍', shortLabel: 'Middle East', color: '#F97316' },
  'Americas':             { icon: '🌎', shortLabel: 'Americas',    color: '#8B5CF6' },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const totalProjects = projects.length
  const totalCountries = [...new Set(projects.map((p) => p.country))].length

  return (
    <>
      {/* ── Cinematic header ─────────────────────────────────────────────── */}
      <div className="relative -mt-24 h-80 overflow-hidden sm:h-[22rem] lg:h-[28rem]">
        <Image
          src={headerImage}
          alt="Wide-body aircraft on taxiway in front of a modern airport terminal"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 50%' }}
          priority
          sizes="100vw"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(8,18,40,0.52)' }} />
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{ background: 'linear-gradient(to top, rgba(8,18,40,0.90) 0%, transparent 100%)' }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <ScrollReveal>
            <p className="mb-3 text-[11px] font-semibold tracking-[0.35em] uppercase text-white/55">
              Track Record
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
            >
              Project Portfolio
            </h1>
            {/* Stat strip */}
            <div className="mt-6 flex items-center justify-center gap-8 sm:gap-12">
              {[
                { value: totalProjects + '+', label: 'Engagements' },
                { value: totalCountries + '+', label: 'Countries' },
                { value: regionOrder.length, label: 'Regions' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-black text-white sm:text-3xl"
                    style={{ color: '#D4AF37' }}
                  >
                    {value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-white/45">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Sticky region filter bar ─────────────────────────────────────── */}
      <div className="sticky top-[72px] z-30 border-b border-zinc-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-8">
          <div className="flex items-center gap-1 py-3">
            {regionOrder.map((region) => {
              const count = projectsByRegion[region]?.length ?? 0
              const meta = REGION_META[region]
              const anchorId = region.toLowerCase().replace(/[^a-z]+/g, '-')

              return (
                <a
                  key={region}
                  href={`#${anchorId}`}
                  className="group flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold text-zinc-500 transition-all duration-200 hover:bg-zinc-50 hover:text-zinc-900"
                >
                  <span className="text-sm leading-none">{meta.icon}</span>
                  <span className="hidden sm:inline">{region}</span>
                  <span className="sm:hidden">{meta.shortLabel}</span>
                  <span
                    className="flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold text-white transition-all duration-200"
                    style={{ background: meta.color }}
                  >
                    {count}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Project sections ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-8">
        <div className="flex flex-col gap-20">
          {regionOrder.map((region) => {
            const regionProjects = projectsByRegion[region]
            if (!regionProjects?.length) return null
            const anchorId = region.toLowerCase().replace(/[^a-z]+/g, '-')
            const meta = REGION_META[region]
            const sorted = [...regionProjects].sort((a, b) => b.year - a.year)

            return (
              <section key={region} id={anchorId} className="scroll-mt-36">

                {/* ── Region header ── */}
                <ScrollReveal className="mb-8">
                  <div className="flex items-center gap-5">
                    {/* Coloured accent */}
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl shadow-sm"
                      style={{ background: `${meta.color}18`, border: `1px solid ${meta.color}30` }}
                    >
                      {meta.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                          {region}
                        </h2>
                        <span
                          className="flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-xs font-bold text-white"
                          style={{ background: meta.color }}
                        >
                          {regionProjects.length}
                        </span>
                      </div>
                      {/* Animated gold bar */}
                      <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-zinc-100">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.min((regionProjects.length / totalProjects) * 100 * 3.5, 100)}%`,
                            background: `linear-gradient(90deg, ${meta.color}, #C9A84C)`,
                          }}
                        />
                      </div>
                    </div>

                    <p className="hidden shrink-0 text-sm text-zinc-400 sm:block">
                      {sorted[0]?.country}{regionProjects.length > 1 ? ` + ${[...new Set(regionProjects.map(p => p.country))].length - 1} more` : ''}
                    </p>
                  </div>
                </ScrollReveal>

                {/* ── Cards grid ── */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {sorted.map((project, i) => (
                    <ScrollReveal key={project.id} delay={`${(i % 3) * 0.07}s`}>
                      <ProjectCard project={project} />
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* ── CTA ── */}
        <ScrollReveal className="mt-24">
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-14 text-center"
            style={{ background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)' }}
          >
            {/* Decorative dots */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(201,168,76,1) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="relative">
              <p className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}>
                Your project next?
              </p>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Let&rsquo;s work together
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
                Available for traffic forecasting, expert reviews, feasibility studies and
                strategic advisory across all regions.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2.5 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.40)',
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}
