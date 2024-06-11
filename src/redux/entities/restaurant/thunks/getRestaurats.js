import { createAsyncThunk } from '@reduxjs/toolkit'
import { selectRestaurantIds } from '@/redux/entities/restaurant/selectors.js'

export const getRestaurants = createAsyncThunk(
  'restaurant/getRestaurants',
  async () => {
    const response = await fetch('http://localhost:3001/api/restaurants')
    return response.json()
  },
  {
    condition ({ forceReFetch = false }, { getState }) {
      forceReFetch || !selectRestaurantIds(getState()).length
    }
  }
)
