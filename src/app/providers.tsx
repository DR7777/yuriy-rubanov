'use client'

import { createContext, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

function usePrevious<T>(value: T) {
  const ref = useRef<T | undefined>(undefined)
  const [prev, setPrev] = useState<T | undefined>(undefined)
  useEffect(() => {
    setPrev(ref.current)
    ref.current = value
  }, [value])
  return prev
}

export const AppContext = createContext<{ previousPathname?: string }>({})

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const previousPathname = usePrevious(pathname)

  return (
    <AppContext.Provider value={{ previousPathname }}>
      {children}
    </AppContext.Provider>
  )
}
