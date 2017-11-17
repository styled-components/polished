// @flow
import type { Calculation } from '../types/calc'

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

const reverseString = v => v.split('').reverse().join('')
// because we dont have lookbehind support in js yet ->
const extractUnit = v =>
  typeof v === 'string'
    ? reverseString(reverseString(v).match(/.+?(?=\d)/)[0])
    : null

function calc(
  value: string,
  calculation: Calculation = v => v,
): number | string {
  if (typeof value === 'string') {
    const unit = extractUnit(value)

    return `${calculation(parseFloat(value))}${unit}`
  }
  return calculation(parseFloat(value))
}

export default calc
