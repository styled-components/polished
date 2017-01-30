// @flow

/**
 * Strip the unit from a given CSS value, returning just the number. (or the original value if an invalid string was passed)
 */

function stripUnit(value: string): number|string {
  const unitlessValue = parseFloat(value)
  if (isNaN(unitlessValue)) return value
  return unitlessValue
}

export default stripUnit
