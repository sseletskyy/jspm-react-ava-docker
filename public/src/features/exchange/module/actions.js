import { ACTIONS } from '../constants'
import fetch from 'isomorphic-fetch'

function handleErrors (response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export const loadCurrenciesSuccess = data => ({
  type: ACTIONS.LOAD_CURRENCIES_SUCCESS,
  payload: data
})

export const loadCurrenciesError = (e) => ({
  type: ACTIONS.LOAD_CURRENCIES_ERROR,
  payload: e
})

export const loadCurrencies = () => {
  return dispatch => {
    return fetch('http://api.fixer.io/latest')
      .then(handleErrors)
      .then(response => response.json())
      .then(data => dispatch(loadCurrenciesSuccess(data)))
      .catch((e) => dispatch(loadCurrenciesError(e)))
  }
}
