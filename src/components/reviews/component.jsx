import { EditableReview } from '@/components'
import { useGetReviewsByRestaurantIdQuery } from '@/redux/service/api'
import { useParams } from 'react-router-dom'

export const Reviews = () => {
  const { restaurantId } = useParams()
  const { data: reviews, isLoading, isFetching } =
    useGetReviewsByRestaurantIdQuery(restaurantId)

  if (isLoading) {
    return <div>Loading...</div>
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
