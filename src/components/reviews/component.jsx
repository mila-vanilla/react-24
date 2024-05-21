import { Review } from '@/components'

export const Reviews = ({ reviews }) => {
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