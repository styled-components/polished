// @flow

import hexToRGB from '../internalHelpers/_hexToRGB'

/**
 * Convert HEX To RGB.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...color: hex2rgb('#f00')
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${hex2rgb('#f00')};
 *`
 *
 * // CSS in JS Output
 *
 * div {
 *   color: rgb((255, 0, 0));
 * }
 */

function hex2rgb(hex: string) :any {
  const color = hexToRGB(hex)
  color.splice(-1, 1)
  const str = color.join(', ')
  return `rgb(${str})`
}
export default hex2rgb
