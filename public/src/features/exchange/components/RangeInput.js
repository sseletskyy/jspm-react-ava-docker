import 'features/exchange/components/exchange.css!'
import React from 'react'
import PropTypes from 'prop-types'
import withState from 'recompose/withState'

const enhance = withState('val', 'updateVal', '')

const RangeInput = enhance(({ val, value, updateVal, onChange }) => {
  // it prevents to pass more than one argument to handler
  function handleChange (e) {
    return updateVal(e.target.value)
  }

  // onChange even is debounced, so callback will be called after debounce delay
  const handleInputChange = () => {
    const callback = () => updateVal('')
    onChange(val, callback)
    return true
  }

  return (
    <input
      className='rangeInput'
      type='text'
      placeholder={`$ ${value}`}
      value={val}
      onKeyUp={handleInputChange}
      onChange={handleChange}
    />
  )
})

RangeInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default RangeInput
