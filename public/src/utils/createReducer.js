export default function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    if (action && action.type && handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
