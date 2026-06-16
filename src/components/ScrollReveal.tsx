'use client'

import { useEffect, useRef } from 'react'

/**
 * ScrollReveal
 *
 * Wraps children in a div that starts invisible (.reveal) and gains
 * .is-visible when it enters the viewport — triggering the CSS transition
 * defined in tailwind.css. Uses IntersectionObserver; no dependencies.
 */

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: string
  fade?: boolean
  threshold?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'ol' | 'ul' | 'span' | 'p' | 'header' | 'footer'
}

export function ScrollReveal({
  children,
  className = '',
  delay,
  fade = false,
  threshold = 0.12,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const baseClass = fade ? 'reveal-fade' : 'reveal'

  // Cast to div for ref compatibility; Tag determines rendered element
  const Component = Tag as React.ElementType

  return (
    <Component
      ref={ref}
      className={`${baseClass} ${className}`}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      {children}
    </Component>
  )
}
