// @flow

import hexToRGBA from '../internalHelpers/_hexToRGBA'

/**
 * Convert HEX To RGB.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...color: hex2rgba('#f00')
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${hex2rgba('#f00')};
 *`
 *
 * // CSS in JS Output
 *
 * div {
 *   color: rgba(0, 15, 0, 0);
 * }
 */

function hex2rgba(hex: string) :any {
  const color = hexToRGBA(hex)
  const str = color.join(', ')
  return `rgba(${str})`
}
export default hex2rgba
