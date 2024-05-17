export const Review = ({ review }) => {
  return (
    <>
      <div>{ review.user }</div>
      <span>{ review.text }</span>
    </>
  )
}
