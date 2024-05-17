import { Review } from '@/components'
import { Dish } from '@/components'

export const Restaurant = ({ restaurant }) => {
  return (
    <div key={restaurant.id}>
      <h2>{ restaurant.name }</h2>
      <h3>Menu</h3>
      <ul>
        {
          restaurant.menu.map(dish => {
            return (
              <li key={dish.id}><Dish dish={ dish }/></li>
            )
          })
        }
      </ul>

      <h3>Reviews</h3>
      <ul>
        {
          restaurant.reviews.map(review => {
            return (
              <li key={review.id}><Review review={ review }/></li>
            )
          })
        }
      </ul>
    </div>
  )
}
