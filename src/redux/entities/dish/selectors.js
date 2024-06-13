export const selectMenuModule = (state) => state.dish

export const selectDishById = (state, id) =>
  selectMenuModule(state).entities[id]

export const selectDishIds = (state) =>
  selectMenuModule(state).ids

export const selectMenu = (state) =>
  selectMenuModule(state).entities
