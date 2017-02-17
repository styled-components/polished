// @flow

import parseColorString from '../internalHelpers/_parseColorString'
import rgbToHsl from '../internalHelpers/_rgbToHsl'
import hslToHex from '../internalHelpers/_hslToHex'
import hslToRgb from '../internalHelpers/_hslToRgb'

/**
 * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: complement('#448'),
 *   background: complement('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${complement('#448')};
 *   background: ${complement('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#884";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */
function complement(color: string): string {
  // parse color string to hsl
  const hslColor = rgbToHsl(parseColorString(color))
  const value = {
    ...hslColor,
    hue: (hslColor.hue + 180) % 360,
  }
  return value.alpha >= 1 || value.alpha === undefined
    ? hslToHex(value.hue, value.saturation, value.lightness)
    : `rgba(${hslToRgb(value.hue, value.saturation, value.lightness)},${value.alpha})`
}

export default complement
