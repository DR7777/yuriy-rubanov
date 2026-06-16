import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

/**
 * Full-width layout — no centered card, no ring border.
 * Sections own their own backgrounds (white / zinc-50 / navy).
 * Header floats as a fixed glass pill; main content flows beneath it.
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  )
}
