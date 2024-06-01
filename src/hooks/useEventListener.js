import { useEffect } from 'react'

export const useEventListener = (eventName, handler, refNode) => {
  useEffect(() => {
    const element = refNode.current || window
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    element.addEventListener(eventName, handler)

    return () => {
      element.removeEventListener(eventName, handler)
    }
  }, [eventName, refNode, handler])
}
