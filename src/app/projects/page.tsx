import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ProjectCard } from '@/components/ProjectCard'
import { projects, projectsByRegion, regionOrder } from '@/lib/projects'
import headerImage from '@/images/photos/aircraft-on-taxiway.jpg'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Full project portfolio of Yuriy Rubanov — 60+ airport consulting engagements across 25+ countries spanning traffic forecasting, master planning, feasibility studies and strategic development.',
}

const REGION_ICONS: Record<string, string> = {
  'CIS & Eastern Europe': '🌍',
  'Western Europe':       '🇪🇺',
  'Africa':               '🌍',
  'Asia & Pacific':       '🌏',
  'Middle East':          '🌍',
  'Americas':             '🌎',
}

export default function ProjectsPage() {
  const totalProjects = projects.length

  return (
    <>
      {/* ── Hero banner ── */}
      <div className="relative h-56 overflow-hidden sm:h-64 lg:h-72">
        <Image
          src={headerImage}
          alt="Wide-body aircraft on taxiway in front of modern terminal"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 50%' }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(11,30,61,0.45) 0%, rgba(11,30,61,0.82) 100%)',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <ScrollReveal>
            <p className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60">
              Track Record
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Project Portfolio
            </h1>
            <p className="mt-2 text-sm text-white/70">
              {totalProjects}+ engagements across {regionOrder.length} global regions
            </p>
          </ScrollReveal>
        </div>
      </div>

      <Container className="py-14 sm:py-20">
        {/* ── Region summary pills ── */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap gap-2">
            {regionOrder.map((region) => {
              const count = projectsByRegion[region]?.length ?? 0
              return (
                <a
                  key={region}
                  href={`#${region.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                  className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm transition hover:border-zinc-300 hover:text-zinc-900"
                >
                  <span>{REGION_ICONS[region]}</span>
                  {region}
                  <span
                    className="rounded-full px-1.5 py-0.5 text-[10px] font-semibold text-white"
                    style={{ background: '#0B1E3D' }}
                  >
                    {count}
                  </span>
                </a>
              )
            })}
          </div>
        </ScrollReveal>

        {/* ── Regions ── */}
        <div className="flex flex-col gap-16 sm:gap-20">
          {regionOrder.map((region) => {
            const regionProjects = projectsByRegion[region]
            if (!regionProjects?.length) return null
            const anchorId = region.toLowerCase().replace(/[^a-z]+/g, '-')

            return (
              <section key={region} id={anchorId} className="scroll-mt-28">
                {/* Region heading */}
                <ScrollReveal className="mb-6 flex items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{REGION_ICONS[region]}</span>
                      <h2 className="text-lg font-bold text-zinc-900 sm:text-xl">
                        {region}
                      </h2>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                        style={{ background: 'linear-gradient(135deg, #0B1E3D, #1E3A5F)' }}
                      >
                        {regionProjects.length}
                      </span>
                    </div>
                    <div
                      className="mt-2 h-px w-16"
                      style={{ background: 'linear-gradient(90deg, #C9A84C, #D4AF37)' }}
                    />
                  </div>
                  <div className="flex-1 h-px bg-zinc-100" />
                </ScrollReveal>

                {/* Project cards grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {regionProjects
                    .sort((a, b) => b.year - a.year)
                    .map((project, i) => (
                      <ScrollReveal
                        key={project.id}
                        delay={`${(i % 3) * 0.07}s`}
                      >
                        <ProjectCard project={project} />
                      </ScrollReveal>
                    ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* ── CTA ── */}
        <ScrollReveal className="mt-20 rounded-2xl bg-gradient-to-br from-[#0B1E3D] to-[#1E3A5F] p-8 text-center text-white shadow-[0_12px_40px_-8px_rgba(11,30,61,0.30)]">
          <p
            className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase"
            style={{ color: '#C9A84C' }}
          >
            Your project next?
          </p>
          <h3 className="text-xl font-bold">
            Let&rsquo;s work together
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
            Available for traffic forecasting, expert reviews, feasibility studies and
            strategic advisory across all regions.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)' }}
          >
            Get in Touch
          </Link>
        </ScrollReveal>
      </Container>
    </>
  )
}
