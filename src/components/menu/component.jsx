import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getMenuByRestaurantId } from '@/redux/entities/dish/thunks/getMenuByRestaurantId'
import { Dish } from '@/components/index.js'
import { selectDishIds } from '@/redux/entities/dish/selectors'

export const Menu = ({ restaurantId }) => {
  const menu = useSelector(state => selectDishIds(state, restaurantId))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMenuByRestaurantId(restaurantId))
  }, [dispatch, restaurantId])

  if (menu && menu.length) {
    return (
      <ul>
        { menu.map(id => {
          return <li key={ id }>
            { <Dish dishId={ id }/> }
          </li>
        }) }
      </ul>
    )
  }

  return (
    <div>
      There is no menu yet, but it’ll be coming soon :)
    </div>
  )
}
