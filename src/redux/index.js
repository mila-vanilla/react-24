import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { UserSlice } from '@/redux/entities/user'
import { RequestSlice } from '@/redux/ui/request'
import { apiService } from '@/redux/service/api'

export const store = configureStore({
  reducer: combineSlices(
    UserSlice,
    RequestSlice,
    apiService
  ),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware)
})
