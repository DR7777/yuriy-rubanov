import { type Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { StatsSection } from '@/components/StatsSection'
import { ExpertiseSection } from '@/components/ExpertiseSection'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { CTAStrip } from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'Rubanov Airport Consulting — Independent Airport Consultant',
  description:
    'Yuriy Rubanov, Independent Airport Consultant based in Vienna. 36 years of expertise in traffic forecasting, airport master planning, feasibility studies and strategic development across 25+ countries.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ExpertiseSection />
      <FeaturedProjects />
      <CTAStrip />
    </>
  )
}
