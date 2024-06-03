import { useCounter } from '@/hooks/useCounter'
import { Counter } from '@/components'
import { useCallback, useEffect } from 'react'

const min = 0
const max = 5

export const Dish = ({ dish }) => {
  const { count, increment, decrement, set } = useCounter(0, { max })

  const invokeEvent = useCallback(() => {
    // console.log(event)
  }, [])

  useEffect(() => {
    invokeEvent('dish mounted')
    increment()
  }, [increment, invokeEvent])

  useEffect(() => {
    invokeEvent('count set up')
  }, [count, invokeEvent])

  return (
    <>
      <div>{ dish.name }:{ dish.price }</div>

      <button onClick={ () => set(max) }>
        Take all
      </button>
      <Counter
        min={ min }
        max={ max }
        count={ count }
        onPlus={ increment }
        onMinus={ decrement }
      />
    </>
  )
}

