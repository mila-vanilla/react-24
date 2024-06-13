export const selectRestaurantModule = (state) => state.restaurant

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id]

export const selectRestaurantIds = (state) =>
  selectRestaurantModule(state).ids

export const selectRestaurants = (state) =>
  selectRestaurantModule(state).entities

export const selectRestaurantMenu = (state, id) =>
  selectRestaurantModule(state).entities[id].menu

export const selectRestaurantReviews = (state, id) =>
  selectRestaurantModule(state).entities[id].reviews
