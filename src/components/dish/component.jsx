import { useCounter } from '@/hooks/useCounter'
import { Counter } from '@/components'
import { useSelector } from 'react-redux'
import { selectDishById } from '@/redux/entities/dish/selectors.js'

const min = 0
const max = 5

export const Dish = ({ dish }) => {
  const { count, increment, decrement, set } = useCounter(0, { max })
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
