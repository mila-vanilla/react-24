import { useReducer } from 'react'
import { Rating } from '@/components'
import { useCreateReviewMutation } from '@/redux/service/api'

function reducer (state, { type, payload } = {}) {
  switch (type) {
    case 'setText':
      return { ...state, text: payload }
    case 'setRating':
      return { ...state, rating: payload }
    case 'reset':
      return DEFAULT_FORM_VALUE
    default:
      return state
  }
}

const DEFAULT_FORM_VALUE = {
  text: '',
  rating: 0
}

const initializer = initialState => {
  return {
    ...initialState, rating: 5
  }
}

export const ReviewForm = ({ restaurantId }) => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE, initializer)
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
          onChange={ (event) => {
            dispatch({ type: 'setText', payload: event.target.value })
          } }/>
      </div>

      <div>
        <span>Rating</span>
        <Rating
          value={ form.rating }
          onChange={ value => {
            dispatch({ type: 'setRating', payload: value })
          } }/>
      </div>

      <button onClick={ () => {
        createReview({
          restaurantId,
          newReview: {
            ...form,
            user: 'a304959a-76c0-4b34-954a-b38dbf310360',
          },
        })
        dispatch({ type: 'reset' })
      } }>
        Save
      </button>
    </div>
  )
}
