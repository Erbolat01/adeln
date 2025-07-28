import { useState, useEffect, useCallback, useMemo } from 'react'

/**
 * useBreakPoint
 *
 * Returns an object `{ xs, sm, md, lg, xl }` indicating which
 * breakpoint the current window width falls into.
 */
export default function useBreakPoint() {
  // Define your breakpoints (in pixels)
  const breakpoints = useMemo(() => ({
    xs: 0,    // up to 575px
    sm: 576,  // 576px–767px
    md: 768,  // 768px–991px
    lg: 992,  // 992px–1199px
    xl: 1200, // 1200px and above
  }), [])

  // Helper to determine which flags should be true based on width
  const getFlags = useCallback((width) => {
    return {
      xs: width < breakpoints.sm,
      sm: width >= breakpoints.sm && width < breakpoints.md,
      md: width >= breakpoints.md && width < breakpoints.lg,
      lg: width >= breakpoints.lg && width < breakpoints.xl,
      xl: width >= breakpoints.xl,
    }
  }, [breakpoints])

  // Initialize state based on the current window width (or default to xs if SSR)
  const isClient = typeof window !== 'undefined'
  const initialWidth = isClient ? window.innerWidth : breakpoints.xs
  const [screen, setScreen] = useState(getFlags(initialWidth))

  useEffect(() => {
    if (!isClient) return

    function handleResize() {
      const w = window.innerWidth
      setScreen(getFlags(w))
    }

    // Listen for resize events
    window.addEventListener('resize', handleResize)

    // Run once on mount to ensure correct value
    handleResize()

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [getFlags, isClient])

  return screen
}
