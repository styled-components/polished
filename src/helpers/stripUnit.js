/** @module Helpers */

/**
 * Strip the unit from a given CSS value
 * @static
 * @param {string} value - A string containing a value with its unit.
 * @return {Number} Unitless value.
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit(100px)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit(100px)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

export function stripUnit(value) {
  const unitlessValue = parseFloat(value)
  if (isNaN(unitlessValue)) return value
  return unitlessValue
}

export default stripUnit
