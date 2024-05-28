import { useReducer } from 'react'
import { Rating } from '@/components'

function reducer (state, { type, payload } = {}) {
  switch (type) {
    case 'setName':
      return { ...state, name: payload }
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
  name: '',
  text: '',
  rating: 0
}

const initializer = initialState => {
  return {
    ...initialState, rating: 5
  }
}

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE, initializer)

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          type="text"
          value={ form.name }
          onChange={ event => {
            dispatch({ type: 'setName', payload: event.target.value })
          } }/>
      </div>

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

      <button onClick={ () => dispatch({ type: 'reset' }) }>Save</button>
    </div>
  )
}
