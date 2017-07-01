import { combineReducers } from 'redux'
// import { reducer as reduxForm } from 'redux-form'

import exchange from 'features/exchange/module/reducer'

const rootReducer = combineReducers({
  // reduxForm,
  exchange
})

export default rootReducer
