import { useState } from 'react'
import { Restaurant } from '@/components'
import { useSelector } from 'react-redux'

export const Restaurants = ({ tabIndex }) => {
  const restaurantsIds = useSelector(state => {
    return state.restaurant.ids
  })
  const restaurants = useSelector(state => {
    return state.restaurant.entities
  })
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsIds[tabIndex])

  if (!restaurantsIds.length) {
    return 'No restaurants yet'
  }

  return (
    <div>
      <div>
        <ul>
          { Object.values(restaurants).map(({ name, id }) => {
            return (
              <li key={ id } onClick={ () => setActiveRestaurantId(id) }>
                <b>{ name } </b>
              </li>
            )
          }) }
        </ul>
        <Restaurant restaurantId={ activeRestaurantId }/>
      </div>

    </div>
  )
}
