import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { UserSlice } from '@/redux/entities/user.js'
import { RestaurantSlice } from '@/redux/entities/restaurant.js'
import { ReviewSlice } from '@/redux/entities/review.js'
import { DishSlice } from '@/redux/entities/dish.js'

export const store = configureStore({
  reducer: combineSlices(UserSlice, RestaurantSlice, ReviewSlice, DishSlice),
})
