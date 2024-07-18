import { useRef } from 'react'

type Props = {
  animationTriggerClass: string
}
/**
 * Uncomment the following block to use:
 * const { containerRef, handleAnimationEnd, handleMouseEnter } = useAnimation({
 *   animationTriggerClass: s.animate,
 * })
 *
 * SCSS
 * .containerEdite {
 *   ...;
 *
 *   .pencil {
 *     transform-origin: center;
 *   }
 *
 *   &.animate .pencil {
 *     animation: write-pencil 0.7s alternate forwards;
 *   }
 * }
 */
export const useAnimation = <T extends HTMLDivElement>({ animationTriggerClass }: Props) => {
  const containerRef = useRef<T>(null)

  const handleMouseEnter = () => {
    if (containerRef.current) {
      containerRef.current.classList.add(animationTriggerClass)
    }
  }

  const handleAnimationEnd = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove(animationTriggerClass)
    }
  }

  return { containerRef, handleAnimationEnd, handleMouseEnter }
}
