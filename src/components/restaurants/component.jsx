import { useEffect, useState } from 'react'
import { Restaurant, RestaurantTabLinks } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '@/redux/entities/restaurant/thunks/getRestaurats'
import { selectRestaurantIds } from '@/redux/entities/restaurant/selectors'

export const Restaurants = ({ tabIndex }) => {
  const dispatch = useDispatch()
  const restaurantsIds = useSelector(selectRestaurantIds)

  const [activeRestaurantId, setActiveRestaurantId] = useState(null)

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  useEffect(() => {
    if (restaurantsIds)
      setActiveRestaurantId(restaurantsIds[tabIndex])
  }, [restaurantsIds, setActiveRestaurantId])

  if (!restaurantsIds.length) {
    return 'No restaurants yet'
  }

  return (
    <div>
      <RestaurantTabLinks onTabClick={ setActiveRestaurantId }/>
      <Restaurant restaurantId={ activeRestaurantId }/>
    </div>
  )
}

