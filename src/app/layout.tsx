import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s — Rubanov Airport Consulting',
    default:
      'Rubanov Airport Consulting | Independent Airport Consultant | Vienna',
  },
  description:
    'Yuriy Rubanov, Independent Airport Consultant with 36 years of experience in traffic forecasting, master planning, feasibility studies and strategic airport development across 25+ countries.',
  keywords: [
    'airport consultant',
    'airport consulting',
    'traffic forecast',
    'airport master plan',
    'feasibility study',
    'capacity calculation',
    'aviation consulting',
    'Vienna',
    'Yuriy Rubanov',
  ],
  authors: [{ name: 'Yuriy Rubanov', url: 'https://rubanov.com' }],
  openGraph: {
    title: 'Rubanov Airport Consulting',
    description:
      '36 years of airport consulting expertise: traffic forecasting, master planning, feasibility studies across 25+ countries.',
    url: 'https://rubanov.com',
    siteName: 'Rubanov Airport Consulting',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // No h-full / bg-zinc-50 — full-width white, no centered card frame
    <html lang="en" className={`antialiased ${inter.variable}`}>
      <body className="bg-white text-zinc-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
