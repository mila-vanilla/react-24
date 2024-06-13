import { EditableReview } from '@/components'
import { useGetReviewsByRestaurantIdQuery } from '@/redux/service/api'

export const Reviews = ({ restaurantId }) => {
  const { data: reviews, isLoading, isFetching } =
    useGetReviewsByRestaurantIdQuery(restaurantId)

  if (isLoading) {
    return <div>Saving...</div>
  }

  if (reviews && reviews.length) {
    return (
      <ul>
        { reviews.map(review => {
          return <li key={ review.id }>
            <EditableReview review={ review } isReviewsLoading={ isFetching }/>
          </li>
        }) }
      </ul>
    )
  }

  return 'No reviews yet'
}
