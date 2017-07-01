import test from 'ava'
import React from 'react'
import { CurrencyList } from '../CurrencyList'
import { mount } from 'enzyme'
import sinon from 'sinon'

test('no data case', t => {
  const props = {
    currencies: [],
    loadCurrencies: () => {}
  }
  const wrapper = mount(<CurrencyList {...props} />)
  // console.log('----- html -\n', wrapper.html())
  const components = wrapper.find('li')
  t.is(components.nodes.length, 1)
  const component = wrapper.find('li').at(0)
  t.is(component.text(), '-')
})

test('some data case', t => {
  const props = {
    currencies: ['AUD', 'EUR', 'USD'],
    loadCurrencies: () => {}
  }
  const wrapper = mount(<CurrencyList {...props} />)
  const components = wrapper.find('li')
  t.is(components.nodes.length, props.currencies.length)
  const component = wrapper.find('li').at(0)
  t.is(component.text(), props.currencies[0])
})

test('should trigger loadCurrencies after it is mounted', t => {
  const spy = sinon.spy()
  const props = {
    currencies: [],
    loadCurrencies: spy
  }
  mount(<CurrencyList {...props} />)
  t.true(spy.called)
})
