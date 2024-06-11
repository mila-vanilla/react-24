import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { UserSlice } from '@/redux/entities/user'
import { RestaurantSlice } from '@/redux/entities/restaurant'
import { ReviewSlice } from '@/redux/entities/review'
import { DishSlice } from '@/redux/entities/dish'
import { RequestSlice } from '@/redux/ui/request'

export const store = configureStore({
  reducer: combineSlices(
    UserSlice,
    RestaurantSlice,
    ReviewSlice,
    DishSlice,
    RequestSlice
  ),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
