// @flow
import extractUnit from './extractUnit'

type Calculation = (n: number) => string | number

/**
 * Strip the unit from a given CSS value, perform calculation on it and return unit suffixed value
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': calc('100px', base => base * 2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${calc('100px', base => base * 2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': '200px'
 * }
 */

function calc(
  value: string | number,
  calculation: Calculation = v => v,
): number | string {
  if (typeof value === 'string') {
    const unit = extractUnit(value)
    const unitlessValue = parseFloat(value)

    if (isNaN(unitlessValue)) return ''

    return `${calculation(parseFloat(value))}${unit}`
  }
  return calculation(parseFloat(value))
}

export default calc
