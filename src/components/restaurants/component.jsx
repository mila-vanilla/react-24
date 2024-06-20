import { useEffect, useState } from 'react'
import { RestaurantTabLinks } from '@/components'
import { useGetRestaurantsQuery } from '@/redux/service/api'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

export const Restaurants = ({ tabIndex }) => {
  const { restaurantId } = useParams()
  const { data: restaurants, isLoading, isFetching } = useGetRestaurantsQuery()
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantId)

  const navigate = useNavigate()
  useEffect(() => {
    if (!isLoading) {
      const id = activeRestaurantId || restaurants[tabIndex].id

      setActiveRestaurantId(id)
      navigate(id, { replace: true })
    }
  }, [isLoading, restaurantId])

  return (
    <>
      { isLoading && <div>Loading...</div> }
      { isFetching && <div>Fetching...</div> }

      { restaurants?.length && (
        <div>
          <RestaurantTabLinks
            restaurants={ restaurants }
            onTabClick={ setActiveRestaurantId }/>
          <Outlet/>
        </div>
      ) }
    </>
  )
}

