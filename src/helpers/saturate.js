// @flow

import parseColorString from '../internalHelpers/_parseColorString'
import rgbToHsl from '../internalHelpers/_rgbToHsl'
import hslToHex from '../internalHelpers/_hslToHex'
import hslToRgb from '../internalHelpers/_hslToRgb'
import guard from '../internalHelpers/_guard'

/**
 * Returns a string value for the saturated color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */
function saturate(amount: number, color: string): string {
  // parse color string to hsl
  const hslColor = rgbToHsl(parseColorString(color))
  const value = {
    ...hslColor,
    saturation: guard(0, 1, hslColor.saturation + amount),
  }
  return value.alpha >= 1 || value.alpha === undefined
    ? hslToHex(value.hue, value.saturation, value.lightness)
    : `rgba(${hslToRgb(value.hue, value.saturation, value.lightness)},${value.alpha})`
}

export default saturate
