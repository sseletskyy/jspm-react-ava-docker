import 'rc-slider/assets/index.css!'
import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'rc-slider'

const DateRange = ({ min, max, onChange }) => {
  return (
    <div>
      <Slider.Range
        dots
        min={min}
        max={max}
        step={1}
        onAfterChange={onChange}
      />
    </div>
  )
}
export default DateRange

DateRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
}

