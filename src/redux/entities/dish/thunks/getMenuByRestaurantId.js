import { createAsyncThunk } from '@reduxjs/toolkit'
import { selectRestaurantMenu } from '@/redux/entities/restaurant/selectors'
import { selectDishIds } from '@/redux/entities/dish/selectors'

export const getMenuByRestaurantId = createAsyncThunk(
  'dish/getMenuByRestaurantId',
  async ({ restaurantId }) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${ restaurantId }`)
    return response.json()
  },
  {
    condition: ({ restaurantId, forceReFetch = false }, { getState }) => {
      if (forceReFetch) {
        return true
      }
      const state = getState()
      const loadedDishIds = selectDishIds(state)
      const restaurantMenuIds = selectRestaurantMenu(state, restaurantId)
      return restaurantMenuIds.some((id) => !loadedDishIds.includes(id))
    },
  }
)
