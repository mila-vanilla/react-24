export const selectReviewModule = (state) => state.review

export const selectReviewById = (state, id) =>
  selectReviewModule(state).entities[id]

export const selectReviewIds = (state) =>
  selectReviewModule(state).ids

export const selectReviews = (state) =>
  selectReviewModule(state).entities
