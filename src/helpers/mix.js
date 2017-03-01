// @flow

import rgba from './rgba'
import parseColorString from '../internalHelpers/_parseColorString'

/**
 * Mixes two colors together.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix('#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix('#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */
function mix(colorOrWeight: string | number, color: string, otherColor?: string): string {
  const weight = typeof colorOrWeight === 'number' ? colorOrWeight : 0.5
  const colorString1 = typeof colorOrWeight === 'number' ? color : colorOrWeight
  const colorString2 = typeof colorOrWeight === 'number' ? otherColor : color

  const parsedColor1 = parseColorString(colorString1)
  const color1 = {
    ...parsedColor1,
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1,
  }

  const parsedColor2 = parseColorString(colorString2)
  const color2 = {
    ...parsedColor2,
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1,
  }

  // The formular is copied by the original Sass implementation:
  // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
  const alphaDelta = color1.alpha - color2.alpha
  const x = (weight * 2) - 1
  const y = x * alphaDelta === -1 ? x : (x + alphaDelta)
  const z = (1 + (x * alphaDelta))
  const weight1 = ((y / z) + 1) / 2.0
  const weight2 = 1 - weight1

  const mixedColor = {
    red: Math.floor((color1.red * weight1) + (color2.red * weight2)),
    green: Math.floor((color1.green * weight1) + (color2.green * weight2)),
    blue: Math.floor((color1.blue * weight1) + (color2.blue * weight2)),
    alpha: color1.alpha + ((color2.alpha - color1.alpha) * (weight / 1.0)),
  }

  return rgba(mixedColor)
}

export default mix
