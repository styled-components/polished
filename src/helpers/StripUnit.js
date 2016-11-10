/** @module Helpers */
import isInteger from '../internalHelpers/_isInteger'

/**
 * Strip the unit from a given CSS value
 * @static
 * @param {string} value - A string containing a value with its unit.
 * @return {Number} Unitless value.
 * @example
 * element {
 *   '--dimension': stripUnit(100px)
 * }
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

export function stripUnit(value) {
  const unitlessValue = parseFloat(value)
  if (isInteger(unitlessValue)) return unitlessValue
  return value
}

export default stripUnit
