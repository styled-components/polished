// @flow

import parseToHsl from './parseToHsl'
import toColorString from './toColorString'
import guard from '../internalHelpers/_guard'
import curry from '../internalHelpers/_curry'

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken(0.2, 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken(0.2, 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */
function darken(amount: number, color: string): string {
  const hslColor = parseToHsl(color)
  return toColorString({
    ...hslColor,
    lightness: guard(0, 1, hslColor.lightness - amount),
  })
}

const curriedDarken = curry(darken)
export default curriedDarken
