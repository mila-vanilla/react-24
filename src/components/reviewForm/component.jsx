import { Rating } from '@/components'
import { useCreateReviewMutation } from '@/redux/service/api'
import { useForm } from '@/hooks/useForm'

export const ReviewForm = ({ restaurantId }) => {
  const [form, { setRating, reset, setText }] = useForm()
  const [createReview, { isLoading }] = useCreateReviewMutation()

  if (isLoading) {
    return <div>Saving...</div>
  }

  return (
    <div>
      <div>
        <span>Text</span>
        <input
          type="text"
          value={ form.text }
          onChange={ (event) =>
            setText(event.target.value)
          }/>
      </div>

      <div>
        <span>Rating</span>
        <Rating
          value={ form.rating }
          onChange={ value => setRating(value) }/>
      </div>

      <button onClick={ () => {
        createReview({
          restaurantId,
          newReview: {
            ...form,
            user: 'a304959a-76c0-4b34-954a-b38dbf310360',
          },
        })
        reset()
      } }>
        Save
      </button>
    </div>
  )
}
