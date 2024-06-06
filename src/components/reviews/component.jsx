import { Review } from '@/components'

export const Reviews = ({ reviews }) => {
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
