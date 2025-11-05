'use client'

import { useEffect, useRef, useState } from 'react'

type Options = {
  /**
   * Percentage of the viewport height (0 - 1) that the element's top
   * needs to cross before we consider it "in view".
   */
  enterRatio?: number
  /**
   * Percentage of the viewport height (0 - 1) that the element's bottom
   * needs to stay below to remain "in view".
   */
  exitRatio?: number
  /**
   * When true, the hook stops listening once the element has been seen.
   */
  once?: boolean
}

export function useScrollVisibility<T extends HTMLElement>({
  enterRatio = 0.6,
  exitRatio = 0.4,
  once = false,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)
  const latestState = useRef(isInView)
  latestState.current = isInView

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    let ticking = false
    let detached = false

    const detach = () => {
      if (detached) return
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      detached = true
    }

    const evaluate = () => {
      ticking = false
      const node = ref.current
      if (!node) {
        if (latestState.current) {
          latestState.current = false
          setIsInView(false)
        }
        return
      }

      const rect = node.getBoundingClientRect()
      const viewportHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        0

      const enterThreshold = viewportHeight * enterRatio
      const exitThreshold = viewportHeight * exitRatio

      const nextInView =
        rect.top < enterThreshold && rect.bottom > exitThreshold

      if (nextInView === latestState.current) {
        return
      }

      latestState.current = nextInView
      setIsInView(nextInView)

      if (nextInView && once) {
        detach()
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(evaluate)
      }
    }

    evaluate()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return detach
  }, [enterRatio, exitRatio, once])

  return { ref, isInView }
}
