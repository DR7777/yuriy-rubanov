import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { ScrollReveal } from '@/components/ScrollReveal'
import departuresBoard from '@/images/photos/airport-departures-board.jpg'
import aerialApron from '@/images/photos/aerial-airport-apron.jpg'
import aerialGate from '@/images/photos/aerial-aircraft-at-gate.jpg'

export const metadata: Metadata = {
  title: 'Expertise',
  description:
    'Detailed overview of Yuriy Rubanov\'s airport consulting competences: traffic forecasting, master planning, feasibility studies, capacity calculation, strategic development, project management, airline marketing, airspace coordination and IFP design.',
}

// ─── Competence data (expanded descriptions) ──────────────────────────────────

const COMPETENCES = [
  {
    id: 'traffic-forecasting',
    title: 'Traffic Forecasting & Market Assessment',
    tagline: 'Reliable demand analysis underpinning every investment decision.',
    description: [
      'Yuriy has developed and refined advanced traffic forecast models over more than two decades, applying mathematical solutions to identify the complex relationships between traffic drivers, economic indicators, airline strategy and competitive dynamics.',
      'His approach identifies key demand determinants specific to each market — whether an emerging CIS hub, a privatising Brazilian airport or a concession candidate in West Africa — and builds transparent, defensible models that stand up to scrutiny by international financiers including the World Bank, EBRD and IFC.',
      'Services include short-, medium- and long-term passenger and cargo demand forecasts; peak-hour and seasonal traffic analysis; scenario modelling under different economic and regulatory assumptions; and independent second-opinion reviews of existing forecasts.',
    ],
    examples: ['IFC — Philippines Airports (Part A & B)', 'Tashkent New Gateway Hub (IFC)', 'Nantes Atlantique Airport', 'Cape Winelands Airport', 'Frankfurt-Hahn Airport'],
    image: departuresBoard,
    imageAlt: 'Airport departures board showing global destinations',
  },
  {
    id: 'master-planning',
    title: 'Airport Master Planning',
    tagline: 'Holistic infrastructure roadmaps aligned to realistic demand.',
    description: [
      'A robust master plan is the foundation of any major airport investment. Yuriy has led or contributed to master plans for airports ranging from small regional facilities to major international hubs, spanning timeframes of 20–40 years.',
      'Each master plan integrates traffic forecasts, capacity analysis, phased infrastructure requirements, landside access, commercial development and regulatory compliance — delivering a coherent, implementable roadmap rather than an academic exercise.',
      'Experience includes World Bank–standard master plans, IFC pre-investment feasibility frameworks, and independent master plan updates and reviews for airports across Eastern Europe, Russia and the CIS.',
    ],
    examples: ['Atyrau International Airport, Kazakhstan', 'Ufa International Airport, Russia', 'Boryspil International Airport, Ukraine', 'Kyiv "Zhulyany" Airport', 'Vnukovo International Airport'],
    image: aerialApron,
    imageAlt: 'Aerial view of multiple aircraft at airport gates',
  },
  {
    id: 'feasibility-studies',
    title: 'Feasibility Studies',
    tagline: 'Rigorous analysis from concept through investment decision.',
    description: [
      'Yuriy has led full feasibility and pre-feasibility studies for airport terminals, runways, FBO facilities, cargo operations, MRO businesses and airport city concepts — across single-asset and multi-airport programmes.',
      'Studies are structured to meet international lender requirements (World Bank, EBRD, IFC) and private investor expectations, combining demand analysis, infrastructure costing, financial modelling, risk assessment and implementation scheduling.',
      'Expertise spans new terminal feasibility (including Boryspil\'s award-winning Terminal D concept), ground handling restructuring studies, hotel operator searches and airport city masterplans.',
    ],
    examples: ['Tallinn Airport — Passenger Terminal & Apron Feasibility', 'Boryspil Terminal D — Pre-feasibility', 'Boryspil FBO Business Pre-feasibility', '"Zhulyany" MRO Market Survey', 'Tököl Airport Pre-feasibility (Hungary)'],
    image: aerialGate,
    imageAlt: 'Aerial close-up of aircraft docked at terminal gate',
  },
  {
    id: 'capacity-calculation',
    title: 'Capacity Calculation',
    tagline: 'Identifying constraints before they become crises.',
    description: [
      'Capacity analysis translates traffic forecasts into actionable infrastructure triggers — determining precisely when and how terminals, aprons, runways and landside facilities reach their limits under different growth scenarios.',
      'Yuriy applies IATA methodology and proprietary modelling frameworks to assess throughput capacity for existing assets, identify bottlenecks, and define the timing and sizing of capacity expansions.',
      'Peak-hour analysis — critical for bid preparation and concession negotiations — has been a recurring deliverable across French, African and Asian airport engagements.',
    ],
    examples: ['Nantes Atlantique — Peak Hour Analysis', 'Boryspil — Terminal Capacity Studies', 'Tallinn — Apron Capacity Feasibility', 'Multiple CIS airports — Runway & Terminal Capacity'],
    image: null,
    imageAlt: '',
  },
  {
    id: 'strategic-development',
    title: 'Strategic Development',
    tagline: 'Market positioning and competitive strategy for airports at every scale.',
    description: [
      'Strategic development engagements help airports understand where they sit in the competitive landscape and define a clear, actionable path to sustainable growth. Yuriy has delivered strategic development concepts for airports from small regional facilities to major international hubs.',
      'Work encompasses competitive market analysis, catchment area studies, airline attraction strategies, commercial revenue development, privatisation positioning and Board-level advisory.',
      'Clients include airport operators, national governments, private equity investors and development finance institutions — all requiring strategic clarity backed by rigorous analysis.',
    ],
    examples: ['Pulkovo Airport Growth Strategy', 'Odesa Airport — Airport City Concept', 'Sofia Airport — Business Plan & Strategic Updates', 'Multiple Ukraine airports — Strategic Positioning', 'Basel Aero Group (Russia)'],
    image: null,
    imageAlt: '',
  },
  {
    id: 'project-management',
    title: 'Project & Programme Management',
    tagline: 'Delivering complex aviation projects on time and on budget.',
    description: [
      'Yuriy has managed and co-managed airport consulting projects of all sizes — from rapid two-week expert reviews through multi-year, multi-airport programme management mandates. He has acted as Project Manager, Deputy Project Manager and Lead Expert across more than 60 engagements.',
      'Experience covers the full project lifecycle: scope definition, proposal and bid preparation, team leadership, client interface, quality assurance, reporting and knowledge transfer.',
      'Particularly strong track record in managing projects for international financial institutions (IFC, World Bank, EBRD) where rigorous documentation, procurement compliance and multi-stakeholder coordination are essential.',
    ],
    examples: ['IFC Philippines Airports Programme (Part A & B)', 'Tashkent New Gateway Hub — IFC Assignment', 'Atyrau Master Plan — Programme Management', 'Ukraine 2020 Airport Development Programme'],
    image: null,
    imageAlt: '',
  },
  {
    id: 'airline-marketing',
    title: 'Airline Marketing & Route Development',
    tagline: 'Connecting airports with the airlines that can grow their networks.',
    description: [
      'Growing passenger numbers requires more than infrastructure — it requires attracting the right airlines and the right routes. Yuriy has delivered airline marketing strategies, target route analyses and incentive framework designs for airports seeking to expand their network.',
      'Work includes airline traffic study analysis (TSA), competitive positioning versus other catchment area airports, identification of underserved origin-destination pairs and structured outreach frameworks for airline negotiations.',
    ],
    examples: ['Kharkiv International Airport — Airline Marketing', 'Yaroslavl "Tunoshna" — Airline Marketing (TSA)', 'Kruger Mpumalanga International Airport — Marketing & Sales Strategy', 'Basel Aero Airports — Business Plan'],
    image: null,
    imageAlt: '',
  },
  {
    id: 'airspace-coordination',
    title: 'Civil & Military Airspace Coordination',
    tagline: 'Rooted in eight years of First Grade Air Traffic Control.',
    description: [
      'Yuriy\'s eight years as a First Grade Air Traffic Controller (Approach Control and Tower) at Kharkiv International Airport give him a uniquely operational perspective on airspace structure, coordination procedures and ATC capacity.',
      'This background enables genuine expert engagement on airspace design, civil-military coordination, procedure development and operational capacity assessments — going well beyond the theoretical knowledge of a desk-only consultant.',
      'Experience covers airspace analysis within airport development studies and standalone airspace coordination engagements at both civil and military aerodromes.',
    ],
    examples: ['Vaziani Aerodrome — Airspace & IFP Design', 'Multiple CIS Airport Studies — Airspace Components', 'UkSATSE — 8 years operational ATC (Kharkiv)'],
    image: null,
    imageAlt: '',
  },
  {
    id: 'ifp-design',
    title: 'Instrument Flight Procedure Design',
    tagline: 'Safe, efficient procedures from first principles.',
    description: [
      'Instrument Flight Procedure (IFP) design requires a rare combination of regulatory knowledge (ICAO PANS-OPS), aeronautical expertise and practical operational understanding. Yuriy has led IFP design and airspace structure projects for civil and military aerodromes.',
      'Deliverables include approach, departure and en-route procedure design; airspace classification and structure proposals; coordination with civil aviation authorities; and implementation support documentation.',
    ],
    examples: ['Vaziani Aerodrome (Georgia) — IFP Design & Airspace for Sakaeronavigatsia', 'Natakhtari Aerodrome (Georgia) — Infrastructure & Airspace Assessment'],
    image: null,
    imageAlt: '',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExpertisePage() {
  return (
    <>
      {/* ── Page header ── */}
      <div
        className="relative py-20 sm:py-24"
        style={{ background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)' }}
      >
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(201,168,76,1) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-8">
          <ScrollReveal>
            <p className="mb-3 text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50">
              What Yuriy Brings
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Areas of Expertise
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Nine specialised competences spanning the full spectrum of airport consulting —
              from first operational principles through to board-level strategic advisory.
            </p>
          </ScrollReveal>

          {/* Quick nav pills */}
          <ScrollReveal delay="0.15s" className="mt-8 flex flex-wrap justify-center gap-2">
            {COMPETENCES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/70 transition hover:bg-white/20 hover:text-white"
              >
                {c.title.split('&')[0].trim()}
              </a>
            ))}
          </ScrollReveal>
        </div>
      </div>

      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-20 sm:gap-24">
          {COMPETENCES.map((comp, i) => (
            <section key={comp.id} id={comp.id} className="scroll-mt-28">
              <div
                className={`grid grid-cols-1 gap-10 ${
                  comp.image ? 'lg:grid-cols-[1fr_420px]' : ''
                } ${comp.image && i % 2 === 1 ? 'lg:grid-cols-[420px_1fr]' : ''}`}
              >
                {/* Text column */}
                <div
                  className={comp.image && i % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <ScrollReveal>
                    {/* Step counter */}
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #0B1E3D 0%, #1E3A5F 100%)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-zinc-100" />
                    </div>

                    <h2 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                      {comp.title}
                    </h2>
                    <p
                      className="mt-1 text-sm font-medium"
                      style={{ color: '#C9A84C' }}
                    >
                      {comp.tagline}
                    </p>
                  </ScrollReveal>

                  <div className="mt-5 space-y-4">
                    {comp.description.map((para, j) => (
                      <ScrollReveal key={j} delay={`${j * 0.08}s`}>
                        <p className="text-sm leading-relaxed text-zinc-600">{para}</p>
                      </ScrollReveal>
                    ))}
                  </div>

                  {/* Example projects */}
                  <ScrollReveal delay="0.2s" className="mt-6">
                    <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-400">
                      Example Engagements
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {comp.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2 text-sm text-zinc-600">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: '#C9A84C' }}
                          />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                </div>

                {/* Image column (only for first 3 competences) */}
                {comp.image && (
                  <ScrollReveal
                    fade
                    delay="0.1s"
                    className={`overflow-hidden rounded-2xl shadow-[0_12px_40px_-8px_rgba(11,30,61,0.18)] ${comp.image && i % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <Image
                      src={comp.image}
                      alt={comp.imageAlt}
                      className="h-72 w-full object-cover lg:h-full"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                  </ScrollReveal>
                )}
              </div>

              {/* Divider */}
              {i < COMPETENCES.length - 1 && (
                <div className="mt-20 h-px bg-zinc-100 sm:mt-24" />
              )}
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <ScrollReveal className="mt-20 rounded-2xl bg-zinc-50 p-8 text-center ring-1 ring-zinc-200">
          <h3 className="text-lg font-bold text-zinc-900">
            Need a specific expertise not listed here?
          </h3>
          <p className="mt-2 text-sm text-zinc-500">
            36 years in aviation means a broad and adaptable skillset. Get in touch to discuss
            your specific requirements.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)' }}
          >
            Discuss Your Project
          </Link>
        </ScrollReveal>
      </Container>
    </>
  )
}
