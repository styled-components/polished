// @flow

import parseToHsl from './parseToHsl'
import hslToHex from '../internalHelpers/_hslToHex'
import hslToRgb from '../internalHelpers/_hslToRgb'

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue('#448'),
 *   background: adjustHue('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue('#448')};
 *   background: ${adjustHue('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#5b4488";
 *   background: "rgba(136,100,205,0.7)";
 * }
 */
function adjustHue(degree: number, color: string): string {
  // parse color string to hsl
  const hslColor = parseToHsl(color)
  const value = {
    ...hslColor,
    hue: (hslColor.hue + degree) % 360,
  }
  return value.alpha >= 1 || value.alpha === undefined
    ? hslToHex(value.hue, value.saturation, value.lightness)
    : `rgba(${hslToRgb(value.hue, value.saturation, value.lightness)},${value.alpha})`
}

export default adjustHue
