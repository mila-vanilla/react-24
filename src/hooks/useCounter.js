import { useCallback, useState } from 'react'

export const useCounter = (initial = 0, options = {}) => {
  const [count, setCount] = useState(initial)
  const { min = 0, max = 5 } = options

  const set = useCallback((value) => {
    setCount(() => {
      return Math.max(Math.min(max, value), min)
    })
  }, [])

  const reset = useCallback(() => {
    setCount(initial)
  }, [])

  const decrement = useCallback(() => {
    setCount(currentCount => {
      return currentCount === min ? currentCount : currentCount - 1
    })
  }, [])

  const increment = useCallback(() => {
    setCount(currentCount => {
      return currentCount === max ? currentCount : currentCount + 1
    })
  }, [])

  return { count, increment, decrement, set, reset }
}
