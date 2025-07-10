/**
 * Breakpoint constants that align with Tailwind CSS breakpoints
 * and should be used consistently across the application
 */

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
} as const;

/**
 * Media query strings for common responsive behaviors
 * These align with Tailwind CSS breakpoints
 */
export const MEDIA_QUERIES = {
  // Mobile-first approach (max-width)
  mobile: `(max-width: ${BREAKPOINTS.lg - 1}px)`, // < 1024px
  tablet: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`, // 768px - 1023px
  desktop: `(min-width: ${BREAKPOINTS.lg}px)`, // >= 1024px

  // More specific mobile/tablet distinction
  mobilePure: `(max-width: ${BREAKPOINTS.md - 1}px)`, // < 768px (actual mobile devices)
  tabletAndUp: `(min-width: ${BREAKPOINTS.md}px)`, // >= 768px (tablet and desktop)

  // Specific breakpoints
  "max-sm": `(max-width: ${BREAKPOINTS.sm - 1}px)`, // < 640px
  "max-md": `(max-width: ${BREAKPOINTS.md - 1}px)`, // < 768px
  "max-lg": `(max-width: ${BREAKPOINTS.lg - 1}px)`, // < 1024px
  "max-xl": `(max-width: ${BREAKPOINTS.xl - 1}px)`, // < 1280px

  "min-sm": `(min-width: ${BREAKPOINTS.sm}px)`, // >= 640px
  "min-md": `(min-width: ${BREAKPOINTS.md}px)`, // >= 768px
  "min-lg": `(min-width: ${BREAKPOINTS.lg}px)`, // >= 1024px
  "min-xl": `(min-width: ${BREAKPOINTS.xl}px)`, // >= 1280px
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
export type MediaQueryKey = keyof typeof MEDIA_QUERIES;
