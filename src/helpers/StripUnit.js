/** @module Helpers */
import isInteger from '../internalHelpers/_isInteger'

/**
 * CSS to represent truncated text with an ellipsis.
 * @static
 * @param {string} [width = 100%] - Max-width for text to respect before being truncated.
 * @return {Object} CSS as JS for truncating text.
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
}

export default stripUnit
