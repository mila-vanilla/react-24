import { useSelector } from 'react-redux'

export const Review = ({ reviewId }) => {
  const review = useSelector(state => state.review.entities[reviewId])
  return (
    <>
      <div>{ review.user }</div>
      <span>{ review.text }</span>
    </>
  )
}
