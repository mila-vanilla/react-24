import { useReducer } from 'react'

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
  rating: 5
}

const initializer = initialState => {
  return {
    ...initialState
  }
}

export const useForm = (formValue = null) => {
  const [form, dispatch] = useReducer(reducer, formValue || DEFAULT_FORM_VALUE, initializer)

  const setRating = (rating) => {
    dispatch({ type: 'setRating', payload: rating })
  }

  const setText = (text) => {
    dispatch({ type: 'setText', payload: text })
  }

  const reset = () => {
    dispatch({ type: 'reset' })
  }

  return [form, { dispatch, setRating, setText, reset }]
}
