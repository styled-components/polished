// @flow

import mix from './mix'
import curry from '../internalHelpers/_curry'

/**
 * Shades a color by mixing it with black. Compared to `darken` it can produce
 * hue shifts, wheres `darken` manipulates the luminance channel and therefor
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage: number, color: string) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) throw new Error('Passed an incorrect argument to shade, please pass a percentage less than or equal to 1 and larger than or equal to -1.')
  return mix(percentage, color, 'rgb(0, 0, 0)')
}

export default curry(shade)
