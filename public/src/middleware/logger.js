const loggerMiddleware = store => next => action => {
  let result = next(action)

  /* eslint-disable indent */
  let groupTitle = action.error ? [`%cERROR: ${action.type}%c`, 'color:#aa0000;', 'color:#000;'] : [action.type]
  console.groupCollapsed(...groupTitle)
  console.info('dispatching', action)
  console.log('next state', store.getState())
  console.groupEnd()
  /* eslint-enable indent */

  return result
}

export default loggerMiddleware
