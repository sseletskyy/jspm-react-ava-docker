import { LIFT_RANGE_LIMITS } from 'features/exchange/constants'

export const validateRangeInput = value => {
  let number = parseInt(value)
  if (number > LIFT_RANGE_LIMITS.MAX) {
    number = LIFT_RANGE_LIMITS.MAX
  } else if (number < LIFT_RANGE_LIMITS.MIN) {
    number = LIFT_RANGE_LIMITS.MIN
  }
  return number
}

const sortNumber = (a, b) => a - b

/**
 * Checks intersection, if left and right values equal, then one should be shifted out
 * @param {Array} value
 * @returns {Array}
 */
export const validateRangeSlider = (value) => {
  let newValue = [...value].sort(sortNumber)
  if (newValue[0] === newValue[1]) {
    if (newValue[0] <= LIFT_RANGE_LIMITS.MIN) {
      newValue = [LIFT_RANGE_LIMITS.MIN, LIFT_RANGE_LIMITS.MIN + 1]
    } else if (newValue[1] >= LIFT_RANGE_LIMITS.MAX) {
      newValue = [LIFT_RANGE_LIMITS.MAX - 1, LIFT_RANGE_LIMITS.MAX]
    } else {
      newValue = [newValue[0] - 1, newValue[1]]
    }
  }
  return newValue
}
