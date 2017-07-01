import test from 'ava'
import * as reducers from '../reducer'
import * as actions from '../actions'
import { latestRawResponse, currencyList } from '../fixtures'
import { ERRORS } from 'features/exchange/constants'

test('loadCurrenciesSuccess', t => {
  const initialState = reducers.initialState
  const action = actions.loadCurrenciesSuccess(latestRawResponse)
  const nextState = reducers.loadCurrenciesSuccess(initialState, action)
  t.not(initialState, nextState, 'Next state should not be the equal to previous')
  t.deepEqual(nextState.currencies, currencyList, 'Currencies should have array of strings')
})

test('loadCurrenciesError', t => {
  const initialState = reducers.initialState
  const action = actions.loadCurrenciesError()
  const nextState = reducers.loadCurrenciesError(initialState, action)
  t.not(initialState, nextState, 'Next state should not be the equal to previous')
  t.is(nextState.errors.length, 1)
  t.is(nextState.errors[0], ERRORS[action.type])
})
