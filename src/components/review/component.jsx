export const Review = ({ review }) => {
  if (!review) {
    return
  }
  return (
    <>
      <span>{ review.text }</span>
    </>
  )
}
