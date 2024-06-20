import { Dish } from '@/components/index'
import { useGetMenuByRestaurantIdQuery } from '@/redux/service/api'
import { useParams } from 'react-router-dom'

export const Menu = () => {
  const { restaurantId } = useParams()
  const { data: menu, isLoading, isFetching, refetch } = useGetMenuByRestaurantIdQuery(restaurantId)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isFetching) {
    return <div>Updating...</div>
  }

  if (menu && menu.length) {
    return (
      <div>
        <button onClick={ () => refetch() }>Refresh</button>
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
