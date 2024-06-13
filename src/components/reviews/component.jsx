import { Review } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getReviewsByRestaurantId } from '@/redux/entities/review/thunks/getReviewsByRestaurantId'
import { selectReviewIds } from '@/redux/entities/review/selectors'

export const Reviews = ({ restaurantId }) => {
  const reviews = useSelector(state => selectReviewIds(state, restaurantId))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId))
  }, [dispatch, restaurantId, reviews])

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
