import createReducer from 'utils/createReducer'
import { Actions } from '../constants'

const initialState = {
}

const testActionMethod = (state = {}, action) => ({
  ...state
})

const handlers = {
  [Actions.TEST_ACTION]: testActionMethod
}

export default createReducer(initialState, handlers)
