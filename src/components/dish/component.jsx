import { useCounter } from '@/hooks/useCounter'
import { Counter } from '@/components'
import { useSelector } from 'react-redux'
import { selectDishById } from '@/redux/entities/dish/selectors.js'
import { NavLink } from 'react-router-dom'

const min = 0
const max = 5

export const Dish = ({ dish }) => {
  const { count, increment, decrement, set } = useCounter(0, { max })
  return dish && (
    <>
      <NavLink to={`/dish/${dish.id}`}>
        <div>{ dish.name }:{ dish.price }</div>
      </NavLink>


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
