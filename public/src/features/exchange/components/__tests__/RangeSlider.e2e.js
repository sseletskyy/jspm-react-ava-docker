import test from 'ava'
import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import RangeSlider from '../RangeSlider'
import logHtml from 'utils/logHtml'

const mockStore = configureStore()
const initialState = {}

test('renders in DOM.', t => {
  const store = mockStore(initialState)
  const wrapper = mount(
    <Provider store={store}>
      <RangeSlider onChange={() => {}} value={[0, 5]} />
    </Provider>
  )
  logHtml(wrapper.find('div').at(0).html())
  t.pass()
})
