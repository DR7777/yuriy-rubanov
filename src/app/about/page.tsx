import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { ScrollReveal } from '@/components/ScrollReveal'
import { TimelineSection } from '@/components/TimelineSection'
import portraitImage from '@/images/portrait-yuriy-rubanov.png'
import headerImage from '@/images/photos/aircraft-ascending-sunset.jpg'

export const metadata: Metadata = {
  title: 'About Yuriy Rubanov',
  description:
    'Learn about Yuriy Rubanov: 36 years of aviation expertise spanning Air Traffic Control, international shipping management and 25+ years of senior airport consulting at Airport Competence GmbH.',
}

// ─── Education & Skills data ──────────────────────────────────────────────────

const EDUCATION = [
  {
    degree: 'Engineer Diploma with Honour',
    field: 'Operation of Air Transport, Air Traffic Controller',
    institution: 'St. Petersburg University of Civil Aviation',
    location: 'St. Petersburg, Russia',
    period: '1982 – 1986',
  },
  {
    degree: 'Diploma',
    field: 'Foreign Languages',
    institution: 'All-Union Courses of Foreign Languages',
    location: 'Moscow, Russia',
    period: '1988 – 1990',
  },
]

const LANGUAGES = [
  { name: 'English', level: 'Professional', pct: 95 },
  { name: 'German', level: 'Professional', pct: 88 },
  { name: 'Russian', level: 'Native', pct: 100 },
  { name: 'Ukrainian', level: 'Native', pct: 100 },
]

