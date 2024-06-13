import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getReviews } from '@/redux/entities/review/thunks/getReviews'
import { getReviewsByRestaurantId } from '@/redux/entities/review/thunks/getReviewsByRestaurantId'

const entityAdapter = createEntityAdapter()

export const ReviewSlice = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => builder
    .addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload)
    })
    .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload)
    })
})
