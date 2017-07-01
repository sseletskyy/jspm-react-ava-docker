import createReducer from 'utils/createReducer'
import { ACTIONS, ERRORS } from '../constants'

export const initialState = {
  currencies: [],
  errors: []
}

export const loadCurrenciesSuccess = (state, action) => {
  const data = action.payload
  const currencies = [data.base, ...Object.keys(data.rates)]
  currencies.sort()

  return {
    ...state,
    currencies
  }
}

export const loadCurrenciesError = (state, action) => ({
  ...state,
  errors: [...state.errors, ERRORS[action.type]]
})

const handlers = {
  [ACTIONS.LOAD_CURRENCIES_SUCCESS]: loadCurrenciesSuccess,
  [ACTIONS.LOAD_CURRENCIES_ERROR]: loadCurrenciesError
}

export default createReducer(initialState, handlers)
