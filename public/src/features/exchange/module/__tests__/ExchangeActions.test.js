import test from 'ava'
import * as actions from '../actions'
import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { latestRawResponse } from '../fixtures'
import { ACTIONS } from 'features/exchange/constants'
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

test('loadCurrencies - wrong test', t => {
  nock('http://api.fixer.io')
    .get('/latest')
    .reply(200, latestRawResponse)

  const store = mockStore({})
  store.dispatch(actions.loadCurrencies())
    .then(() => {
      const storedActions = store.getActions()
      // this assertion should fail! but it is ignoed
      t.is(storedActions[0].type, 0)
    })
})

test.cb('loadCurrencies - callback test', t => {
  nock('http://api.fixer.io')
    .get('/latest')
    .reply(200, latestRawResponse)

  const store = mockStore({})
  store.dispatch(actions.loadCurrencies())
    .then(() => {
      const storedActions = store.getActions()
      t.is(storedActions[0].payload.base, latestRawResponse.base)
      t.end()
    })
})

test('loadCurrencies - async test', async t => {
  nock('http://api.fixer.io')
    .get('/latest')
    .reply(200, latestRawResponse)

  const store = mockStore({})
  await store.dispatch(actions.loadCurrencies())
  const storedActions = store.getActions()
  t.is(storedActions[0].payload.base, latestRawResponse.base)
})

test('loadCurrenciesSuccess', t => {
  const payload = [1, 2, 3]
  const actual = actions.loadCurrenciesSuccess(payload)
  t.is(actual.type, ACTIONS.LOAD_CURRENCIES_SUCCESS, 'Expected type not found')
  t.is(actual.payload, payload, 'Expected payload not found')
})

test('loadCurrenciesError', t => {
  const error = Error('Error message')
  const actual = actions.loadCurrenciesError(error)
  t.is(actual.type, ACTIONS.LOAD_CURRENCIES_ERROR, 'Expected type not found')
  t.is(actual.payload, error, 'Payload should be defined')
})

test('loadCurrencies - error case', async t => {
  nock('http://api.fixer.io')
    .get('/latest')
    .replyWithError('failed to load data')

  const store = mockStore({})
  await store.dispatch(actions.loadCurrencies())
  const storedActions = store.getActions()
  t.is(storedActions[0].type, ACTIONS.LOAD_CURRENCIES_ERROR)
})
