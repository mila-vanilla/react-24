import { useState } from 'react'
import { Restaurant, RestaurantTabLinks } from '@/components'
import { useGetRestaurantsQuery } from '@/redux/service/api'

export const Restaurants = ({ tabIndex }) => {
  const { data: restaurants, isLoading, isFetching } = useGetRestaurantsQuery()
  const [activeRestaurantId, setActiveRestaurantId] = useState(tabIndex)

  return (
    <>
      { isLoading && <div>Loading...</div> }
      { isFetching && <div>Fetching...</div> }

      { restaurants?.length && (
        <div>
          <RestaurantTabLinks
            restaurants={ restaurants }
            onTabClick={ setActiveRestaurantId }/>
          <Restaurant restaurant={ restaurants[activeRestaurantId] }/>
        </div>
      ) }
    </>
  )
}

