import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getMenuByRestaurantId } from '@/redux/entities/dish/thunks/getMenuByRestaurantId.js'
import { getMenu } from '@/redux/entities/dish/thunks/getMenu.js'

const entityAdapter = createEntityAdapter()

export const DishSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => builder
    .addCase(getMenu.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload)
    })
    .addCase(getMenuByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.addMany(state, payload)
    })
})




