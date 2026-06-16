'use client'

import { useEffect, useRef, useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'

// ─── CountUp hook ─────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    let raf: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
      else setCount(target)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])

  return count
}

// ─── Single stat card ─────────────────────────────────────────────────────────

interface StatProps {
  value: number
  suffix: string
  label: string
  sublabel: string
  started: boolean
  delay: string
  icon: React.ReactNode
}

function StatCard({ value, suffix, label, sublabel, started, delay, icon }: StatProps) {
  const count = useCountUp(value, 1600, started)

  return (
    <ScrollReveal
      className="flex flex-col items-center gap-3 rounded-2xl bg-white px-6 py-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] ring-1 ring-zinc-900/5 text-center"
      delay={delay}
    >
      {/* Icon */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
        style={{ background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)' }}
      >
        {icon}
      </div>

      {/* Counter */}
      <div className="flex items-end gap-0.5">
        <span
          className="text-4xl font-bold tabular-nums leading-none tracking-tight"
          style={{ color: '#0B1E3D' }}
        >
          {count}
        </span>
        <span
          className="mb-0.5 text-2xl font-bold leading-none"
          style={{ color: '#C9A84C' }}
        >
          {suffix}
        </span>
      </div>

      {/* Labels */}
      <div>
        <p className="text-sm font-semibold text-zinc-800">{label}</p>
        <p className="mt-0.5 text-xs text-zinc-400">{sublabel}</p>
      </div>
    </ScrollReveal>
  )
}

// ─── Stats data ───────────────────────────────────────────────────────────────

const STATS = [
  {
    value: 36,
    suffix: '+',
    label: 'Years of Experience',
    sublabel: 'From ATC to global consulting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 60,
    suffix: '+',
    label: 'Airport Projects',
    sublabel: 'Across all project types',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: 25,
    suffix: '+',
    label: 'Countries',
    sublabel: 'Europe · Asia · Africa · Americas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <circle cx="12" cy="12" r="9"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: 4,
    suffix: '',
    label: 'Languages',
    sublabel: 'English · German · Russian · Ukrainian',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

// ─── Section ─────────────────────────────────────────────────────────────────

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delays = ['0s', '0.1s', '0.2s', '0.3s']

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-5xl px-4 py-16 sm:px-8 sm:py-20"
      aria-label="Key statistics"
    >
      {/* Section label */}
      <ScrollReveal className="mb-12 text-center">
        <p
          className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase"
          style={{ color: '#C9A84C' }}
        >
          By the numbers
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          A Career Built on Precision
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
          Three decades of delivering reliable forecasts, actionable strategies and
          measurable outcomes for airports, governments and financial institutions.
        </p>
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <StatCard
            key={stat.label}
            {...stat}
            started={started}
            delay={delays[i]}
          />
        ))}
      </div>
    </section>
  )
}
