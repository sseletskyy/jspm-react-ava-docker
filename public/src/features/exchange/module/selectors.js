import { createSelector } from 'reselect'

const getId = state => state.id
export const getTestValue = createSelector(
  [getId],
  (id) => {
    return id
  }
)
