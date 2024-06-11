import { Review } from '@/components'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { getReviewsByRestaurantId } from '@/redux/entities/review/thunks/getReviewsByRestaurantId'
import { selectReviewIds } from '@/redux/entities/review/selectors'
import { useRequest } from '@/hooks/useRequest'
import { REQUEST_STATUS } from '@/redux/ui/request/constants'

export const Reviews = ({ restaurantId }) => {
  const reviews = useSelector(state => selectReviewIds(state, restaurantId))

  const params = useMemo(() => {
    return { restaurantId }
  }, [restaurantId])
  const requestStatus = useRequest(getReviewsByRestaurantId, params)

  if (requestStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>
  }

  if (reviews && reviews.length) {
    return (
      <ul>
        { reviews.map(id => {
          return <li key={ id }>
            <Review reviewId={ id }/>
          </li>
        }) }
      </ul>
    )
  }

  return 'No reviews yet'
}
