import { ReviewForm } from '@/components'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useGetRestaurantsQuery } from '@/redux/service/api'
import { selectRestaurantFromResult } from '@/redux/service/selectors'

export const Restaurant = () => {
  const { restaurantId } = useParams()

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    skip: !restaurantId,
    selectFromResult: selectRestaurantFromResult(restaurantId)
  })

  const navigate = useNavigate()

  return (
    <div key={ restaurant.id }>
      <h2>{ restaurant.name }</h2>

      <div>
        <button onClick={ () => navigate('menu') }>Menu</button>
        <button onClick={ () => navigate('reviews') }>Reviews</button>
      </div>

      <Outlet/>

      <div>
        <h3> Leave a review </h3>
        <ReviewForm restaurantId={ restaurant.id }/>
      </div>
    </div>
  )
}
