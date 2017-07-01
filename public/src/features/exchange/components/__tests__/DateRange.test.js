import test from 'ava'
import React from 'react'
import DateRange from '../DateRange'
import { mount } from 'enzyme'
import logHtml from 'utils/logHtml'

test('should display slider', t => {
  const props = {
    min: 1,
    max: 30
  }
  const wrapper = mount(<DateRange {...props} />)
  const html = wrapper.html()
  logHtml(html)
  t.regex(html, /rc-slider/)
})

test('test', t => {
  t.pass()
})