const SKILLS = [
  'Quality Management',
  'MS Office Professional',
  'Project Management',
  'Conflict Management',
  'Negotiation',
  'Mathematical Traffic Modelling',
  'Strategic Planning',
  'Stakeholder Management',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── Page hero — edge-to-edge, cancels the header spacer ── */}
      <div className="relative -mt-24 h-80 overflow-hidden sm:h-[22rem] lg:h-[26rem]">
        <Image
          src={headerImage}
          alt="Aircraft ascending at sunset"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(11,30,61,0.5) 0%, rgba(11,30,61,0.8) 100%)',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <ScrollReveal>
            <p
              className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60"
            >
              About
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Yuriy Rubanov
            </h1>
            <p className="mt-2 text-base text-white/75">
              Independent Airport Consultant · Vienna, Austria
            </p>
          </ScrollReveal>
        </div>
      </div>

      <Container className="mt-16 mb-24">
        {/* ── Bio + Portrait ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Left: Bio */}
          <div className="flex flex-col gap-8">
            <ScrollReveal>
              <p
                className="mb-3 text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={{ color: '#C9A84C' }}
              >
                Biography
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                36 Years of Aviation Mastery
              </h2>
            </ScrollReveal>

            <ScrollReveal delay="0.1s" className="space-y-5 text-sm leading-relaxed text-zinc-600">
              <p>
                Yuriy Rubanov is a seasoned aviation and transport expert with over 36 years
                of experience, specialising in the ex-USSR and CIS markets, particularly
                Ukraine, Russia, Kazakhstan and Georgia, while maintaining an extensive
                global track record across four continents.
              </p>
              <p>
                He began his career as an Air Traffic Controller (First Grade) at Kharkiv
                International Airport, Ukraine, where he gained firsthand operational expertise
                in Approach Control and Tower operations. This hands-on foundation remains the
                cornerstone of his consulting work, giving him an unmatched understanding of
                the real-world mechanics of airport and airspace systems.
              </p>
              <p>
                Following his ATC career, Yuriy transitioned to international management with
                Azov Shipping Company, serving as Managing Director of Azov Shipping Holding GmbH
                in Vienna, overseeing strategic operations, subsidiary supervision and international
                business development.
              </p>
              <p>
                In 2000, he joined Airport Consulting Vienna GmbH (now Airport Competence GmbH),
                where he spent 25 years as Manager Central & Eastern Europe. During this time,
                he collaborated on numerous high-profile projects for the World Bank, EBRD, IFC
                and TACIS, delivering traffic forecasts, master plans, feasibility studies and
                strategic development concepts for airports across 25+ countries.
              </p>
              <p>
                Yuriy has developed advanced traffic forecast models leveraging mathematical
                solutions to address complex relationships between traffic drivers and market
                dynamics. His ability to identify key demand determinants and produce reliable,
                defensible forecasts has made him a trusted expert for both international
                financial institutions and private investors.
              </p>
              <p>
                In 2026, Yuriy launched <strong className="text-zinc-800">Rubanov Airport Consulting</strong>, bringing
                the same rigour, depth and global network to independent project-based
                engagements, expert review mandates and long-term advisory roles.
              </p>
            </ScrollReveal>

            {/* Clients / financiers */}
            <ScrollReveal delay="0.15s">
              <h3 className="mb-4 text-sm font-semibold text-zinc-900">
                Key Clients & Financing Partners
              </h3>
              <div className="flex flex-wrap gap-2">
                {['World Bank', 'EBRD', 'IFC', 'TACIS', 'Airport Competence GmbH', 'Private Investors'].map((org) => (
                  <span
                    key={org}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Portrait + Quick Facts */}
          <div className="flex flex-col gap-6">
            {/* Portrait */}
            <ScrollReveal
              fade
              className="overflow-hidden rounded-2xl shadow-[0_16px_48px_-8px_rgba(11,30,61,0.20)] ring-1 ring-zinc-900/5"
            >
              <Image
                src={portraitImage}
                alt="Yuriy Rubanov, Independent Airport Consultant"
                className="w-full object-cover"
                sizes="(max-width: 1024px) 80vw, 340px"
              />
            </ScrollReveal>

            {/* Quick facts card */}
            <ScrollReveal
              delay="0.1s"
              className="rounded-2xl bg-gradient-to-br from-[#0B1E3D] to-[#1E3A5F] p-6 text-white shadow-[0_8px_32px_-8px_rgba(11,30,61,0.30)]"
            >
              <div className="gold-line mb-5 rounded-full" />
              <dl className="flex flex-col gap-4">
                {[
                  { label: 'Based in', value: 'Vienna, Austria' },
                  { label: 'Experience', value: '36 years in aviation' },
                  { label: 'Projects', value: '60+ airport engagements' },
                  { label: 'Countries', value: '25+ worldwide' },
                  { label: 'Languages', value: 'EN · DE · RU · UA' },
                  { label: 'Specialisation', value: 'CIS & global markets' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between gap-4">
                    <dt className="text-xs text-white/50 flex-shrink-0">{label}</dt>
                    <dd className="text-xs font-semibold text-right text-white/90">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 pt-5 border-t border-white/10">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold text-[#0B1E3D] transition hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)' }}
                >
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Career Timeline ── */}
        <div className="mt-20 border-t border-zinc-100 pt-16">
          <TimelineSection />
        </div>

        {/* ── Education ── */}
        <div className="mt-16 border-t border-zinc-100 pt-16">
          <ScrollReveal className="mb-8">
            <p
              className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase"
              style={{ color: '#C9A84C' }}
            >
              Education
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Academic Background
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {EDUCATION.map((edu, i) => (
              <ScrollReveal
                key={i}
                delay={`${i * 0.1}s`}
                className="rounded-2xl bg-white p-6 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.07)] ring-1 ring-zinc-900/5"
              >
                <span className="text-xs font-semibold text-zinc-400">{edu.period}</span>
                <h3 className="mt-2 text-sm font-bold text-zinc-900">{edu.degree}</h3>
                <p className="mt-1 text-sm text-zinc-600">{edu.field}</p>
                <div className="mt-3 border-t border-zinc-100 pt-3">
                  <p className="text-xs font-medium text-zinc-500">{edu.institution}</p>
                  <p className="text-xs text-zinc-400">{edu.location}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── Languages ── */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 border-t border-zinc-100 pt-16">
          <div>
            <ScrollReveal className="mb-8">
              <p
                className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={{ color: '#C9A84C' }}
              >
                Languages
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Multilingual Communication
              </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-5">
              {LANGUAGES.map((lang, i) => (
                <ScrollReveal key={lang.name} delay={`${i * 0.08}s`} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-zinc-800">{lang.name}</span>
                    <span className="text-xs text-zinc-400">{lang.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${lang.pct}%`,
                        background: 'linear-gradient(90deg, #C9A84C, #D4AF37)',
                      }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <ScrollReveal className="mb-8">
              <p
                className="mb-2 text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={{ color: '#C9A84C' }}
              >
                Professional Skills
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Core Capabilities
              </h2>
            </ScrollReveal>

            <ScrollReveal delay="0.1s" className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-[#C9A84C]/50 hover:bg-amber-50"
                >
                  {skill}
                </span>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </>
  )
}
