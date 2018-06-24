// @flow

/**
 * Strip the unit from a given CSS value, returning just the number. (or the original value if an invalid string was passed). Passing an optional boolean also returns the stripped unit.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 *   '--dimension': `${stripUnit('100px`) - 10}${stripUnit('100px', true)[1]}`
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')}
 *   --dimension: ${stripUnit('100px`) - 10}${stripUnit('100px', true)[1]}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 *   '--dimension': 1000px
 * }
 */

function stripUnit(
  value: string | number,
  returnUnit?: boolean,
): number | Array<number | string | undefined> | string {
  const unitlessValue = parseFloat(value)
  if (returnUnit) {
    const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
    if (typeof value === 'number' || !value.match(cssRegex)) return [value, '']
    const unit = value.match(cssRegex)[2] ? value.match(cssRegex)[2] : undefined
    return [unitlessValue, unit]
  } else {
    if (isNaN(unitlessValue)) return value
    return unitlessValue
  }
}

export default stripUnit
