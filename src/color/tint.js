// @flow

import mix from './mix'
import curry from '../internalHelpers/_curry'

/**
 * Tints a color by mixing it with white. Compared to `lighten` it can produce
 * hue shifts, wheres `lighten` manipulates the luminance channel and therefor
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
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) throw new Error('Passed an incorrect argument to tint, please pass a percentage less than or equal to 1 and larger than or equal to -1.')
  return mix(percentage, color, 'rgb(255, 255, 255)')
}

export default curry(tint)
