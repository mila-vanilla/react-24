import { Review } from '@/components'
import { useGetReviewsByRestaurantIdQuery } from '@/redux/service/api'

export const Reviews = ({ restaurantId }) => {
  const { data: reviews, isLoading } =
    useGetReviewsByRestaurantIdQuery(restaurantId)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (reviews && reviews.length) {
    return (
      <ul>
        { reviews.map(review => {
          return <li key={ review.id }>
            <Review review={ review }/>
          </li>
        }) }
      </ul>
    )
  }

  return 'No reviews yet'
}
