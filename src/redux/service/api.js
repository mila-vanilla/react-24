import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/'
  }),
  endpoints: (builder) => ( {
    getRestaurants: builder.query({
      query: () => ( {
        url: 'restaurants',
      } ),
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => ( {
        url: 'reviews',
        params: { restaurantId }
      } ),
    }),
    getMenuByRestaurantId: builder.query({
      query: (restaurantId) => ( {
        url: 'dishes',
        params: { restaurantId }
      } ),
    }),
  } )
})

export const {
  useGetRestaurantsQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetMenuByRestaurantIdQuery,
  useLazyGetMenuByRestaurantIdQuery
} = apiService
