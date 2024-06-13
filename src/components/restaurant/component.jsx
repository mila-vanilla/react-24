import { Menu, ReviewForm, Reviews } from '@/components'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '@/redux/entities/restaurant/selectors.js'

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return
  }

  return (
    <div key={ restaurant.id }>
      <h2>{ restaurant.name }</h2>

      <h3>Menu</h3>
      <Menu restaurantId={ restaurant.id }/>

      <h3>Reviews</h3>
      <Reviews restaurantId={ restaurant.id }/>

      <div>
        <h3> Leave a review </h3>
        <ReviewForm restaurantId={ restaurant.id }/>
      </div>
    </div>
  )
}
