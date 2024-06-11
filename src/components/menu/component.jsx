import { useCallback, useEffect } from 'react'
import { Dish } from '@/components/index'
import { useLazyGetMenuByRestaurantIdQuery } from '@/redux/service/api'

export const Menu = ({ restaurantId }) => {
  const [getMenu, { data: menu, isLoading, isFetching }] = useLazyGetMenuByRestaurantIdQuery(restaurantId)

  const handleReFetch = useCallback(() => {
    getMenu(restaurantId)
  }, [restaurantId])

  useEffect(() => {
    handleReFetch()
  }, [handleReFetch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isFetching) {
    return <div>Updating...</div>
  }

  if (menu && menu.length) {
    return (
      <div>
        <button onClick={ handleReFetch }>Refresh</button>
        <ul>
          { menu.map(dish => {
            return <li key={ dish.id }>
              { <Dish dish={ dish }/> }
            </li>
          }) }
        </ul>
      </div>

    )
  }
}
