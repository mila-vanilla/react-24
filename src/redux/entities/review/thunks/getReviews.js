import { createAsyncThunk } from '@reduxjs/toolkit'

export const getReviews = createAsyncThunk(
  'review/getReviews',
  async () => {
    const response = await fetch('http://localhost:3001/api/reviews')
    return response.json()
  },
  { condition (arg, api) {} }
)
