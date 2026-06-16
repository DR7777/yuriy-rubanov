import Link from 'next/link'
import { featuredProjects } from '@/lib/projects'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ProjectCard } from '@/components/ProjectCard'

// ─── Featured Projects section — homepage ─────────────────────────────────────

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24">

      {/* ── Heading ── */}
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
            A selection of recent high-profile engagements across four continents, from IFC-mandated traffic forecasts to national master plans.
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

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <ScrollReveal key={project.id} delay={`${i * 0.09}s`}>
            <ProjectCard project={project} showScope />
          </ScrollReveal>
        ))}
      </div>

      {/* ── Footer CTA ── */}
      <ScrollReveal className="mt-10 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:shadow-md"
        >
          View all {featuredProjects.length > 0 ? '60+' : ''} projects
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-zinc-400">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
          </svg>
        </Link>
      </ScrollReveal>
    </section>
  )
}
