export const Review = ({ review }) => {
  if (!review) {
    return
  }
  return (
    <>
      <div>{ review.user }</div>
      <span>{ review.text }</span>
    </>
  )
}
