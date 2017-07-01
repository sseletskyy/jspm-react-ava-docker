import 'rc-slider/assets/index.css!'

import React from 'react'
import PropTypes from 'prop-types'
import withState from 'recompose/withState'
import compose from 'recompose/compose'
import Slider from 'rc-slider'
import RangeInput from './RangeInput'
import _debounce from 'lodash/debounce'
import { LIFT_RANGE_LIMITS } from 'features/exchange/constants'
import { validateRangeInput, validateRangeSlider } from 'features/exchange/utils/ExchangeUtils'
const DEBOUNCE = 400
const DEFAULT_STEP = 1

const enhance = compose(
  withState('range', 'updateSlider', props => props.value)
)

// onChange is an external handler to update value in redux-form
const RangeSlider = enhance(({ range, updateSlider, onChange }) => {
  // it prevents to pass more than one argument to handler
  const handleChange = handler => newValue => handler(newValue)

  function handleLeftInputChange (left, callback) {
    callback() // clears out Input's value to show the new one as placeholder

    const value = validateRangeInput(left)
    if (isNaN(value)) {
      return false
    }
    const newRange = validateRangeSlider([value, range[1]])
    updateSlider(newRange)
    onChange(newRange)
  }

  function handleRightInputChange (right, callback) {
    callback() // clears out Input's value to show the new one as placeholder
    const value = validateRangeInput(right)
    if (isNaN(value)) {
      return false
    }
    const newRange = validateRangeSlider([range[0], value])
    updateSlider(newRange)
    onChange(newRange)
  }

  return (
    <div className='insight-filter-select'>
      <label>Range Slider</label>
      <Slider.Range
        dots={false}
        min={LIFT_RANGE_LIMITS.MIN}
        max={LIFT_RANGE_LIMITS.MAX}
        step={DEFAULT_STEP}
        value={range}
        onChange={handleChange(updateSlider)}
        onAfterChange={onChange}
      />
      <div className='insight-lift-range-inputs'>
        <RangeInput value={range[0]} onChange={_debounce(handleLeftInputChange, DEBOUNCE)} />
        <RangeInput value={range[1]} onChange={_debounce(handleRightInputChange, DEBOUNCE)} />
      </div>
    </div>
  )
})

RangeSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired // is used in withState('range' to set default value
}

export default RangeSlider
