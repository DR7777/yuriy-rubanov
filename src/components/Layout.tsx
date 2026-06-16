import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

/**
 * Page chrome wrapper — owns the centred white "card" background panel,
 * the floating glass Header, the page content slot, and the Footer.
 *
 * Mounted once in `app/layout.tsx` so every route gets the same shell
 * without each `page.tsx` having to import Header/Footer.
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*
       * Fixed background panel — gives the page its centred white "card"
       * look against the zinc-50 / black body. `max-w-7xl` keeps the card
       * width contained on ultra-wide screens.
       */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100" />
        </div>
      </div>

      {/*
       * Content column — Header (floating pill + in-flow spacer), then
       * the page, then Footer. `shrink-0` on <main> is critical: the
       * body uses `flex h-full`, so without it the flex algorithm would
       * squash <main> whenever the page grew beyond 100vh, letting the
       * footer ride up over page content. Pairs with the spacer in
       * Header (also shrink-0) and Footer (`flex-none`).
       */}
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto shrink-0">{children}</main>
        <Footer />
      </div>
    </>
  )
}
