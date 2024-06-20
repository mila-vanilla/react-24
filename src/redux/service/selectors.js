export const selectRestaurantFromResult = restaurantId => result => ( {
  ...result,
  data: result.data?.find(({ id }) => id === restaurantId),
} )
