// @flow

import mix from './mix'

/**
 * Shades a color by mixing it with black. Leverages the mix color module.
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
  if (!percentage || !color) throw new Error('Passed insufficient arguments to shade, please pass a percentage and a color to be shaded.')
  if (typeof percentage !== 'number' || percentage > 1) throw new Error('Passed an incorrect argument to shade, please pass a percentage less than or equal to 1.')
  if (typeof color !== 'string') throw new Error('Passed an incorrect argument to shade, please pass a string representation of a color.')
  return mix(percentage, color, 'rgb(0, 0, 0)')
}

export default shade
