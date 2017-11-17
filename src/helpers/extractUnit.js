// @flow

const reverseString = (v: string): string => v.split('').reverse().join('')

/**
 * Extract the unit from a given CSS value and return it
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': `200${extractUnit('100px')}`
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: `200${extractUnit('100px')}`
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': '200px'
 * }
 */

function extractUnit(v: string | number): string {
  if (typeof v === 'string') {
    const matches = reverseString(v).match(/.+?(?=\d)/)
    if (!matches || matches.length < 1) return ''
    return reverseString(matches[0])
  }
  return ''
}

export default extractUnit
