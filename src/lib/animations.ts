import type { Variants } from "framer-motion";

/**
 * Staggered fade-in-up animation variant.
 *
 * @param y       Initial vertical offset in pixels (default 24)
 * @param delay   Seconds between each child (default 0.1)
 * @param duration Animation duration in seconds (default 0.5)
 */
export function staggerFadeInUp(
  y = 24,
  delay = 0.1,
  duration = 0.5
): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * delay,
        duration,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };
}
