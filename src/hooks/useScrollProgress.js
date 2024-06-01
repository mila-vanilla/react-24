import { useCallback, useState } from 'react'
import { useEventListener } from './useEventListener'

export const useScrollProgress = (refNode = {}) => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const updatePosition = useCallback(() => {
    const element = refNode.current || document.documentElement

    const { scrollTop, scrollHeight, clientHeight } = element
    const diff = scrollHeight - clientHeight
    const scrollPercentage = diff ? scrollTop / diff * 100 : 0

    setScrollProgress(() => scrollPercentage)
  }, [refNode])

  useEventListener('scroll', updatePosition, refNode)

  return { scrollProgress }
}
