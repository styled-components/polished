// @flow

import mix from './mix'
import curry from '../internalHelpers/_curry'

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage: number, color: string) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) {
    throw new Error(
      'Passed an incorrect argument to tint, please pass a percentage less than or equal to 1 and larger than or equal to -1.',
    )
  }
  if (typeof color !== 'string') {
    throw new Error(
      'Passed an incorrect argument to a color function, please pass a string representation of a color.',
    )
  }
  return mix(percentage, color, 'rgb(255, 255, 255)')
}

// Don’t inline this variable into export because Rollup will remove the /*#__PURE__*/ comment
const curriedTint = /*#__PURE__*/ curry(tint) // eslint-disable-line spaced-comment
export default curriedTint
