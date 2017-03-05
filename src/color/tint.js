// @flow

import mix from './mix'

/**
 * Tints a color by mixing it with white. Leverages the mix color module.
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
  if (!percentage || !color) throw new Error('Passed insufficient arguments to tint, please pass a percentage and a color to be tinted.')
  if (typeof percentage !== 'number' || percentage > 1) throw new Error('Passed an incorrect argument to tint, please pass a percentage less than or equal to 1.')
  if (typeof color !== 'string') throw new Error('Passed an incorrect argument to tint, please pass a string representation of a color.')
  return mix(percentage, color, 'rgb(255, 255, 255)')
}

export default tint
