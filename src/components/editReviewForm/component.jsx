import { useEffect } from 'react'
import { Rating } from '@/components'
import { useUpdateReviewMutation } from '@/redux/service/api'
import { useForm } from '@/hooks/useForm'

export const EditReviewForm = ({ review, onSuccess = () => {} }) => {
  const [form, { setRating, setText }] = useForm(review)
  const [updateReview, { isSuccess, isLoading }] = useUpdateReviewMutation()

  useEffect(() => {
    const handleSuccess = () => onSuccess()

    if (isSuccess) {
      handleSuccess()
    }
  }, [onSuccess, isSuccess])

  if (isLoading) {
    return <div>Saving...</div>
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={ form.text }
          onChange={ (event) => {
            setText(event.target.value)
          } }/>
      </div>

      <div>
        <span>Rating</span>
        <Rating
          value={ form.rating }
          onChange={ value => {
            setRating(value)
          } }/>
      </div>

      <button onClick={ () =>
        updateReview({
          review: {
            ...review,
            ...form
          }
        })
      }>
        Save
      </button>
    </div>
  )
}

